export type ToolConfig = {
  showRestaurant: boolean;
  showTaste: boolean;
  showCoupon: boolean;
  readHistory: boolean;
  readReview: boolean;
};

export const defaultToolConfig: ToolConfig = {
  showRestaurant: true,
  showTaste: true,
  showCoupon: true,
  readHistory: true,
  readReview: true,
};

export const toolLabels: Record<keyof ToolConfig, string> = {
  showRestaurant: "맛집 추천",
  showTaste: "입맛 분석",
  showCoupon: "쿠폰",
  readHistory: "방문 기록",
  readReview: "리뷰",
};
