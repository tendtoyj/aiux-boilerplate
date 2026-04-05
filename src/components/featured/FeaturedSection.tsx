"use client";

import CardCarousel from "@/components/carousel/CardCarousel";
import { magazines } from "@/data/mock";

export default function FeaturedSection() {
  return (
    <div className="pb-6">
    <CardCarousel title="지금 주목할 소식">
      {magazines.map((mag) => (
        <div
          key={mag.id}
          className="relative flex-shrink-0 rounded-xl overflow-hidden cursor-pointer"
          style={{ width: "calc((100% - 32px) / 2.5)", scrollSnapAlign: "start" }}
        >
          {/* Image */}
          <div className="relative aspect-[16/9]">
            <img
              src={mag.imageUrl}
              alt={mag.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            {/* Text overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <p className="text-white text-lg font-bold leading-snug">
                {mag.title}
              </p>
              <p className="text-white/70 text-sm mt-1">
                {mag.subtitle}
              </p>
            </div>
          </div>
        </div>
      ))}
    </CardCarousel>
    </div>
  );
}
