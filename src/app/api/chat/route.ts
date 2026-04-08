import { streamText, convertToModelMessages, stepCountIs, type UIMessage } from "ai";
import { getModel } from "@/lib/ai-provider";
import { loadPrompt } from "@/lib/load-prompt";
import { getEnabledTools, type ToolConfig } from "@/lib/tools";
import { getUserData, userPersonas } from "@/data/user-mock";

export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    toolConfig,
    userId,
  }: { messages: UIMessage[]; toolConfig?: Partial<ToolConfig>; userId?: string } =
    await req.json();

  const resolvedUserId = userId ?? "user-001";
  const basePrompt = loadPrompt("system.md");
  let system = basePrompt;

  const persona = userPersonas.find((p) => p.id === resolvedUserId);
  if (persona) {
    system = `${basePrompt}\n\n## 현재 사용자 정보\n- 이름: ${persona.name}\n- 지역: ${persona.area}\n- 소개: ${persona.description}`;
  }

  const result = streamText({
    model: getModel(),
    system,
    messages: await convertToModelMessages(messages),
    tools: getEnabledTools(toolConfig, resolvedUserId),
    stopWhen: stepCountIs(2),
  });

  return result.toUIMessageStreamResponse();
}
