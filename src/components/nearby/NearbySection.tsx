"use client";

import { useState } from "react";
import { Typography, Avatar, ContentBadge } from "@montage-ui/core";
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
        <div className="flex items-center gap-1">
          <Typography variant="caption1" color="semantic.label.assistive" style={{ cursor: "pointer" }}>
            전체 보기 &gt;
          </Typography>
        </div>
      </div>

      {/* Grid list */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {filtered.map((restaurant) => (
          <div
            key={restaurant.id}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
          >
            <Avatar size="large" variant="company">
              <img
                src={restaurant.imageUrl}
                alt={restaurant.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </Avatar>
            <div className="flex-1 min-w-0">
              <Typography variant="body1" weight="bold" noWrap>
                {restaurant.name}
              </Typography>
              <Typography variant="caption1" color="semantic.label.assistive" className="mt-0.5">
                {restaurant.category}
              </Typography>
              <Typography variant="caption2" color="semantic.label.assistive" className="mt-0.5">
                {restaurant.location}
              </Typography>
            </div>
            <ContentBadge size="small" color="neutral">
              적합도 {restaurant.matchScore}%
            </ContentBadge>
          </div>
        ))}
      </div>
    </section>
  );
}
