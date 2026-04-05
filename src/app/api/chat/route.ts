import { streamText, convertToModelMessages, type UIMessage } from "ai";
import { getModel } from "@/lib/ai-provider";
import { loadPrompt } from "@/lib/load-prompt";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: getModel(),
    system: loadPrompt("system.md"),
    messages: await convertToModelMessages(messages),
  });

  return result.toUIMessageStreamResponse();
}
