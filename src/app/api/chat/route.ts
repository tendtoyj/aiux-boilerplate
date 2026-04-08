import { streamText, convertToModelMessages, stepCountIs, type UIMessage } from "ai";
import { getModel } from "@/lib/ai-provider";
import { loadPrompt } from "@/lib/load-prompt";
import { getEnabledTools, type ToolConfig } from "@/lib/tools";

export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    toolConfig,
    userId,
  }: { messages: UIMessage[]; toolConfig?: Partial<ToolConfig>; userId?: string } =
    await req.json();

  const basePrompt = loadPrompt("system.md");
  const system = userId
    ? `${basePrompt}\n\n현재 로그인한 사용자: ${userId}\n모든 도구 호출 시 이 userId를 사용하세요.`
    : basePrompt;

  const result = streamText({
    model: getModel(),
    system,
    messages: await convertToModelMessages(messages),
    tools: getEnabledTools(toolConfig),
    stopWhen: stepCountIs(2),
  });

  return result.toUIMessageStreamResponse();
}
