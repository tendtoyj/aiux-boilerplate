"use client";

export default function ToolLoading({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-50 text-gray-400 text-xs">
      <span className="inline-block w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
      {name} 불러오는 중...
    </div>
  );
}
