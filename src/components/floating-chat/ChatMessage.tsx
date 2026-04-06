"use client";

import type { UIMessage } from "ai";
import RestaurantCards from "./tool-views/RestaurantCards";
import TasteProfile from "./tool-views/TasteProfile";
import CouponCards from "./tool-views/CouponCards";
import HistoryTimeline from "./tool-views/HistoryTimeline";
import ReviewCards from "./tool-views/ReviewCards";
import ToolLoading from "./tool-views/ToolLoading";
import type { ShowCouponOutput } from "@/lib/tools/show-coupon";
import type { ReadHistoryOutput } from "@/lib/tools/read-history";
import type { ReadReviewOutput } from "@/lib/tools/read-review";
import type { ShowRestaurantOutput } from "@/lib/tools/show-restaurant";
import type { ShowTasteOutput } from "@/lib/tools/show-taste";

type MessagePart = UIMessage["parts"][number];
type TextPart = Extract<MessagePart, { type: "text" }>;
type ToolPart = Extract<MessagePart, { type: `tool-${string}` }>;

function isTextPart(part: MessagePart): part is TextPart {
  return part.type === "text";
}

function isToolPart(part: MessagePart): part is ToolPart {
  return part.type.startsWith("tool-");
}

function hasRestaurants(output: unknown): output is ShowRestaurantOutput {
  return typeof output === "object" && output !== null && "restaurants" in output;
}

function hasTasteProfile(output: unknown): output is ShowTasteOutput {
  return typeof output === "object" && output !== null && "scores" in output;
}

function hasCoupons(output: unknown): output is ShowCouponOutput {
  return typeof output === "object" && output !== null && "coupons" in output;
}

function hasVisits(output: unknown): output is ReadHistoryOutput {
  return typeof output === "object" && output !== null && "visits" in output;
}

function hasReviews(output: unknown): output is ReadReviewOutput {
  return typeof output === "object" && output !== null && "reviews" in output;
}

function ToolPartRenderer({ part }: { part: ToolPart }) {
  const isReady = part.state === "output-available";

  switch (part.type) {
    case "tool-showRestaurant":
      return isReady ? (
        hasRestaurants(part.output) ? <RestaurantCards data={part.output} /> : null
      ) : (
        <ToolLoading name="맛집 추천" />
      );
    case "tool-showTaste":
      return isReady ? (
        hasTasteProfile(part.output) ? <TasteProfile data={part.output} /> : null
      ) : (
        <ToolLoading name="입맛 분석" />
      );
    case "tool-showCoupon":
      return isReady ? (
        hasCoupons(part.output) ? <CouponCards data={part.output} /> : null
      ) : (
        <ToolLoading name="쿠폰" />
      );
    case "tool-readHistory":
      return isReady ? (
        hasVisits(part.output) ? <HistoryTimeline data={part.output} /> : null
      ) : (
        <ToolLoading name="방문 기록" />
      );
    case "tool-readReview":
      return isReady ? (
        hasReviews(part.output) ? <ReviewCards data={part.output} /> : null
      ) : (
        <ToolLoading name="리뷰" />
      );
    default:
      return null;
  }
}

export default function ChatMessage({ message }: { message: UIMessage }) {
  const isUser = message.role === "user";

  const textParts = message.parts.filter(isTextPart);
  const toolParts = message.parts.filter(isToolPart);

  return (
    <div className="flex flex-col gap-2">
      {textParts.length > 0 && (
        <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
          <div
            className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${
              isUser
                ? "bg-gray-900 text-white rounded-br-md"
                : "bg-gray-100 text-gray-800 rounded-bl-md"
            }`}
          >
            {textParts.map((part, i) => {
              if (part.type === "text") {
                return (
                  <span key={i} className="whitespace-pre-wrap">
                    {part.text}
                  </span>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}

      {toolParts.length > 0 && (
        <div className="flex flex-col gap-2">
          {toolParts.map((part, i) => (
            <ToolPartRenderer key={i} part={part} />
          ))}
        </div>
      )}
    </div>
  );
}
