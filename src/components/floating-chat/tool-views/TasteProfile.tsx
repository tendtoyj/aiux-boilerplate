"use client";

import type { ShowTasteOutput, TasteScores } from "@/lib/tools/show-taste";

const tasteLabels: Record<keyof TasteScores, string> = {
  spicy: "매운맛",
  sweet: "단맛",
  salty: "짠맛",
  sour: "신맛",
  umami: "감칠맛",
  oily: "기름진맛",
};

const tasteColors: Record<keyof TasteScores, string> = {
  spicy: "bg-red-400",
  sweet: "bg-pink-400",
  salty: "bg-blue-400",
  sour: "bg-yellow-400",
  umami: "bg-purple-400",
  oily: "bg-orange-400",
};

export default function TasteProfile({ data }: { data: ShowTasteOutput }) {
  return (
    <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm space-y-3">
      <div className="space-y-1.5">
        {(Object.entries(data.scores) as [keyof TasteScores, number][]).map(
          ([key, value]) => (
            <div key={key} className="flex items-center gap-2">
              <span className="text-[11px] text-gray-500 w-14 shrink-0">
                {tasteLabels[key]}
              </span>
              <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${tasteColors[key]}`}
                  style={{ width: `${value}%` }}
                />
              </div>
              <span className="text-[11px] text-gray-400 w-7 text-right">
                {value}
              </span>
            </div>
          )
        )}
      </div>

      <div className="flex flex-wrap gap-1">
        {data.preferredCategories.map((cat) => (
          <span
            key={cat}
            className="text-[10px] px-2 py-0.5 rounded-full bg-violet-50 text-violet-600"
          >
            {cat}
          </span>
        ))}
      </div>

      <p className="text-xs text-gray-600 leading-relaxed">{data.summary}</p>
    </div>
  );
}
