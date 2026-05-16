# Purva Tandel — Personal Website

Modern, scalable personal site built with:
- Next.js (App Router) + TypeScript
- Tailwind CSS + shadcn/ui
- Framer Motion animations

## Local development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Content sources

- Site metadata: `src/content/site.ts`
- Skills: `src/content/skills.ts`
- Experience: `src/content/experience.ts`
- Projects: `src/content/projects.ts`

## Resume

The resume PDF is served from:
- `public/Purva_Tandel_Resume.pdf`

## Chatbot (future)

This repo includes:
- UI placeholder: `src/features/chatbot/chatbot-fab.tsx`
- API placeholder: `src/app/api/chat/route.ts`

We’ll integrate your existing `app.py` chatbot later by:
- Porting to a Next.js API route (or running it as a separate service)
- Wiring the UI to a streaming endpoint
- Adding environment variables (OpenAI, etc.)

## Environment variables

Copy:
```bash
cp .env.example .env.local
```

For your `app.py`-style setup, you’ll want these in `.env.local` (and in Vercel env vars later):
- `OPENAI_API_KEY` (OpenAI)
- `PUSHOVER_TOKEN` + `PUSHOVER_USER` (only if you keep Pushover notifications)

## Deploy (later)

This project is Vercel-ready. When you’re ready, we’ll:
- Push to GitHub
- Set env vars in Vercel
- Add a real domain + update `metadataBase`/`sitemap`
