import { tool } from "ai";
import { z } from "zod";

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

export const showTaste = tool({
  description:
    "사용자의 입맛 프로필을 분석합니다. 맛 성향 점수와 선호 카테고리를 보여줍니다.",
  inputSchema: z.object({
    userId: z.string().describe("사용자 ID"),
  }),
  execute: async () => {
    return {
      scores: {
        spicy: 78,
        sweet: 45,
        salty: 62,
        sour: 30,
        umami: 85,
        oily: 55,
      },
      preferredCategories: ["일식", "이탈리안", "한식", "베트남"],
      summary:
        "감칠맛과 매운맛을 좋아하는 미식가 타입이에요! 일식과 이탈리안을 특히 자주 찾으며, 새로운 맛에 도전하는 것을 즐기는 편입니다.",
    } satisfies ShowTasteOutput;
  },
});
