"use client";

import React, { useState, useCallback } from "react";
import {
  Rocket,
  Code2,
  Archive,
  FileText,
  LayoutDashboard,
  MessageSquare,
  User,
  GripVertical,
} from "lucide-react";

// ─── 협업 메모 타입 ───
interface CollabNote {
  id: string;
  author: string;
  message: string;
  timestamp: string;
  badge?: "important" | "info";
}

// 메모 데이터 (최신순)
const collabNotes: CollabNote[] = [
  {
    id: "3",
    author: "유정",
    message:
      "Match Table 메인 페이지 구현 완료. 원티드 홈페이지 구조 기반으로 GNB, 퀵메뉴, 카드 캐러셀, 매거진, 테마, 근처 맛집 섹션 구성.",
    timestamp: "26/04/05(토) 오후",
    badge: "important",
  },
  {
    id: "2",
    author: "유정",
    message:
      "랜딩 허브 페이지 추가. 기존 패턴 기반으로 프로토타입 진입점 구성.",
    timestamp: "26/04/05(토) 오후",
    badge: "info",
  },
  {
    id: "1",
    author: "유정",
    message:
      "Match Table 프로젝트 시작. Montage UI + Next.js 16 기반 프로토타이핑 환경 세팅 완료.",
    timestamp: "26/04/05(토) 오전",
  },
];

// ─── Section Header ───
interface SectionHeaderProps {
  icon: React.ReactNode;
  title: string;
  badge?: string;
  badgeColor?: "gray" | "blue" | "amber";
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  icon,
  title,
  badge,
  badgeColor = "gray",
}) => {
  const badgeColors = {
    gray: "bg-gray-100 text-gray-500",
    blue: "bg-blue-50 text-blue-600",
    amber: "bg-amber-50 text-amber-600",
  };

  return (
    <div className="flex items-center gap-2 mb-4 pb-3 border-b border-gray-100">
      <span className="text-gray-400">{icon}</span>
      <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
        {title}
      </span>
      {badge && (
        <span
          className={`text-xs px-2 py-0.5 rounded-full ${badgeColors[badgeColor]}`}
        >
          {badge}
        </span>
      )}
    </div>
  );
};

// ─── Category Label ───
const CategoryLabel: React.FC<{ label: string }> = ({ label }) => (
  <div className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-2 mt-4 first:mt-0">
    {label}
  </div>
);

// ─── Entry Button ───
interface EntryButtonProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  onClick: () => void;
  disabled?: boolean;
  variant?: "default" | "primary" | "coming-soon";
}

const EntryButton: React.FC<EntryButtonProps> = ({
  icon,
  title,
  description,
  onClick,
  disabled = false,
  variant = "default",
}) => {
  const isComingSoon = variant === "coming-soon";
  const isPrimary = variant === "primary";

  return (
    <button
      onClick={onClick}
      disabled={disabled || isComingSoon}
      className={`
        w-full p-3 rounded-lg border text-left transition-all duration-200 group cursor-pointer
        ${
          isComingSoon
            ? "bg-gray-50 border-dashed border-gray-200 cursor-not-allowed opacity-60"
            : isPrimary
              ? "bg-gray-900 border-gray-900 text-white hover:bg-gray-800"
              : "bg-white border-gray-200 hover:border-blue-400 hover:bg-blue-50 hover:shadow-sm"
        }
      `}
    >
      <div className="flex items-center gap-3">
        <div
          className={`
          w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0
          ${isComingSoon ? "bg-gray-100" : isPrimary ? "bg-white/10" : "bg-gray-100"}
        `}
        >
          {icon}
        </div>
        <div className="flex-1 min-w-0">
          <h3
            className={`font-medium text-sm ${
              isComingSoon
                ? "text-gray-400"
                : isPrimary
                  ? "text-white"
                  : "text-gray-900"
            }`}
          >
            {title}
            {isComingSoon && (
              <span className="ml-2 text-xs text-gray-400">(준비 중)</span>
            )}
          </h3>
          {description && (
            <p
              className={`mt-0.5 text-xs truncate ${
                isComingSoon
                  ? "text-gray-400"
                  : isPrimary
                    ? "text-gray-300"
                    : "text-gray-500"
              }`}
            >
              {description}
            </p>
          )}
        </div>
      </div>
    </button>
  );
};

// ─── Empty Placeholder ───
const EmptyPlaceholder: React.FC<{ message: string }> = ({ message }) => (
  <div className="text-center py-8 text-gray-400 text-sm">{message}</div>
);

// ─── Note Item ───
const NoteItem: React.FC<{ note: CollabNote }> = ({ note }) => {
  const badgeStyles = {
    important: "bg-red-50 text-red-600 border-red-100",
    info: "bg-blue-50 text-blue-600 border-blue-100",
  };
  const badgeLabels = {
    important: "중요",
    info: "참고",
  };

  return (
    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 hover:border-gray-200 transition-colors">
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-medium text-gray-700">
          {note.timestamp}
        </span>
        {note.badge && (
          <span
            className={`text-xs px-1.5 py-0.5 rounded border ${badgeStyles[note.badge]}`}
          >
            {badgeLabels[note.badge]}
          </span>
        )}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{note.message}</p>
      <div className="flex items-center gap-1.5 mt-2">
        <div className="w-4 h-4 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="w-2.5 h-2.5 text-gray-400" />
        </div>
        <span className="text-xs text-gray-400">{note.author}</span>
      </div>
    </div>
  );
};

// ─── Collaboration Notes Panel (resizable) ───
const CollabNotesPanel: React.FC<{
  width: number;
  onResize: (w: number) => void;
}> = ({ width, onResize }) => {
  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      const startX = e.clientX;
      const startWidth = width;

      const handleMouseMove = (e: MouseEvent) => {
        const diff = e.clientX - startX;
        const newWidth = Math.min(Math.max(startWidth + diff, 200), 500);
        onResize(newWidth);
      };

      const handleMouseUp = () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [width, onResize],
  );

  return (
    <div
      className="flex-shrink-0 bg-white h-full overflow-hidden flex"
      style={{ width: `${width}px` }}
    >
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-gray-500" />
            <h2 className="font-semibold text-gray-800">팀 노트</h2>
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
              {collabNotes.length}
            </span>
          </div>
          <p className="text-xs text-gray-400 mt-1">개발 & 디자인 협업 메모</p>
        </div>
        <div className="flex-1 overflow-y-auto p-3 space-y-3">
          {collabNotes.map((note) => (
            <NoteItem key={note.id} note={note} />
          ))}
        </div>
        <div className="p-3 border-t border-gray-100 bg-gray-50">
          <p className="text-xs text-gray-400 text-center">
            메모 추가는 코드에서 직접 수정
          </p>
        </div>
      </div>
      {/* Resize Handle */}
      <div
        className="w-2 bg-gray-100 hover:bg-blue-200 cursor-col-resize flex items-center justify-center transition-colors group"
        onMouseDown={handleMouseDown}
      >
        <GripVertical className="w-3 h-3 text-gray-400 group-hover:text-blue-500" />
      </div>
    </div>
  );
};

// ─── Main Landing Page ───
export default function LandingPage() {
  const [panelWidth, setPanelWidth] = useState(320);

  return (
    <div className="h-screen w-full bg-gradient-to-b from-gray-50 to-white text-gray-900 font-sans flex overflow-hidden">
      {/* Left Panel - Collaboration Notes */}
      <CollabNotesPanel width={panelWidth} onResize={setPanelWidth} />

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-y-auto h-full">
        {/* Header */}
        <div className="max-w-5xl mx-auto mb-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gray-900 flex items-center justify-center">
              <span className="text-white text-sm font-bold">M</span>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-gray-900">
                Match Table
              </h1>
              <span className="text-xs text-gray-400">프로토타입 탐색</span>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-6">
          {/* ==================== PROJECT DOCUMENTS ==================== */}
          <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
            <SectionHeader
              icon={<FileText className="w-4 h-4" />}
              title="Project Documents"
            />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <EntryButton
                icon={<FileText className="w-4 h-4 text-blue-600" />}
                title="구현 계획서"
                description="Match Table 메인 페이지 구현 계획"
                onClick={() => window.open("/docs/plan", "_blank")}
                variant="coming-soon"
              />
            </div>
          </div>

          {/* ==================== HAND OFF ==================== */}
          <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
            <SectionHeader
              icon={<Rocket className="w-4 h-4" />}
              title="Hand Off"
            />
            <EmptyPlaceholder message="완성된 기능이 없습니다" />
          </div>

          {/* ==================== DEV ==================== */}
          <div className="p-8 pb-12 rounded-xl bg-white border border-gray-100 shadow-sm">
            <SectionHeader
              icon={<Code2 className="w-4 h-4" />}
              title="Dev"
              badge="개발 중"
              badgeColor="blue"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Functions */}
              <div>
                <CategoryLabel label="Functions" />
                <div className="space-y-2">
                  <EntryButton
                    icon={<LayoutDashboard className="w-4 h-4 text-blue-600" />}
                    title="메인 페이지"
                    description="Match Table 메인 페이지"
                    onClick={() => window.open("/match-table", "_blank")}
                    variant="default"
                  />
                </div>
              </div>

              {/* Flows */}
              <div>
                <CategoryLabel label="Flows" />
                <EmptyPlaceholder message="플로우 준비 중" />
              </div>

              {/* Tests */}
              <div>
                <CategoryLabel label="Tests" />
                <EmptyPlaceholder message="테스트 준비 중" />
              </div>
            </div>
          </div>

          {/* ==================== DEPRECATED ==================== */}
          <div className="p-5 rounded-xl bg-white border border-gray-100 shadow-sm">
            <SectionHeader
              icon={<Archive className="w-4 h-4" />}
              title="Deprecated"
              badge="미사용"
              badgeColor="amber"
            />
            <EmptyPlaceholder message="미사용 기능이 없습니다" />
          </div>
        </div>
      </div>
    </div>
  );
}
