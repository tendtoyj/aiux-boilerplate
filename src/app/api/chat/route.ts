import { streamText, convertToModelMessages, stepCountIs, type UIMessage } from "ai";
import { getModel } from "@/lib/ai-provider";
import { loadPrompt } from "@/lib/load-prompt";
import { getEnabledTools, type ToolConfig } from "@/lib/tools";

export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    toolConfig,
  }: { messages: UIMessage[]; toolConfig?: Partial<ToolConfig> } =
    await req.json();

  const result = streamText({
    model: getModel(),
    system: loadPrompt("system.md"),
    messages: await convertToModelMessages(messages),
    tools: getEnabledTools(toolConfig),
    stopWhen: stepCountIs(2),
  });

  return result.toUIMessageStreamResponse();
}
