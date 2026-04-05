"use client";

import type { UIMessage } from "ai";
import RestaurantCards from "./tool-views/RestaurantCards";
import TasteProfile from "./tool-views/TasteProfile";
import CouponCards from "./tool-views/CouponCards";
import HistoryTimeline from "./tool-views/HistoryTimeline";
import ReviewCards from "./tool-views/ReviewCards";
import ToolLoading from "./tool-views/ToolLoading";

function ToolPartRenderer({ part }: { part: { type: string; state?: string; output?: unknown } }) {
  const isReady = part.state === "output-available";

  switch (part.type) {
    case "tool-showRestaurant":
      return isReady ? (
        <RestaurantCards data={part.output as any} />
      ) : (
        <ToolLoading name="맛집 추천" />
      );
    case "tool-showTaste":
      return isReady ? (
        <TasteProfile data={part.output as any} />
      ) : (
        <ToolLoading name="입맛 분석" />
      );
    case "tool-showCoupon":
      return isReady ? (
        <CouponCards data={part.output as any} />
      ) : (
        <ToolLoading name="쿠폰" />
      );
    case "tool-readHistory":
      return isReady ? (
        <HistoryTimeline data={part.output as any} />
      ) : (
        <ToolLoading name="방문 기록" />
      );
    case "tool-readReview":
      return isReady ? (
        <ReviewCards data={part.output as any} />
      ) : (
        <ToolLoading name="리뷰" />
      );
    default:
      return null;
  }
}

export default function ChatMessage({ message }: { message: UIMessage }) {
  const isUser = message.role === "user";

  const textParts = message.parts.filter((p) => p.type === "text");
  const toolParts = message.parts.filter((p) => p.type.startsWith("tool-"));

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
            <ToolPartRenderer key={i} part={part as any} />
          ))}
        </div>
      )}
    </div>
  );
}
