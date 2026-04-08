import { tool } from "ai";
import { z } from "zod";
import { getUserData } from "@/data/user-mock";

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

export function createReadHistory(userId: string) {
  return tool({
    description:
      "방문 기록을 조회합니다. 기간별로 방문한 맛집 목록을 보여줍니다.",
    inputSchema: z.object({
      period: z
        .enum(["1week", "1month", "3months"])
        .describe("조회 기간 (1week, 1month, 3months)"),
    }),
    execute: async ({ period }) => {
      const data = getUserData(userId) ?? getUserData("user-001")!;
      const days = periodDays[period] ?? 30;
      const cutoff = new Date();
      cutoff.setDate(cutoff.getDate() - days);

      const filtered = data.visits.filter(
        (v) => new Date(v.date) >= cutoff
      );

      return {
        period: periodLabels[period] ?? period,
        visits: filtered.length > 0 ? filtered : data.visits.slice(0, 2),
      } satisfies ReadHistoryOutput;
    },
  });
}
