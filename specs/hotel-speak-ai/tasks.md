# HotelSpeak AI — Implementation Tasks

## 1. Project Setup

### Task 1: Initialize Next.js app
- Create a new Next.js project with TypeScript.
- Configure Tailwind CSS.
- Add base project structure and default app settings.
- Verify the app runs locally.

Acceptance criteria:
- `npm install` works successfully.
- Next.js dev server starts without errors.
- App renders a basic page.

### Task 2: Configure project conventions
- Set up folder structure for app, components, lib, types, and API routes.
- Add environment variable support for Gemini configuration.
- Add base TypeScript path aliases if needed.
- Prepare project-level README or note for developer usage.

Acceptance criteria:
- Project structure is clean and consistent.
- `.env.example` includes required Gemini variables.
- TypeScript project builds without major issues.

---

## 2. Public Marketing Pages

### Task 3: Build landing page shell
- Create a responsive landing page layout.
- Add header, navigation, and CTA buttons.
- Add hero section and visual styling.
- Add footer.

Acceptance criteria:
- Home page loads cleanly on desktop and mobile.
- Hero clearly communicates the value proposition.
- CTA buttons lead to learning or teacher entry points.

### Task 4: Add feature and department sections
- Create feature highlight cards for AI conversation, speaking, writing, leaderboards, and progress.
- Add hotel department showcase cards.
- Add how-it-works section.
- Add trust/testimonial or educational value content.

Acceptance criteria:
- Page clearly communicates hotel-specific learning use cases.
- Visual sections are responsive and readable.

### Task 5: Add public CTA flows
- Add student entry CTA.
- Add teacher dashboard CTA.
- Ensure navigation links support the app sections.

Acceptance criteria:
- Users can navigate into the learning site from the landing page.
- CTAs are visible and usable.

---

## 3. Learning App Structure

### Task 6: Build student dashboard
- Create a basic dashboard page for students.
- Add summary cards for completed lessons, active skills, and next steps.
- Add recent activity panel.
- Add leaderboard preview card.

Acceptance criteria:
- Student dashboard is visually clear and readable.
- Local data can populate the cards from storage.

### Task 7: Build scenario library page
- Create a page that lists hotel scenarios.
- Add cards for check-in, complaints, requests, reservations, banquet, etc.
- Add scenario categories and level labels.

Acceptance criteria:
- Students can browse realistic hotel scenarios.
- Selected scenario leads to the practice screen.

### Task 8: Build scenario practice screen
- Create a dedicated page for scenario-based AI conversation.
- Add scenario context panel.
- Add user input area for typed response.
- Add action buttons for submit and retry.

Acceptance criteria:
- A selected scenario opens a working practice screen.
- Students can input a response and trigger AI evaluation.

### Task 9: Build speaking practice screen
- Add microphone-triggered practice flow.
- Use browser speech APIs to capture spoken responses.
- Display transcript and evaluation result.
- Show fallback when browser does not support speech features.

Acceptance criteria:
- Supported browsers allow voice input.
- If voice input is unavailable, typed input still works.

---

## 4. AI Integration

### Task 10: Create secure Gemini API route
- Create server-side route(s) for scenario evaluation.
- Add environment-based API key handling.
- Validate request payload before sending to Gemini.
- Return structured JSON to the frontend.

Acceptance criteria:
- Frontend does not expose the API key.
- API routes respond successfully with valid input.
- Errors are handled cleanly.

### Task 11: Create feedback generation flow
- Build logic to send scenario context, student answer, and target learning goals to Gemini.
- Return grammar, tone, and improvement suggestions.
- Format response for UI display.

Acceptance criteria:
- AI response contains actionable educational feedback.
- Frontend renders concise feedback cards and sample improved response.

### Task 12: Build email assistant route and UI
- Add email writing prompt flow.
- Let users input scenario details and desired tone.
- Generate polished hospitality-related email text.
- Add copy/edit actions.

Acceptance criteria:
- User can generate professional hotel emails.
- Output is specific to hospitality contexts.

### Task 13: Build WhatsApp assistant route and UI
- Add WhatsApp business message generation flow.
- Create short, natural, professional message output.
- Add copy-to-clipboard option.

Acceptance criteria:
- User can generate a realistic hotel WhatsApp communication.
- Output is concise and suitable for business communication.

---

## 5. Data Storage and Progress Tracking

### Task 14: Implement localStorage data layer
- Create helper functions for saving and reading progress.
- Define local data keys for completed scenarios, scores, and writing drafts.
- Add default fallback values.

Acceptance criteria:
- Data persists locally in browser storage.
- App can read saved progress after refresh.

### Task 15: Save scenario completion results
- After each AI evaluation, save score and summary to localStorage.
- Add timestamp and scenario metadata.
- Update dashboard stats based on saved data.

Acceptance criteria:
- Completed scenario results appear in progress summaries.
- Refreshing the page does not lose saved progress.

### Task 16: Create progress overview screen
- Show completion count, average scores, recent activity, and learning streaks.
- Display saved activity in a readable list or cards.

Acceptance criteria:
- Students can review their learning history.
- UI is simple and motivating.

### Task 17: Create leaderboard logic
- Calculate student points from completed scenarios and tasks.
- Store or calculate leaderboard entries locally.
- Display ranking summary in the UI.

Acceptance criteria:
- Leaderboard updates when new activities are completed.
- Top performers are shown clearly.

---

## 6. Teacher Dashboard

### Task 18: Build teacher overview dashboard
- Add teacher page with summary cards for students, average scores, and completions.
- Display performance table or student list.
- Add scenario completion data.

Acceptance criteria:
- Teacher can view class-level engagement at a glance.
- Data is easy to scan and understand.

### Task 19: Add student-level insights
- Show activity trends, weak skill areas, and recent scenario performance per student.
- Include simple performance indicators.

Acceptance criteria:
- Teacher can identify which student needs more practice.
- Dashboard supports educational decision-making.

---

## 7. UX, Resilience, and Quality

### Task 20: Add loading, error, and fallback states
- Show spinner or loading states while AI is processing.
- Add retry controls for failed requests.
- Add graceful fallback text if AI returns invalid or empty data.

Acceptance criteria:
- App never breaks when AI fails.
- Users always understand the current status.

### Task 21: Add responsive styling and polish
- Ensure all main pages are mobile-friendly.
- Improve spacing, typography, contrast, and card layouts.
- Align visual identity with hospitality/AI branding.

Acceptance criteria:
- Key pages remain clean and readable on small screens.
- Product feels polished and professional.

### Task 22: Add basic validation and QA pass
- Test main flows manually.
- Validate localStorage behavior.
- Validate AI route behavior with valid and invalid inputs.
- Confirm no sensitive API keys are client-exposed.

Acceptance criteria:
- Main flows work without critical errors.
- No secret is visible in browser code.

---

## 8. Suggested Build Order

1. Initialize app and project structure
2. Build landing page
3. Build student dashboard and scenario library
4. Integrate Gemini scenario API
5. Add feedback rendering UI and progress saving
6. Add speaking feature
7. Add email and WhatsApp assistants
8. Add leaderboard and teacher dashboard
9. Polish UX and finalize QA

---

## 9. Definition of Done

The project is complete when:
- landing page and app flow are fully functional
- AI scenario practice works with valid feedback
- speaking input works in supported browsers
- email and WhatsApp writing tools are available
- progress and leaderboard logic work using localStorage
- teacher dashboard is usable
- no database has been introduced
- all Gemini access is server-side only
