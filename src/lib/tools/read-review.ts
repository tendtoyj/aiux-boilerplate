import { tool } from "ai";
import { z } from "zod";
import { getUserData } from "@/data/user-mock";

export interface ReviewItem {
  text: string;
  rating: number;
  date: string;
  restaurantName: string;
}

export interface ReadReviewOutput {
  reviews: ReviewItem[];
}

export const readReview = tool({
  description:
    "리뷰를 조회합니다. 사용자가 작성한 리뷰 목록을 보여줍니다.",
  inputSchema: z.object({
    userId: z.string().describe("사용자 ID"),
    restaurantId: z
      .string()
      .optional()
      .describe("특정 레스토랑 ID, 없으면 전체 리뷰"),
  }),
  execute: async ({ userId, restaurantId }) => {
    const data = getUserData(userId) ?? getUserData("user-001")!;
    if (restaurantId) {
      const filtered = data.reviews.filter((r) =>
        r.restaurantName.includes(restaurantId)
      );
      return {
        reviews: filtered.length > 0 ? filtered : data.reviews.slice(0, 1),
      } satisfies ReadReviewOutput;
    }
    return { reviews: data.reviews } satisfies ReadReviewOutput;
  },
});
