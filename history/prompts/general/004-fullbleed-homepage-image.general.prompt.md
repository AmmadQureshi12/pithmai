---
id: 004
title: fullbleed-homepage-image
stage: general
date: 2026-09-17
surface: agent
model: GitHub Copilot
feature: hotel-speak-ai
branch: unknown
user: user
command: replace homepage 3D hero with hm image
labels: [homepage, hero, image, frontend]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - hotel-speak-ai/app/page.tsx
 - hotel-speak-ai/app/globals.css
 - history/prompts/general/004-fullbleed-homepage-image.general.prompt.md
tests:
 - npm run build (PASS; existing multiple-lockfile warning)
 - editor diagnostics for page.tsx and globals.css (PASS)
 - git diff --check (PASS)
---

## Prompt

<context>
The current date is 2026-09-17.
</context>

homepage k front par jo 3d animation lagi yhi ha osy remove kar k public folder main jo hm name say image ha osy use karo or is text k front par nahi Hospitality English reimagined

# Speak with confidence. Serve with excellence.
HotelSpeak AI helps hotel-management students practise the English they need for real guests, real teams, and real hotel careers.

is text k back par set karna image ko or height oer width full honi chai han or brightness low kar k set karna

## Response snapshot

Removed the homepage 3D scene from the hero and replaced it with `public/hm.jpg` as a full-bleed cover background. Added dark overlays so the existing hospitality hero text remains readable over the image.

## Outcome

- 3D hero import and markup removed from the homepage.
- Hero image fills the viewport-oriented section width and adapts on mobile.
- Production build, diagnostics, and diff checks passed.
