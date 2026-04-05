"use client";

import { useState } from "react";
import { Typography, Avatar, ContentBadge } from "@montage-ui/core";
import { IconChevronRight } from "@montage-ui/icon";
import { nearbyRestaurants, areaOptions, type Area } from "@/data/mock";

export default function NearbySection() {
  const [selectedArea, setSelectedArea] = useState<Area>("강남");

  const filtered = nearbyRestaurants.filter((r) => r.area === selectedArea);

  return (
    <section className="py-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <Typography variant="heading2" weight="bold">
          내 주변 인기 맛집
        </Typography>
        <div className="relative">
          <select
            value={selectedArea}
            onChange={(e) => setSelectedArea(e.target.value as Area)}
            className="appearance-none bg-white border border-gray-200 rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700 cursor-pointer hover:border-blue-400 focus:outline-none focus:border-blue-500 pr-7"
          >
            {areaOptions.map((area) => (
              <option key={area} value={area}>
                {area}역
              </option>
            ))}
          </select>
          <span className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xs">
            ▼
          </span>
        </div>
        <div className="flex-1" />
        <div className="group flex items-center gap-0.5 cursor-pointer transition-colors">
          <Typography variant="caption1" color="semantic.label.assistive" className="group-hover:!text-[var(--semantic-label-alternative)] transition-colors">
            전체 보기
          </Typography>
          <IconChevronRight width={14} height={14} className="text-[var(--semantic-label-assistive)] group-hover:text-[var(--semantic-label-alternative)] transition-colors" />
        </div>
      </div>

      {/* Grid list */}
      <div className="grid grid-cols-2 gap-x-8 gap-y-2">
        {filtered.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex items-center gap-4 px-4 py-3.5 rounded-xl hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <Avatar size="large" variant="company" src={restaurant.imageUrl} alt={restaurant.name} />
            <div className="flex-1 min-w-0 flex flex-col gap-1">
              <Typography variant="body1" weight="bold" noWrap>
                {restaurant.name}
              </Typography>
              <div className="flex items-center gap-1">
                <Typography variant="caption1" color="semantic.label.assistive">
                  {restaurant.category}
                </Typography>
                <Typography variant="caption2" color="semantic.label.assistive">
                  · {restaurant.location}
                </Typography>
              </div>
            </div>
            <ContentBadge size="small" color={restaurant.matchScore >= 93 ? "blue" : restaurant.matchScore >= 90 ? "green" : "neutral"}>
              예약률 {restaurant.matchScore}%
            </ContentBadge>
          </div>
        ))}
      </div>
    </section>
  );
}
