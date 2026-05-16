"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

export function ChatbotFab() {
  const [open, setOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([
    {
      role: "assistant",
      content:
        "Hi — I can answer questions about Purva’s education, experience, skills, and projects. What do you want to know?",
    },
  ]);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ prompt?: string }>).detail;
      setDraft(detail?.prompt ?? "");
      setOpen(true);
    };
    window.addEventListener("chatbot:open", handler);
    return () => window.removeEventListener("chatbot:open", handler);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, open]);

  const quickPrompts = useMemo(
    () => [
      "Strongest project in 30 seconds",
      "Backend experience in 5 bullets",
      "Roles you're targeting",
    ],
    []
  );

  async function send() {
    const content = draft.trim();
    if (!content || busy) return;
    setDraft("");
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      type ApiOk = { ok: true; message: string };
      type ApiErr = { ok: false; error?: string; detail?: string };
      const data = (await res.json().catch(() => null)) as ApiOk | ApiErr | null;

      if (!res.ok || !data || data.ok === false) {
        const err = data && "error" in data && data.error ? data.error : "Chat failed. Check OPENAI_API_KEY in .env.local.";
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `Error: ${err}` },
        ]);
      } else {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message || "" },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Error: network issue calling /api/chat." },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className={cn(
          "fixed bottom-5 right-5 z-50 shadow-lg",
          "rounded-full px-5 h-11",
          "bg-white/10 hover:bg-white/15 text-foreground",
          "ring-1 ring-white/12 backdrop-blur"
        )}
      >
        Chat
      </Button>

      {open ? (
        <div className="fixed bottom-20 right-5 z-50 flex h-[min(70vh,540px)] w-[min(calc(100vw-2.5rem),400px)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-background/95 shadow-2xl backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-left">
            <h3 className="text-base font-semibold">Chat with PurvaBot</h3>
            <Button
              type="button"
              variant="ghost"
              className="h-8 rounded-full px-3"
              onClick={() => setOpen(false)}
            >
              Close
            </Button>
          </div>

          <ScrollArea className="min-h-0 flex-1 px-4 py-3">
            <div className="space-y-3">
              {messages.map((m, idx) => (
                <div
                  key={idx}
                  className={cn(
                    "max-w-[88%] rounded-2xl px-3 py-2 text-sm leading-6",
                    m.role === "user"
                      ? "ml-auto bg-gradient-to-r from-fuchsia-500/25 via-indigo-500/20 to-sky-400/20 text-foreground border border-white/10"
                      : "mr-auto bg-white/5 text-foreground/90 border border-white/10"
                  )}
                >
                  {m.content}
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
          </ScrollArea>

          <div className="border-t border-white/10 px-4 py-3">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {quickPrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => setDraft(p)}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] text-muted-foreground transition-colors hover:text-foreground"
                >
                  {p}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Input
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Ask about projects, experience, skills..."
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    void send();
                  }
                }}
              />
              <Button
                type="button"
                onClick={() => void send()}
                disabled={busy || !draft.trim()}
                className="h-10 rounded-full px-4"
              >
                {busy ? "..." : "Send"}
              </Button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
