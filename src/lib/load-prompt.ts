import { readFileSync } from "fs";
import { join } from "path";

export function loadPrompt(...segments: string[]): string {
  const filePath = join(process.cwd(), "prompts", ...segments);
  return readFileSync(filePath, "utf-8");
}
