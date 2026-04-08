import { tool } from "ai";
import { z } from "zod";
import { getUserData, getRestaurantPool, type RestaurantPoolItem } from "@/data/user-mock";

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

/** 유저 활동 지역과 레스토랑 지역 기반으로 거리 텍스트 생성 */
function computeDistance(
  restaurantArea: string,
  userAreas: string[],
): string {
  if (userAreas.includes(restaurantArea)) {
    // 같은 지역 → 가까운 거리
    const near = [120, 150, 200, 250, 300];
    return `${near[Math.floor(Math.random() * near.length)]}m`;
  }
  // 다른 지역 → 먼 거리
  const far = [800, 950, 1100, 1200, 1500];
  const m = far[Math.floor(Math.random() * far.length)];
  return m >= 1000 ? `${(m / 1000).toFixed(1)}km` : `${m}m`;
}

/** RestaurantPoolItem → RestaurantItem 변환 */
function toRestaurantItem(
  pool: RestaurantPoolItem,
  userAreas: string[],
): RestaurantItem {
  return {
    name: pool.name,
    photoUrl: pool.photoUrl,
    rating: pool.rating,
    description: pool.description,
    distance: computeDistance(pool.area, userAreas),
    category: pool.category,
  };
}

export function createShowRestaurant(userId: string) {
  return tool({
    description:
      "맛집을 추천합니다. 카테고리, 위치, 분위기를 기반으로 맛집 카드를 보여줍니다.",
    inputSchema: z.object({
      category: z.string().describe("음식 카테고리 (예: 이탈리안, 한식, 일식)"),
      location: z.string().describe("위치/지역 (예: 강남, 홍대, 성수, 을지로, 여의도)"),
      mood: z
        .string()
        .optional()
        .describe("분위기/상황 (예: 혼밥, 데이트, 회식, 브런치, 야식)"),
    }),
    execute: async ({ category, location, mood }) => {
      const userData = getUserData(userId);
      const userAreas = userData?.favoriteAreas ?? ["강남"];
      const preferredCats = userData?.taste.preferredCategories ?? [];

      let pool = getRestaurantPool();

      // 1. 카테고리 필터
      const byCategory = pool.filter((r) => r.category.includes(category));
      if (byCategory.length > 0) pool = byCategory;

      // 2. 위치 필터 (카테고리 결과 내에서, 매칭 없으면 스킵)
      if (location) {
        const byLocation = pool.filter((r) => r.area.includes(location));
        if (byLocation.length > 0) pool = byLocation;
      }

      // 3. 분위기 필터 (매칭 없으면 스킵)
      if (mood) {
        const byMood = pool.filter((r) =>
          r.moods.some((m) => m.includes(mood))
        );
        if (byMood.length > 0) pool = byMood;
      }

      // 4. 개인화 정렬: 유저 선호 카테고리/지역 매칭 항목 상위
      pool.sort((a, b) => {
        const scoreA =
          (preferredCats.includes(a.category) ? 2 : 0) +
          (userAreas.includes(a.area) ? 1 : 0);
        const scoreB =
          (preferredCats.includes(b.category) ? 2 : 0) +
          (userAreas.includes(b.area) ? 1 : 0);
        return scoreB - scoreA;
      });

      const results = pool.slice(0, 3).map((r) => toRestaurantItem(r, userAreas));

      return { restaurants: results } satisfies ShowRestaurantOutput;
    },
  });
}
