import { tool } from "ai";
import { z } from "zod";

export interface VisitItem {
  date: string;
  restaurantName: string;
  menu: string;
  rating: number;
}

export interface ReadHistoryOutput {
  period: string;
  visits: VisitItem[];
}

const mockVisits: VisitItem[] = [
  {
    date: "2026-04-04",
    restaurantName: "트라토리아 모리",
    menu: "까르보나라, 마르게리타 피자",
    rating: 4.5,
  },
  {
    date: "2026-04-01",
    restaurantName: "스시오마카세 하루",
    menu: "런치 오마카세 코스",
    rating: 5.0,
  },
  {
    date: "2026-03-28",
    restaurantName: "을지로 골목식당",
    menu: "된장찌개 백반",
    rating: 4.0,
  },
  {
    date: "2026-03-20",
    restaurantName: "반미 사이공",
    menu: "반미 콤보, 쌀국수",
    rating: 4.2,
  },
  {
    date: "2026-03-15",
    restaurantName: "버거앤프라이즈",
    menu: "클래식 치즈버거",
    rating: 4.3,
  },
  {
    date: "2026-03-01",
    restaurantName: "트라토리아 모리",
    menu: "뽈로뇨제 파스타",
    rating: 4.7,
  },
  {
    date: "2026-02-14",
    restaurantName: "스시오마카세 하루",
    menu: "디너 오마카세 코스",
    rating: 4.9,
  },
];

const periodDays: Record<string, number> = {
  "1week": 7,
  "1month": 30,
  "3months": 90,
};

const periodLabels: Record<string, string> = {
  "1week": "최근 1주",
  "1month": "최근 1개월",
  "3months": "최근 3개월",
};

export const readHistory = tool({
  description:
    "방문 기록을 조회합니다. 기간별로 방문한 맛집 목록을 보여줍니다.",
  inputSchema: z.object({
    userId: z.string().describe("사용자 ID"),
    period: z
      .enum(["1week", "1month", "3months"])
      .describe("조회 기간 (1week, 1month, 3months)"),
  }),
  execute: async ({ userId, period }) => {
    const days = periodDays[period] ?? 30;
    const cutoff = new Date();
    cutoff.setDate(cutoff.getDate() - days);

    const filtered = mockVisits.filter(
      (v) => new Date(v.date) >= cutoff
    );

    return {
      period: periodLabels[period] ?? period,
      visits: filtered.length > 0 ? filtered : mockVisits.slice(0, 2),
    } satisfies ReadHistoryOutput;
  },
});
