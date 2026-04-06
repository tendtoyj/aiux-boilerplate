"use client";

import Image from "next/image";
import type { ShowRestaurantOutput } from "@/lib/tools/show-restaurant";
import { Star } from "lucide-react";

export default function RestaurantCards({
  data,
}: {
  data: ShowRestaurantOutput;
}) {
  return (
    <div className="flex flex-col gap-2">
      {data.restaurants.map((r, i) => (
        <div
          key={i}
          className="flex gap-3 p-2.5 rounded-xl bg-white border border-gray-100 shadow-sm"
        >
          <Image
            src={r.photoUrl}
            alt={r.name}
            width={64}
            height={64}
            className="w-16 h-16 rounded-lg object-cover shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-semibold text-gray-900 truncate">
                {r.name}
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-100 text-gray-500 shrink-0">
                {r.distance}
              </span>
            </div>
            <div className="flex items-center gap-1 mt-0.5">
              <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
              <span className="text-xs text-gray-600">{r.rating}</span>
              <span className="text-[10px] text-gray-400 ml-1">
                {r.category}
              </span>
            </div>
            <p className="text-xs text-gray-500 mt-1 line-clamp-1">
              {r.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
