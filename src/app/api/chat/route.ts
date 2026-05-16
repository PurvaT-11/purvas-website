import { NextResponse } from "next/server";
import OpenAI from "openai";
import { buildDigitalTwinSystemPrompt } from "@/prompts/digital-twin";

type ChatMessage = { role: "user" | "assistant"; content: string };

function lastUserMessage(messages: ChatMessage[]) {
  for (let i = messages.length - 1; i >= 0; i--) {
    if (messages[i]?.role === "user") return messages[i]!.content;
  }
  return "";
}

function isPurvaRelevant(text: string) {
  const t = text.toLowerCase();
  const allowSignals = [
    "purva",
    "tandel",
    "ptand",
    "uic",
    "resume",
    "cv",
    "education",
    "experience",
    "skills",
    "project",
    "github",
    "linkedin",
    "email",
    "hire",
    "hiring",
    "intern",
    "research",
    "rag",
    "backend",
    "microservice",
    "etl",
    "pipeline",
    "kafka",
    "redis",
    "fastapi",
    "flask",
    "openai",
    "chatbot",
    "digital twin",
  ];

  const denySignals = [
    "reverse a linked list",
    "linked list",
    "leetcode",
    "dsa",
    "homework",
    "assignment",
    "solve this",
    "write code",
    "implement",
    "big o",
  ];

  const hasAllow = allowSignals.some((s) => t.includes(s));
  const hasDeny = denySignals.some((s) => t.includes(s));

  // If it's obviously generic-programming, deny unless it also clearly references Purva/projects.
  if (hasDeny && !hasAllow) return false;
  if (hasAllow) return true;

  // Default: require some connection to Purva (avoid token-drain).
  return false;
}

async function pushPushover(text: string) {
  const token = process.env.PUSHOVER_TOKEN;
  const user = process.env.PUSHOVER_USER;
  if (!token || !user) return;

  try {
    await fetch("https://api.pushover.net/1/messages.json", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ token, user, message: text }).toString(),
    });
  } catch {
    // ignore
  }
}

export async function POST(req: Request) {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      {
        ok: false,
        error:
          "Missing OPENAI_API_KEY. Add it to .env.local (then restart pnpm dev).",
      },
      { status: 500 }
    );
  }

  const body = (await req.json().catch(() => null)) as
    | { messages?: ChatMessage[] }
    | null;
  const messages = (body?.messages ?? []).slice(-20);

  const userText = lastUserMessage(messages);
  if (!isPurvaRelevant(userText)) {
    void pushPushover(`Out-of-scope chat attempt:\n${userText.slice(0, 2000)}`);
    return NextResponse.json({
      ok: true,
      message:
        `I can’t help with that here. I can answer questions about Purva’s background, education, experience, skills, and projects. ` +
        `If you want to get in touch, email her at ptand@uic.edu.`,
    });
  }

  const client = new OpenAI({ apiKey });
  const model = process.env.OPENAI_MODEL || "gpt-4o-mini";

  const completion = await client.chat.completions.create({
    model,
    messages: [
      { role: "system", content: buildDigitalTwinSystemPrompt() },
      ...messages.map((m) => ({ role: m.role, content: m.content })),
    ],
    temperature: 0.4,
  });

  const output = (completion.choices[0]?.message?.content ?? "").trim();
  if (output) void pushPushover(`Website chat:\n${output.slice(0, 2200)}`);

  return NextResponse.json({ ok: true, message: output });
}
