"use client";

import { useRef, useState, useCallback, useEffect, type ReactNode } from "react";
import { FlexBox, Typography, IconButton } from "@montage-ui/core";
import { IconChevronLeft, IconChevronRight } from "@montage-ui/icon";

interface CardCarouselProps {
  title: string;
  children: ReactNode;
}

export default function CardCarousel({ title, children }: CardCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 1);
  }, []);

  useEffect(() => {
    checkScroll();
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8;
    el.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section className="py-6">
      {/* Header */}
      <FlexBox justifyContent="space-between" alignItems="center" className="mb-5">
        <Typography variant="heading2" weight="bold">
          {title}
        </Typography>
        <FlexBox alignItems="center" gap={4}>
          <IconButton
            variant="outlined"
            size="small"
            disabled={!canScrollLeft}
            onClick={() => scroll("left")}
          >
            <IconChevronLeft />
          </IconButton>
          <IconButton
            variant="outlined"
            size="small"
            disabled={!canScrollRight}
            onClick={() => scroll("right")}
          >
            <IconChevronRight />
          </IconButton>
        </FlexBox>
      </FlexBox>

      {/* Scrollable Cards */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {children}
      </div>

      <style jsx>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
