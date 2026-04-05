"use client";

import type { ReadReviewOutput } from "@/lib/tools/read-review";
import { Star } from "lucide-react";

export default function ReviewCards({ data }: { data: ReadReviewOutput }) {
  return (
    <div className="flex flex-col gap-2">
      {data.reviews.map((r, i) => (
        <div
          key={i}
          className="p-2.5 rounded-xl bg-white border border-gray-100 shadow-sm"
        >
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-gray-900">
              {r.restaurantName}
            </span>
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, si) => (
                <Star
                  key={si}
                  className={`w-2.5 h-2.5 ${
                    si < Math.round(r.rating)
                      ? "text-amber-400 fill-amber-400"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-1 leading-relaxed">
            {r.text}
          </p>
          <p className="text-[10px] text-gray-300 mt-1">{r.date}</p>
        </div>
      ))}
    </div>
  );
}
