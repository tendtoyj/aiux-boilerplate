"use client";

import type { ReadHistoryOutput } from "@/lib/tools/read-history";
import { Star } from "lucide-react";

export default function HistoryTimeline({
  data,
}: {
  data: ReadHistoryOutput;
}) {
  return (
    <div className="p-3 rounded-xl bg-white border border-gray-100 shadow-sm">
      <p className="text-[10px] font-medium text-gray-400 mb-2">
        {data.period}
      </p>
      <div className="relative pl-4">
        {/* Timeline line */}
        <div className="absolute left-[5px] top-1 bottom-1 w-px bg-gray-200" />

        <div className="space-y-3">
          {data.visits.map((v, i) => (
            <div key={i} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-4 top-1 w-2.5 h-2.5 rounded-full bg-blue-400 border-2 border-white" />
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-xs font-semibold text-gray-900">
                    {v.restaurantName}
                  </span>
                  <div className="flex items-center gap-0.5">
                    <Star className="w-2.5 h-2.5 text-amber-400 fill-amber-400" />
                    <span className="text-[10px] text-gray-500">
                      {v.rating}
                    </span>
                  </div>
                </div>
                <p className="text-[11px] text-gray-500 mt-0.5">{v.menu}</p>
                <p className="text-[10px] text-gray-300 mt-0.5">{v.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
