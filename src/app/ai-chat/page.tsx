"use client";

import GlobalNavBar from "@/components/gnb/GlobalNavBar";
import FloatingChat from "@/components/floating-chat/FloatingChat";

export default function AiChatPage() {
  return (
    <div className="min-h-screen bg-white">
      <GlobalNavBar />
      <FloatingChat />
    </div>
  );
}
