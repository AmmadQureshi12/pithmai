# HotelSpeak AI — Technical Plan

## 1. Project Summary

HotelSpeak AI is a hospitality-focused AI learning platform that helps hotel-management students improve Business English through practical hotel scenarios, AI conversation practice, speaking exercises, professional communication writing, and progress tracking.

The product is organized around a polished public marketing site plus a student-focused learning application. The MVP will prioritize realistic hotel situations, AI-powered feedback, and straightforward local progress tracking while respecting the project rules: no database, server-side Gemini access only, and a modern Next.js + TypeScript + Tailwind architecture.

---

## 2. Scope and Goals

### In Scope
- Public landing page and marketing sections
- Student learning dashboard
- Hotel-specific AI scenario learning
- Speaking practice using browser speech APIs
- AI feedback for grammar, tone, and professional language
- Email writing assistant
- WhatsApp writing assistant
- Local progress tracking using localStorage
- Teacher summary dashboard
- Leaderboard for motivation and class engagement

### Out of Scope
- Authentication and user accounts
- Database-backed persistence
- Real-time multi-user collaboration
- Subscription or payment system
- CMS or admin backend
- LMS integrations
- Advanced analytics dashboards
- Mobile app development

---

## 3. Architecture Overview

The application will be a Next.js web app with a component-driven UI and route-based structure.

### High-level structure
- Public pages: home, features, departments, how it works
- Student app pages: dashboard, scenarios, practice, progress, leaderboard
- AI routes: server-side endpoints for Gemini communication
- Shared UI components: cards, buttons, layouts, forms, tabs, lists
- Local storage hooks: progress, leaderboard, draft messages, completed lessons

### Core architectural decisions
1. Use Next.js App Router for route-driven structure.
2. Use TypeScript for maintainability and better developer clarity.
3. Use Tailwind CSS for fast UI development and modern SaaS styling.
4. Use localStorage for all MVP data persistence.
5. Keep all AI access behind secure API routes.
6. Keep data models simple and scenario-driven rather than database-driven.

---

## 4. Proposed Information Architecture

### Public experience
- Home
- Features
- Hotel Departments
- How It Works
- Teacher Area
- Student Access CTA
- Footer

### Student product area
- Dashboard
- Learning Library
- Scenario Practice
- Speaking Practice
- Progress Tracker
- Leaderboard
- Writing Assistant (Email and WhatsApp)

### Teacher area
- Overview dashboard
- Class summary
- Student performance list
- Weak skill indicators
- Scenario completion tracking

---

## 5. Page-Level Plan

### 5.1 Landing Page
Purpose: convert visitors into learners.

Sections:
- Header with brand and nav
- Hero with value proposition and CTAs
- Feature cards
- Hotel department highlight cards
- AI learning outcomes section
- How it works timeline
- Testimonials/trust content
- Final CTA section
- Footer

### 5.2 Student Dashboard
Purpose: provide a simple overview of progress and next actions.

Elements:
- welcome heading
- skill progress cards
- recent completed scenarios
- next recommended practice
- leaderboard snippet
- quick actions for speaking, writing, and scenario practice

### 5.3 Scenario Practice Screen
Purpose: let students practice in realistic hotel situations.

Elements:
- scenario card with context
- AI character role (guest / front desk / customer)
- text or speech input
- feedback panel with grammar/tone suggestions
- score summary
- retry or next scenario action

### 5.4 Speaking Practice Screen
Purpose: improve spoken English confidence.

Elements:
- microphone button
- live transcript area
- AI evaluation results
- pronunciation and sentence improvement notes
- replay controls

### 5.5 Writing Assistant Screen
Purpose: generate polished hotel communications.

Two assistant modes:
- Email assistant
- WhatsApp assistant

Each mode includes:
- scenario form
- prompt fields
- generated result area
- copy button
- edit capability

### 5.6 Progress and Leaderboard Screens
Purpose: motivate students.

Progress page:
- completed lessons
- scores history
- activity count
- learning streak

Leaderboard page:
- ranking list
- score points
- class competition overview

### 5.7 Teacher Dashboard
Purpose: show class performance clearly.

Elements:
- total students
- average scores
- completion rates
- recent activity panel
- difficulty / weak-skill summary
- scenario performance by students

---

## 6. Data Model Strategy

Since there is no database, the app will use a lightweight client-side data layer with localStorage.

### Client-side data objects
- StudentProfile
- ScenarioProgress
- PracticeResult
- LeaderboardEntry
- DraftMessage
- CompletedLesson

### Example local data structure
```ts
type PracticeResult = {
  scenarioId: string;
  scenarioName: string;
  score: number;
  completedAt: string;
  feedbackSummary: string;
  type: 'text' | 'speech';
};
```

### Storage rules
- Keep data simple and serializable.
- Save after each completed AI practice session.
- Ensure graceful fallback when localStorage is unavailable or blocked.

---

## 7. AI Feature Design

### 7.1 Gemini Integration Pattern
The frontend will call a secure Next.js route like:
- /api/ai/scenario-feedback
- /api/ai/email-assistant
- /api/ai/whatsapp-assistant
- /api/ai/speaking-feedback

The server route will:
- validate incoming request body
- call the Gemini API with a structured prompt
- sanitize and parse the result
- return a controlled response to the frontend

### 7.2 Prompting Strategy
The AI should receive:
- scenario context
- student role
- desired learning objective
- student answer
- difficulty level
- expected hospitality tone

This ensures feedback is relevant to hotel communication rather than generic English advice.

### 7.3 Response Standardization
AI responses should be normalized so UI components can render:
- final verdict
- grammar corrections
- improved answer example
- suggestions
- score or rating

---

## 8. User Experience Principles

- Keep the interface clear for students with limited technical confidence.
- Use a supportive, encouraging tone.
- Prioritize realistic hotel situations over abstract tasks.
- Make feedback actionable and easy to understand.
- Use simple visual progress trackers and score cards.

---

## 9. Technical Stack

### Frontend
- Next.js
- TypeScript
- React
- Tailwind CSS

### AI
- Gemini API via Next.js server routes

### Storage
- localStorage

### Browser features
- speech recognition / Web Speech API

### Optional utilities
- small helper modules for formatting, scoring, and scenario definitions

---

## 10. Folder Structure Recommendation

```text
app/
  page.tsx
  about/
  features/
  departments/
  student/
  teacher/
  api/
    ai/
      scenario-feedback/route.ts
      email-assistant/route.ts
      whatsapp-assistant/route.ts
      speaking-feedback/route.ts
components/
  landing/
  student/
  teacher/
  ui/
lib/
  scenarios.ts
  storage.ts
  prompts.ts
  scoring.ts
types/
  app.ts
```

This structure is simple, clear, and suitable for a project built around real product flows without a database.

---

## 11. Security and Compliance Plan

### Security requirements
- Gemini API key must be stored in environment variables only
- No secrets in client-side JavaScript
- API routes must validate request payloads
- Use safe error messages without exposing internal details

### Data privacy
- Since no database is used, user data remains local to the browser
- Avoid collecting unnecessary personal information for the MVP

---

## 12. Error Handling Strategy

The system should treat all AI requests as potentially failing.

### Expected failure cases
- empty Gemini response
- timeout
- rate limit exceeded
- invalid prompt format
- unsupported browser speech feature
- blocked microphone permission

### UI responses
- show loading state
- display retry action
- show fallback friendly message
- preserve typed or spoken input if possible

---

## 13. Testing Strategy

### Unit tests
- helper functions for scoring and prompt generation
- localStorage data-saving logic
- scenario selection logic
- conversion of API responses into UI-friendly shapes

### Component tests
- landing page sections render correctly
- student dashboard summary cards render
- scenario cards and action buttons work
- writing assistant form submission flow works

### Integration tests
- frontend sends request to API route
- API route returns structured AI feedback
- fallback states appear when AI fails

---

## 14. Risks and Mitigations

### Risk 1: Gemini API instability
Mitigation: graceful fallback UI, retry handling, structured error states.

### Risk 2: Browser speech API inconsistency
Mitigation: check feature support and provide fallback to typed input.

### Risk 3: Over-scoping the app
Mitigation: keep MVP focused on core hotel scenarios, writing, and learning feedback; defer advanced features.

---

## 15. Definition of Done for the MVP

The MVP is complete when:
- marketing site is designed and responsive
- student dashboard is implemented
- hotel scenario AI flow works end-to-end
- speaking feature works in supported browsers
- email and WhatsApp assistant are functional
- progress tracking works using localStorage
- leaderboard and teacher summary exist
- no database is introduced
- Gemini key is only used on server-side routes

---

## 16. Recommendation

This project should be implemented in phases:

### Phase 1: Foundation
- Next.js app scaffolding
- Tailwind layout
- public landing page
- base routing

### Phase 2: Core learning module
- scenario selection
- AI feedback API
- speaking input support
- progress storage

### Phase 3: Productivity features
- email assistant
- WhatsApp assistant
- leaderboard
- teacher dashboard

### Phase 4: Refinement
- polish UI
- responsive fixes
- error handling
- final QA

---

## 17. Final Outcome

The final product will be a polished, hotel-focused, AI-powered English learning platform that feels modern and real, while staying within the project constraints of no database, server-side Gemini integration, and a student-friendly MVP architecture. It will provide a complete web experience that helps hospitality students speak, write, and improve confidently in professional hotel environments.
