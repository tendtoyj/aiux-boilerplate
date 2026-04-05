"use client";

import type { ShowCouponOutput } from "@/lib/tools/show-coupon";
import { Ticket } from "lucide-react";

export default function CouponCards({ data }: { data: ShowCouponOutput }) {
  return (
    <div className="flex flex-col gap-2">
      {data.coupons.map((c, i) => (
        <div
          key={i}
          className="p-3 rounded-xl bg-white border border-dashed border-blue-200 shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5">
                <Ticket className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-sm font-semibold text-gray-900">
                  {c.name}
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-0.5">
                {c.restaurantName}
              </p>
            </div>
            <span className="text-lg font-bold text-blue-600 shrink-0">
              {c.discountRate}
            </span>
          </div>
          <div className="flex items-center justify-between mt-2 pt-2 border-t border-dashed border-gray-100">
            <span className="text-[10px] text-gray-400">
              ~{c.expiryDate}까지
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-50 text-gray-500">
              {c.code}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
