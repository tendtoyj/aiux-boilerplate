import { tool } from "ai";
import { z } from "zod";
import { getUserData } from "@/data/user-mock";

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

export function createShowCoupon(userId: string) {
  return tool({
    description:
      "쿠폰 정보를 제공합니다. 특정 레스토랑 또는 전체 쿠폰을 보여줍니다.",
    inputSchema: z.object({
      restaurantId: z
        .string()
        .optional()
        .describe("특정 레스토랑 이름, 없으면 전체 쿠폰 표시"),
    }),
    execute: async ({ restaurantId }) => {
      const data = getUserData(userId) ?? getUserData("user-001")!;
      if (restaurantId) {
        const filtered = data.coupons.filter((c) =>
          c.restaurantName.includes(restaurantId)
        );
        return {
          coupons: filtered.length > 0 ? filtered : data.coupons.slice(0, 1),
        } satisfies ShowCouponOutput;
      }
      return { coupons: data.coupons } satisfies ShowCouponOutput;
    },
  });
}
