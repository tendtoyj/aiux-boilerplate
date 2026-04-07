import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

const NOTES_PATH = path.join(
  process.cwd(),
  "src/data/floating-menu-notes.json",
);

type Note = { id: string; author: string; text: string; timestamp: string };
type NotesStore = Record<string, Note[]>;

async function readNotes(): Promise<NotesStore> {
  try {
    const raw = await fs.readFile(NOTES_PATH, "utf-8");
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

async function writeNotes(data: NotesStore) {
  await fs.writeFile(NOTES_PATH, JSON.stringify(data, null, 2) + "\n", "utf-8");
}

export async function GET() {
  const notes = await readNotes();
  return NextResponse.json(notes);
}

export async function POST(req: Request) {
  const { pathname, text, author } = await req.json();
  if (!pathname || !text) {
    return NextResponse.json({ error: "pathname and text required" }, { status: 400 });
  }

  const notes = await readNotes();
  if (!notes[pathname]) notes[pathname] = [];

  const now = new Date();
  const dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  const yy = String(now.getFullYear()).slice(2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const day = dayNames[now.getDay()];
  const ampm = now.getHours() < 12 ? "오전" : "오후";
  const timestamp = `${yy}/${mm}/${dd}(${day}) ${ampm}`;

  const note: Note = {
    id: String(Date.now()),
    author: author || "익명",
    text,
    timestamp,
  };

  notes[pathname].unshift(note);
  await writeNotes(notes);

  return NextResponse.json(note);
}

export async function DELETE(req: Request) {
  const { pathname, noteId } = await req.json();
  if (!pathname || !noteId) {
    return NextResponse.json({ error: "pathname and noteId required" }, { status: 400 });
  }

  const notes = await readNotes();
  if (notes[pathname]) {
    notes[pathname] = notes[pathname].filter((n) => n.id !== noteId);
    await writeNotes(notes);
  }

  return NextResponse.json({ ok: true });
}
