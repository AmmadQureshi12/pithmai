---
id: 003
title: multi-provider-chat-fallback
stage: general
date: 2026-09-17
surface: agent
model: GitHub Copilot
feature: hotel-speak-ai
branch: unknown
user: user
command: implement multi-provider AI fallback for chatbot
labels: [ai-chat, gemini, groq, anthropic, fallback]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - hotel-speak-ai/app/api/ai/chat/route.ts
 - hotel-speak-ai/README.md
 - history/prompts/general/003-multi-provider-chat-fallback.general.prompt.md
tests:
 - editor diagnostics for chat route (PASS: no errors)
 - git diff --check (PASS)
 - focused ESLint (NOT RUN: local node_modules missing; npx install prompt declined)
---

## Prompt

<context>
The current date is 2026-09-17.
</context>

mujha na ak problem face karni par rahi ha apna chatbot main problem yha ha k jab mari gemini api key kai limit full ho jathi ha to 429 error ana lagtha or chatbot work nahi kartha to main chatha hon is main multiple API key use hon groq kai bhe or anthropic kai bhe kion k jab gemini kai limit full ho jay to qroq kai key work karna start kar da agr groq kai bhe limit full ho jay to anthropic kai work karna star kar da

## Response snapshot

Updated the server-side chat route to try Gemini first, then Groq, then Anthropic. Provider failures including rate limits, server errors, network failures, timeouts, and empty responses now continue to the next configured provider. Added optional model environment overrides and documented server-only API key setup without changing the frontend response contract.

## Outcome

- Impact: Chatbot can continue working when an earlier provider is unavailable or rate-limited.
- Acceptance: Existing `{ success, reply/message }` client contract preserved; no API keys exposed to the browser.
- Validation: Editor reports no route errors and `git diff --check` passes. Full lint/build could not run because dependencies are not installed and the temporary npx ESLint install was declined.
- Risk: Actual provider failover requires valid provider keys and compatible model names configured in `.env.local`.

## Evaluation notes

- No unrelated routes were changed.
- Provider SDKs were intentionally not added; all integrations use server-side native fetch.
