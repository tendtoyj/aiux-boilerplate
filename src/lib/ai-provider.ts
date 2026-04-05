import { openai } from "@ai-sdk/openai";
import { google } from "@ai-sdk/google";
import { anthropic } from "@ai-sdk/anthropic";

export function getModel() {
  if (process.env.OPENAI_API_KEY) {
    return openai("gpt-4o-mini");
  }
  if (process.env.GOOGLE_GENERATIVE_AI_API_KEY) {
    return google("gemini-2.0-flash");
  }
  if (process.env.ANTHROPIC_API_KEY) {
    return anthropic("claude-sonnet-4-20250514");
  }
  throw new Error(
    "No AI provider API key found. Set OPENAI_API_KEY, GOOGLE_GENERATIVE_AI_API_KEY, or ANTHROPIC_API_KEY in .env.local",
  );
}
