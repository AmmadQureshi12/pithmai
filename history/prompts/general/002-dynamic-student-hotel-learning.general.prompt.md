---
id: 002
title: dynamic-student-hotel-learning
stage: general
date: 2026-09-10
surface: agent
model: GitHub Copilot
feature: hotel-speak-ai
branch: unknown
user: user
command: implement dynamic student dashboard and hotel department learning content
labels: [student-dashboard, localstorage, hotel-departments, learning-content]
links:
  spec: null
  ticket: null
  adr: null
  pr: null
files:
 - hotel-speak-ai/lib/scenarios.ts
 - hotel-speak-ai/lib/progress.ts
 - hotel-speak-ai/app/student/page.tsx
 - hotel-speak-ai/app/page.tsx
 - hotel-speak-ai/app/globals.css
 - hotel-speak-ai/app/teacher/page.tsx
tests:
 - npm run lint (PASS with 2 pre-existing warnings in AI API routes)
 - npm run build (PASS)
---

## Prompt

<context>
The current date is 2026-09-10.
</context>

overall project both acha ha lkn ab is ko dynamic karo data ko or department main ja Front office yha food and beverage and etc jitna bhe department hotha han hotels main on ko details say lekho or har department k bara main or har department k director ka bara main bhe os k kia kam hotha han or wo kia kartha or acha director kesa bana jatha each and every thing or yha sab data dynamic hona chai han or student k dashboard ko fully dynamic karo or data ko local storage main browser kai store kar yha ho or teacher dashboard ko bhe dynamic karo full or teacher dashboard nahi chai han sirf students k kafi ha

## Response snapshot

Replaced the static student experience with a student-first dynamic workspace. Added eight hotel departments with operations, director responsibilities, director skills, career paths, and success habits. Added searchable and filterable practice scenarios, local progress scoring, editable student profile, department notes, progress history, and browser localStorage persistence. Removed the teacher route and teacher links from the public UI.

## Outcome

- ✅ Impact: Students now have a complete local, dynamic learning dashboard focused on hotel departments and career development.
- 🧪 Tests: ESLint passes with two existing unused-variable warnings in email and WhatsApp API routes; production build passes.
- 📁 Files: Updated hotel data, persistence layer, student dashboard, home navigation, and styles; removed teacher dashboard page.
- 🔁 Next prompts: Connect practice evaluation to the existing AI feedback API and add speech input when needed.
- 🧠 Reflection: Hydration must read browser storage only after mount; the persisted state is intentionally synchronized after client hydration.

## Evaluation notes (flywheel)

- Failure modes observed: Initial patch attempt omitted tool metadata; replacement patch was then applied successfully.
- Graders run and results (PASS/FAIL): npm run lint PASS with warnings; npm run build PASS.
- Prompt variant (if applicable): none
- Next experiment (smallest change to try): Add AI-generated feedback to the local practice result without changing the storage contract.
