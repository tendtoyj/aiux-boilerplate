import type { ToolConfig } from "./tool-config";
import { defaultToolConfig } from "./tool-config";
import { showRestaurant } from "./show-restaurant";
import { showTaste } from "./show-taste";
import { showCoupon } from "./show-coupon";
import { readHistory } from "./read-history";
import { readReview } from "./read-review";

export const allTools = {
  showRestaurant,
  showTaste,
  showCoupon,
  readHistory,
  readReview,
};

export function getEnabledTools(config?: Partial<ToolConfig>) {
  const resolved = { ...defaultToolConfig, ...config };
  return Object.fromEntries(
    Object.entries(allTools).filter(
      ([name]) => resolved[name as keyof ToolConfig]
    )
  ) as typeof allTools;
}

export type { ToolConfig };
export { defaultToolConfig, toolLabels } from "./tool-config";
