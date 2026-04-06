import { tool } from "ai";
import { z } from "zod";

export interface RestaurantItem {
  name: string;
  photoUrl: string;
  rating: number;
  description: string;
  distance: string;
  category: string;
}

export interface ShowRestaurantOutput {
  restaurants: RestaurantItem[];
}

const mockRestaurants: RestaurantItem[] = [
  {
    name: "트라토리아 모리",
    photoUrl: "https://placehold.co/300x200/e8d5b7/333?text=Italian",
    rating: 4.7,
    description: "수제 파스타와 화덕 피자가 맛있는 정통 이탈리안",
    distance: "350m",
    category: "이탈리안",
  },
  {
    name: "을지로 골목식당",
    photoUrl: "https://placehold.co/300x200/d4e8d0/333?text=Korean",
    rating: 4.5,
    description: "혼밥하기 좋은 아늑한 한식 백반집",
    distance: "120m",
    category: "한식",
  },
  {
    name: "스시오마카세 하루",
    photoUrl: "https://placehold.co/300x200/d0d8e8/333?text=Japanese",
    rating: 4.8,
    description: "신선한 제철 생선으로 만드는 오마카세 코스",
    distance: "500m",
    category: "일식",
  },
  {
    name: "반미 사이공",
    photoUrl: "https://placehold.co/300x200/e8e0d0/333?text=Vietnamese",
    rating: 4.3,
    description: "정통 베트남 반미와 쌀국수 전문점",
    distance: "200m",
    category: "베트남",
  },
  {
    name: "버거앤프라이즈",
    photoUrl: "https://placehold.co/300x200/e8d0d0/333?text=Burger",
    rating: 4.4,
    description: "수제 패티와 크래프트 맥주의 조합",
    distance: "400m",
    category: "양식",
  },
];

export const showRestaurant = tool({
  description:
    "맛집을 추천합니다. 카테고리, 위치, 분위기를 기반으로 맛집 카드를 보여줍니다.",
  inputSchema: z.object({
    category: z.string().describe("음식 카테고리 (예: 이탈리안, 한식, 일식)"),
    location: z.string().describe("위치/지역 (예: 강남역, 홍대)"),
    mood: z
      .string()
      .optional()
      .describe("분위기/상황 (예: 혼밥, 데이트, 회식)"),
  }),
  execute: async ({ category }) => {
    // 카테고리로 필터링, 없으면 랜덤 선택
    const filtered = mockRestaurants.filter((r) =>
      r.category.includes(category)
    );
    const results =
      filtered.length > 0
        ? filtered.slice(0, 3)
        : mockRestaurants.slice(0, 3);

    return { restaurants: results } satisfies ShowRestaurantOutput;
  },
});
