import { tool } from "ai";
import { z } from "zod";
import { getUserData } from "@/data/user-mock";

export interface TasteScores {
  spicy: number;
  sweet: number;
  salty: number;
  sour: number;
  umami: number;
  oily: number;
}

export interface ShowTasteOutput {
  scores: TasteScores;
  preferredCategories: string[];
  summary: string;
}

export function createShowTaste(userId: string) {
  return tool({
    description:
      "사용자의 입맛 프로필을 분석합니다. 맛 성향 점수와 선호 카테고리를 보여줍니다.",
    inputSchema: z.object({}),
    execute: async () => {
      const data = getUserData(userId) ?? getUserData("user-001")!;
      return {
        scores: data.taste.scores,
        preferredCategories: data.taste.preferredCategories,
        summary: data.taste.summary,
      } satisfies ShowTasteOutput;
    },
  });
}
