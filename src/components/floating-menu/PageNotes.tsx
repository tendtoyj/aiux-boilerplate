"use client";

import { useState, useEffect, useCallback } from "react";
import { usePathname } from "next/navigation";
import { StickyNote, User, Send, Trash2 } from "lucide-react";

interface PageNote {
  id: string;
  author: string;
  text: string;
  timestamp: string;
}

export default function PageNotes() {
  const pathname = usePathname();
  const [notes, setNotes] = useState<PageNote[]>([]);
  const [input, setInput] = useState("");
  const [author, setAuthor] = useState(() => {
    try {
      return localStorage.getItem("floating-menu-author") || "";
    } catch {
      return "";
    }
  });
  const [showAuthorInput, setShowAuthorInput] = useState(false);

  const fetchNotes = useCallback(() => {
    fetch("/api/floating-menu-notes")
      .then((r) => r.json())
      .then((data: Record<string, PageNote[]>) => {
        setNotes(data[pathname] ?? []);
      })
      .catch(() => {});
  }, [pathname]);

  useEffect(() => {
    fetchNotes();
  }, [fetchNotes]);

  const handleAdd = async () => {
    const text = input.trim();
    if (!text) return;

    const name = author.trim() || "익명";
    await fetch("/api/floating-menu-notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pathname, text, author: name }),
    });

    if (name !== "익명") {
      try {
        localStorage.setItem("floating-menu-author", name);
      } catch {}
    }

    setInput("");
    fetchNotes();
  };

  const handleDelete = async (noteId: string) => {
    await fetch("/api/floating-menu-notes", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ pathname, noteId }),
    });
    fetchNotes();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAdd();
    }
  };

  return (
    <div className="flex flex-col h-full">
      {/* 현재 페이지 경로 */}
      <div className="flex items-center justify-between px-3 py-2 border-b border-gray-100">
        <span className="text-[11px] font-mono text-gray-400 bg-gray-50 px-2 py-0.5 rounded">
          {pathname}
        </span>
        <button
          onClick={() => setShowAuthorInput((v) => !v)}
          className="text-[11px] text-gray-400 hover:text-gray-600 cursor-pointer"
        >
          {author || "작성자 설정"}
        </button>
      </div>

      {/* 작성자 입력 */}
      {showAuthorInput && (
        <div className="px-3 py-2 border-b border-gray-100 bg-gray-50">
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            onBlur={() => {
              setShowAuthorInput(false);
              try {
                localStorage.setItem(
                  "floating-menu-author",
                  author.trim(),
                );
              } catch {}
            }}
            placeholder="이름 입력"
            className="w-full text-xs px-2 py-1 rounded border border-gray-200 outline-none focus:border-blue-400"
            autoFocus
          />
        </div>
      )}

      {/* 메모 목록 */}
      <div className="flex-1 overflow-y-auto p-2">
        {notes.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-gray-400 gap-2 py-8">
            <StickyNote className="w-8 h-8 text-gray-300" />
            <p className="text-sm">이 페이지에 메모가 없습니다</p>
          </div>
        ) : (
          <div className="flex flex-col gap-2">
            {notes.map((note) => (
              <div
                key={note.id}
                className="group px-3 py-2.5 bg-gray-50 rounded-xl"
              >
                <p className="text-sm text-gray-700 leading-relaxed">
                  {note.text}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <User className="w-3 h-3 text-gray-400" />
                  <span className="text-[11px] text-gray-400">
                    {note.author}
                  </span>
                  <span className="text-[11px] text-gray-300">
                    {note.timestamp}
                  </span>
                  <button
                    onClick={() => handleDelete(note.id)}
                    className="ml-auto opacity-0 group-hover:opacity-100 text-gray-300 hover:text-red-400 transition-all cursor-pointer"
                  >
                    <Trash2 className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 입력 폼 */}
      <div className="flex items-center gap-2 px-3 py-2.5 border-t border-gray-100">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="메모 작성..."
          className="flex-1 text-sm px-2.5 py-1.5 rounded-lg border border-gray-200 outline-none focus:border-blue-400 transition-colors"
        />
        <button
          onClick={handleAdd}
          disabled={!input.trim()}
          className="w-7 h-7 rounded-lg bg-gray-900 text-white flex items-center justify-center hover:bg-gray-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors cursor-pointer"
        >
          <Send className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
