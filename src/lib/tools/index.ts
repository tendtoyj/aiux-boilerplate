import type { ToolConfig } from "./tool-config";
import { defaultToolConfig } from "./tool-config";
import { createShowRestaurant } from "./show-restaurant";
import { createShowTaste } from "./show-taste";
import { createShowCoupon } from "./show-coupon";
import { createReadHistory } from "./read-history";
import { createReadReview } from "./read-review";

function createAllTools(userId: string) {
  return {
    showRestaurant: createShowRestaurant(userId),
    showTaste: createShowTaste(userId),
    showCoupon: createShowCoupon(userId),
    readHistory: createReadHistory(userId),
    readReview: createReadReview(userId),
  };
}

export function getEnabledTools(config?: Partial<ToolConfig>, userId = "user-001") {
  const resolved = { ...defaultToolConfig, ...config };
  const allTools = createAllTools(userId);
  return Object.fromEntries(
    Object.entries(allTools).filter(
      ([name]) => resolved[name as keyof ToolConfig]
    )
  ) as ReturnType<typeof createAllTools>;
}

export type { ToolConfig };
export { defaultToolConfig, toolLabels } from "./tool-config";
