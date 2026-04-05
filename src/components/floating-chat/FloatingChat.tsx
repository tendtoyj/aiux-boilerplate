"use client";

import { useState, useRef, useEffect } from "react";
import { useChat } from "@ai-sdk/react";
import { MessageCircle, X, Send } from "lucide-react";
import ChatMessage from "./ChatMessage";

const GREETING = "안녕하세요! Match Table AI 어시스턴트입니다. 무엇을 도와드릴까요?";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, sendMessage, status } = useChat();
  const isStreaming = status === "streaming";

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isStreaming) return;
    sendMessage({ text: input });
    setInput("");
  };

  return (
    <>
      {/* Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">
                AI 어시스턴트
              </h3>
              <p className="text-xs text-gray-400">Match Table 도우미</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {/* Greeting */}
            <div className="flex justify-start">
              <div className="max-w-[80%] px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-gray-100 text-gray-800 text-sm leading-relaxed">
                {GREETING}
              </div>
            </div>

            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}

            {isStreaming &&
              messages.length > 0 &&
              messages[messages.length - 1].role !== "assistant" && (
                <div className="flex justify-start">
                  <div className="px-3.5 py-2.5 rounded-2xl rounded-bl-md bg-gray-100 text-gray-400 text-sm">
                    <span className="animate-pulse">...</span>
                  </div>
                </div>
              )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 px-4 py-3 border-t border-gray-100"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="메시지를 입력하세요..."
              className="flex-1 text-sm px-3 py-2 rounded-lg border border-gray-200 outline-none focus:border-blue-400 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || isStreaming}
              className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* FAB */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 hover:scale-105 cursor-pointer ${
          isOpen
            ? "bg-gray-600 hover:bg-gray-700"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <MessageCircle className="w-6 h-6 text-white" />
        )}
      </button>
    </>
  );
}
