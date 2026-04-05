import { tool } from "ai";
import { z } from "zod";

export interface ReviewItem {
  text: string;
  rating: number;
  date: string;
  restaurantName: string;
}

export interface ReadReviewOutput {
  reviews: ReviewItem[];
}

const mockReviews: ReviewItem[] = [
  {
    text: "파스타 면이 정말 쫄깃하고 소스가 진해요. 재방문 의사 100%!",
    rating: 4.5,
    date: "2026-04-04",
    restaurantName: "트라토리아 모리",
  },
  {
    text: "런치 오마카세 가성비 최고. 특히 참치 배꼽살이 녹았어요.",
    rating: 5.0,
    date: "2026-04-01",
    restaurantName: "스시오마카세 하루",
  },
  {
    text: "집밥 느낌 제대로. 반찬도 깔끔하고 된장찌개 깊은 맛.",
    rating: 4.0,
    date: "2026-03-28",
    restaurantName: "을지로 골목식당",
  },
  {
    text: "반미 빵이 바삭하고 속이 알차요. 쌀국수 육수도 진함.",
    rating: 4.2,
    date: "2026-03-20",
    restaurantName: "반미 사이공",
  },
];

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
    if (restaurantId) {
      const filtered = mockReviews.filter((r) =>
        r.restaurantName.includes(restaurantId)
      );
      return {
        reviews: filtered.length > 0 ? filtered : mockReviews.slice(0, 1),
      } satisfies ReadReviewOutput;
    }
    return { reviews: mockReviews } satisfies ReadReviewOutput;
  },
});
