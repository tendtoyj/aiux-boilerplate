"use client";

import { useState, useRef, useCallback } from "react";
import { Navigation, X, EyeOff, ChevronLeft } from "lucide-react";
import PageNavList from "./PageNavList";
import PageNotes from "./PageNotes";

type Tab = "pages" | "notes";

const STORAGE_KEY_POSITION = "floating-menu-position";
const STORAGE_KEY_HIDDEN = "floating-menu-hidden";
const DEFAULT_POSITION = { x: 24, y: 24 };
const DRAG_THRESHOLD = 5;

function readStorage<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

export default function FloatingMenu() {
  const [position, setPosition] = useState(() =>
    readStorage(STORAGE_KEY_POSITION, DEFAULT_POSITION),
  );
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(
    () => readStorage(STORAGE_KEY_HIDDEN, false) || false,
  );
  const [activeTab, setActiveTab] = useState<Tab>("pages");

  // Drag refs
  const isDragging = useRef(false);
  const hasMoved = useRef(false);
  const startPointer = useRef({ x: 0, y: 0 });
  const startPosition = useRef({ x: 0, y: 0 });

  // Save position to localStorage
  const savePosition = useCallback((pos: { x: number; y: number }) => {
    try {
      localStorage.setItem(STORAGE_KEY_POSITION, JSON.stringify(pos));
    } catch {
      // ignore
    }
  }, []);

  // Clamp position within viewport
  const clamp = useCallback(
    (x: number, y: number) => {
      const margin = 8;
      const fabSize = 48;
      const maxX = window.innerWidth - fabSize - margin;
      const maxY = window.innerHeight - fabSize - margin;
      return {
        x: Math.max(margin, Math.min(x, maxX)),
        y: Math.max(margin, Math.min(y, maxY)),
      };
    },
    [],
  );

  // Pointer event handlers
  const handlePointerDown = useCallback(
    (e: React.PointerEvent) => {
      isDragging.current = true;
      hasMoved.current = false;
      startPointer.current = { x: e.clientX, y: e.clientY };
      startPosition.current = { ...position };
      (e.target as HTMLElement).setPointerCapture(e.pointerId);
    },
    [position],
  );

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return;
      const dx = e.clientX - startPointer.current.x;
      const dy = e.clientY - startPointer.current.y;

      if (
        !hasMoved.current &&
        Math.abs(dx) < DRAG_THRESHOLD &&
        Math.abs(dy) < DRAG_THRESHOLD
      ) {
        return;
      }
      hasMoved.current = true;

      // right/bottom 기준이므로 delta를 반전
      const newPos = clamp(
        startPosition.current.x - dx,
        startPosition.current.y - dy,
      );
      setPosition(newPos);
    },
    [clamp],
  );

  const handlePointerUp = useCallback(() => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (hasMoved.current) {
      savePosition(position);
    } else {
      // Click: toggle panel
      setIsOpen((prev) => !prev);
    }
  }, [position, savePosition]);

  // Hide / restore
  const handleHide = useCallback(() => {
    setIsHidden(true);
    setIsOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY_HIDDEN, "true");
    } catch {
      // ignore
    }
  }, []);

  const handleRestore = useCallback(() => {
    setIsHidden(false);
    try {
      localStorage.removeItem(STORAGE_KEY_HIDDEN);
    } catch {
      // ignore
    }
  }, []);

  // Panel direction: decide whether to open above/below, left/right of FAB
  const panelStyle = (() => {
    const fabSize = 48;
    const panelW = 340;
    const panelH = 400;
    const vpW = window.innerWidth;
    const vpH = window.innerHeight;

    // FAB의 실제 좌표 (left, top 기준)
    const fabLeft = vpW - position.x - fabSize;
    const fabTop = vpH - position.y - fabSize;

    // 패널을 FAB 위에 열지 아래에 열지
    const openAbove = fabTop > panelH + 8;
    // 패널을 FAB 왼쪽에 열지 오른쪽에 열지
    const openLeft = fabLeft > panelW - fabSize;

    const style: React.CSSProperties = {
      position: "fixed",
      width: panelW,
      maxHeight: panelH,
      zIndex: 50,
    };

    if (openAbove) {
      style.bottom = position.y + fabSize + 8;
    } else {
      style.top = fabTop + fabSize + 8;
    }

    if (openLeft) {
      style.right = position.x;
    } else {
      style.left = fabLeft;
    }

    return style;
  })();

  // ─── Mini tab (restore button when hidden) ───
  if (isHidden) {
    return (
      <button
        onClick={handleRestore}
        className="fixed right-0 z-50 w-3 h-10 bg-gray-300/50 hover:w-6 hover:bg-gray-400/70 rounded-l-md transition-all duration-200 cursor-pointer flex items-center justify-center"
        style={{ top: "50%" }}
        title="메뉴 복원"
      >
        <ChevronLeft className="w-3 h-3 text-white opacity-0 hover:opacity-100 transition-opacity" />
      </button>
    );
  }

  return (
    <>
      {/* Panel */}
      {isOpen && (
        <div
          style={panelStyle}
          className="bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-gray-100">
            <div className="flex gap-1">
              <button
                onClick={() => setActiveTab("pages")}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeTab === "pages"
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                페이지
              </button>
              <button
                onClick={() => setActiveTab("notes")}
                className={`text-xs px-3 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  activeTab === "notes"
                    ? "bg-gray-900 text-white"
                    : "text-gray-500 hover:bg-gray-100"
                }`}
              >
                메모
              </button>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={handleHide}
                className="w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
                title="숨기기"
              >
                <EyeOff className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-6 h-6 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Tab content */}
          <div className="flex-1 overflow-hidden">
            {activeTab === "pages" ? (
              <PageNavList onNavigate={() => setIsOpen(false)} />
            ) : (
              <PageNotes />
            )}
          </div>
        </div>
      )}

      {/* FAB (Draggable) */}
      <button
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`fixed z-50 w-12 h-12 rounded-full shadow-lg flex items-center justify-center transition-colors duration-200 cursor-grab active:cursor-grabbing select-none ${
          isOpen
            ? "bg-gray-700 hover:bg-gray-800"
            : "bg-gray-900 hover:bg-gray-800"
        }`}
        style={{
          right: position.x,
          bottom: position.y,
          touchAction: "none",
        }}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-white pointer-events-none" />
        ) : (
          <Navigation className="w-5 h-5 text-white pointer-events-none" />
        )}
      </button>
    </>
  );
}
