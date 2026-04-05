import { tool } from "ai";
import { z } from "zod";

export interface CouponItem {
  name: string;
  discountRate: string;
  expiryDate: string;
  restaurantName: string;
  code: string;
}

export interface ShowCouponOutput {
  coupons: CouponItem[];
}

const mockCoupons: CouponItem[] = [
  {
    name: "첫 방문 할인",
    discountRate: "20%",
    expiryDate: "2026-04-30",
    restaurantName: "트라토리아 모리",
    code: "FIRST20",
  },
  {
    name: "점심 특가",
    discountRate: "15%",
    expiryDate: "2026-04-15",
    restaurantName: "을지로 골목식당",
    code: "LUNCH15",
  },
  {
    name: "음료 무료",
    discountRate: "음료 1잔 무료",
    expiryDate: "2026-05-01",
    restaurantName: "반미 사이공",
    code: "DRINK0",
  },
];

export const showCoupon = tool({
  description:
    "쿠폰 정보를 제공합니다. 특정 레스토랑 또는 전체 쿠폰을 보여줍니다.",
  inputSchema: z.object({
    restaurantId: z
      .string()
      .optional()
      .describe("특정 레스토랑 ID, 없으면 전체 쿠폰 표시"),
  }),
  execute: async ({ restaurantId }) => {
    if (restaurantId) {
      const filtered = mockCoupons.filter((c) =>
        c.restaurantName.includes(restaurantId)
      );
      return {
        coupons: filtered.length > 0 ? filtered : mockCoupons.slice(0, 1),
      } satisfies ShowCouponOutput;
    }
    return { coupons: mockCoupons } satisfies ShowCouponOutput;
  },
});
