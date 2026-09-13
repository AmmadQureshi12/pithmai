---
id: 001
title: specify-read-constitution
stage: general
date: 2026-09-09
surface: agent
model: MAI-Code-1.1-Flash
feature: none
branch: unknown
user: user
command: read constitution for specification work
labels: [constitution, specification, setup]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - .specify/memory/constitution.md
 - .specify/templates/phr-template.prompt.md
tests:
 - none
---

## Prompt

.specify folder k andar folder ha momery k os k andar file ha constitution.md file read karo phr hum specify write kar hanga

## Response snapshot

Read the project constitution to align the upcoming specification work with the product vision, product principles, technical constraints, and Gemini/no-database requirements.

## Outcome

- ✅ Impact: Established the governing project rules before the specification work begins.
- 🧪 Tests: none
- 📁 Files: .specify/memory/constitution.md, .specify/templates/phr-template.prompt.md
- 🔁 Next prompts: Write the actual .specify specification artifacts.
- 🧠 Reflection: Constitution confirms the project is a hospitality-focused AI English learning SaaS with no database and Gemini-backed server-side AI.

## Evaluation notes (flywheel)

- Failure modes observed: none
- Graders run and results (PASS/FAIL): none
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Create the specification document that matches the constitution's product and technical constraints.
