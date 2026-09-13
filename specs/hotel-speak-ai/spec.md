# HotelSpeak AI — Product Specification

## 1. Product Overview

HotelSpeak AI is a hospitality-focused AI learning platform designed for hotel-management students who need to improve their English communication skills in professional hotel settings. The platform combines hotel-specific English lessons, AI-powered roleplay, real-world workplace conversations, and business communication practice for front office, housekeeping, food and beverage, guest relations, and management contexts.

The product is not a generic English app. It is built specifically for the hotel industry and teaches students how to speak, write, and respond professionally in situations they will actually face at work.

---

## 2. Product Vision

The vision is to create a modern, interactive, AI-powered learning experience where students can practice real hotel conversations with instant evaluation and improvement suggestions. The product should feel like a polished SaaS platform, with a professional business look, strong educational value, and practical hotel communication scenarios.

The service should help students become more confident in:
- speaking politely and professionally
- handling guest requests and complaints
- using correct hotel vocabulary
- responding in English during real work situations
- writing formal hotel emails and WhatsApp messages
- improving pronunciation and conversation fluency

---

## 3. Target Users

### 3.1 Primary Users

#### Hotel Management Students
- studying English for hospitality careers
- learning to communicate with guests and colleagues
- need guided practice in realistic scenarios
- prefer simple, motivating, game-like progress tracking

#### Teachers / Instructors
- want to monitor class performance
- need a simple overview of student progress
- want to assign practice activities or review learner outputs
- want a dashboard to compare student improvement and class engagement

### 3.2 Secondary Users

#### Educational Institutions
- hospitality schools
- hotel training centers
- language labs for tourism and hotel studies

---

## 4. Core Business Goals

1. Help hotel-management students improve business English in realistic hospitality situations.
2. Make learning engaging through AI roleplay and scenario-based interactions.
3. Teach practical communication for check-in, complaints, room service, housekeeping, restaurant service, and reservations.
4. Provide teacher visibility into student progress and performance.
5. Create a product that feels like a professional learning platform rather than a classroom demo.

---

## 5. Key Product Principles

### 5.1 Student-first learning
Every feature must teach something useful for hotel job scenarios.

### 5.2 Realistic scenarios over generic exercises
Students should practice situations like guest check-in, complaint handling, room requests, billing disputes, reservation calls, banquets, and restaurant queries.

### 5.3 AI must be useful and educational
AI responses must help students improve grammar, vocabulary, professional tone, confidence, and communication quality.

### 5.4 No fake AI claims
Any AI feature must use the configured Gemini API through secure server-side endpoints only.

### 5.5 No database dependency
The MVP must work without a database. Progress and scores should be stored in browser localStorage.

---

## 6. Functional Requirements

### 6.1 Marketing / Public Website

The application must include a complete public-facing website with professional product pages.

#### Required pages/sections
- Home page
- Header and navigation
- Hero section with strong CTA buttons
- Features section
- Hotel departments section
- How It Works section
- Student learning experience section
- Teacher dashboard section
- Testimonials / trust section
- Call-to-action section
- Footer

#### Design goals
- hospitality-inspired visual language
- modern AI product aesthetic
- responsive layout for desktop and mobile
- strong call-to-action flow

### 6.2 Student Learning Experience

The student area should be the core product experience.

#### Student dashboard requirements
- student overview card
- current learning level or status
- practice streak or recent activity
- completed modules or scenarios
- leaderboard position
- next recommended activity

#### Student module categories
- Business English Basics
- Hotel Reception Practice
- Food & Beverage English
- Housekeeping Communication
- Guest Complaint Resolution
- Reservation and Inquiry Handling
- Customer Service and Professional Etiquette
- Email and WhatsApp Business Writing

### 6.3 AI Conversation Practice

The product must support interactive AI roleplay scenarios where the student speaks or types responses in hotel scenarios.

#### Scenario examples
- Front desk check-in conversation
- Guest complaint about room cleanliness
- Room service order request
- Restaurant table reservation
- Billing issue with guest
- Lost and found assistance
- Concierge inquiry about local attractions
- Banquet and event inquiry
- Wake-up call request
- Guest farewell conversation

#### AI behavior requirements
- AI acts as guest, manager, or customer
- AI responds based on scenario context
- Student response is evaluated for grammar, tone, and usefulness
- AI gives improvement suggestions
- AI can adapt difficulty based on student level

### 6.4 Speaking and Pronunciation Practice

Students should be able to practice spoken English in realistic hotel situations.

#### Functional requirements
- microphone input using browser speech APIs
- speech-to-text transcription for student response
- pronunciation evaluation feedback where possible
- sentence improvement suggestions
- optional speaking score or confidence indicator

#### UX requirements
- clear “Speak now” button
- enough feedback to encourage repetition
- support for mic permissions and error handling

### 6.5 AI Feedback Engine

The AI must evaluate student output and provide meaningful improvement feedback.

#### Feedback types
- grammar corrections
- vocabulary suggestions
- professional tone improvement
- hospitality wording recommendations
- politeness refinement
- sentence restructuring
- confidence and fluency guidance

### 6.6 Email Assistant

Students should be able to generate professional business communication in hotel contexts.

#### Examples
- guest complaint email
- reservation follow-up email
- room upgrade request response
- housekeeping reminder message
- guest confirmation email
- thank-you message after service

#### Requirements
- prompt-based generation using Gemini
- output in professional English
- support for editable text preview
- ability to copy or revise content

### 6.7 WhatsApp Business Assistant

Students should be able to create short, practical hotel WhatsApp messages in a professional tone.

#### Examples
- guest booking confirmation
- room service update message
- complaint acknowledgment
- housekeeping follow-up
- restaurant order confirmation

#### Requirements
- short-message friendly format
- natural but professional style
- suitable for hotel staff communication

### 6.8 Progress Tracking

Students should track their own learning progress locally in the browser.

#### Data to track
- completed lessons
- scenario performance
- scores or ratings
- speaking activity count
- email/WhatsApp tasks completed
- improvement streaks
- preferred scenario categories

#### Requirements
- no backend database required
- localStorage-based persistence
- clear progress summary screen

### 6.9 Leaderboard

The app should include a student leaderboard to increase motivation.

#### Requirements
- score-based ranking
- local leaderboard data
- class or group-based competition view
- display top performers in a friendly visual list

### 6.10 Teacher Dashboard

Teachers need a simple performance overview.

#### Dashboard data
- student list
- total practice sessions
- average scores
- recent activity
- scenario completion counts
- weak skill areas per student

#### Requirements
- class summary cards
- trend visualization or simple scoring views
- clear teacher-friendly layout

---

## 7. Detailed User Stories

### 7.1 Student stories
- As a student, I want to practice guest check-in conversations so I can improve my hospitality English.
- As a student, I want AI-generated feedback so I can correct my grammar and tone.
- As a student, I want to practice speaking with my microphone so I can improve pronunciation.
- As a student, I want to generate hotel emails so I can write professional messages.
- As a student, I want to see my progress so I can stay motivated.
- As a student, I want a leaderboard so I can compete with classmates.

### 7.2 Teacher stories
- As a teacher, I want to review class performance so I can identify learning gaps.
- As a teacher, I want to see which scenarios students complete most often.
- As a teacher, I want a simple teacher dashboard so I can monitor progress without extra complexity.

---

## 8. Core User Flows

### 8.1 New Student Flow
1. User visits landing page.
2. User clicks CTA to enter learning area.
3. Student browses learning modules.
4. Student selects a hotel scenario.
5. Student speaks or types response.
6. AI creates feedback and suggestions.
7. Student improves and repeats the lesson.
8. Progress is saved locally.

### 8.2 Teacher Flow
1. Teacher logs in or enters teacher area.
2. Teacher views dashboard summary.
3. Teacher checks student scores and recent activity.
4. Teacher identifies weak areas.
5. Teacher recommends next practice scenarios.

### 8.3 Email/WhatsApp Flow
1. User opens writing assistant.
2. User selects business communication type.
3. User enters scenario details.
4. AI generates polished text.
5. User edits, copies, or saves locally.

---

## 9. Non-Functional Requirements

### 9.1 Performance
- Landing page should load quickly on standard broadband connections.
- Scenario interactions should feel responsive, with loading states for AI calls.
- AI requests should show clear waiting indicators.

### 9.2 Reliability
- The app should handle Gemini API failures gracefully.
- Empty responses or network issues must not crash the app.
- Fallback UI should be shown whenever AI output is unavailable.

### 9.3 Accessibility
- Buttons, forms, and interactive elements should be clearly labeled.
- Mobile responsiveness must be considered from the beginning.
- Text should be readable and high contrast.

### 9.4 Usability
- The interface should be simple enough for students with limited technical experience.
- Any AI-generated feedback should be easy to understand and actionable.

### 9.5 Security
- Gemini API key must never be exposed to the browser.
- All AI calls must go through secure Next.js server endpoints.
- No private secrets may be included in client-side code.

---

## 10. Technical Constraints

The implementation must respect the following project rules:

- Next.js application
- TypeScript
- React
- Tailwind CSS
- Gemini API integration only in secure server-side routes
- No database usage
- No Prisma
- No MySQL/PostgreSQL/MongoDB
- localStorage for student data and progress
- Browser speech APIs for speaking feature where supported

---

## 11. Data and Storage Requirements

### 11.1 Storage Model
The project must use browser localStorage for client-side persistence. No server database is required for MVP.

### 11.2 Local Data Examples
- student profile
- completed modules
- scores
- practice history
- leaderboard points
- saved email drafts
- saved WhatsApp examples

### 11.3 Data Handling Rules
- Data should be kept simple and lightweight.
- Progress should be available without account login for MVP.
- Data should be separated from server-side AI processing.

---

## 12. AI Integration Requirements

### 12.1 Gemini requirement
Gemini will be used as the AI engine for:
- scenario conversations
- grammar and vocabulary evaluation
- roleplay behavior
- email writing
- WhatsApp writing
- personalized feedback generation

### 12.2 Server-side API rule
The frontend must never directly call Gemini from browser code. Instead, the frontend calls a Next.js API route, which calls the Gemini API using the secret key stored in environment variables.

### 12.3 Error Handling
The product must handle:
- invalid or empty AI responses
- rate limit issues
- network failures
- poor API connectivity
- slow response times
- user timeout conditions

### 12.4 Fallback behavior
When the AI service fails, the UI must show a graceful fallback message or retry state rather than breaking the experience.

---

## 13. Page and Feature Scope

### 13.1 Public pages
- Home
- Features overview
- Departments and hotel scenarios
- How it works
- Student area access
- Teacher area access

### 13.2 App features
- onboarding or landing into learning portal
- scenario library
- AI conversation flow
- speaking practice
- score and feedback screen
- progress tracking page
- leaderboard page
- email assistant page
- WhatsApp assistant page
- teacher dashboard

---

## 14. Out of Scope for MVP

The following are not required for the initial version:
- real authentication system
- database-backed user accounts
- cross-device syncing
- payments / subscriptions
- admin panel with role management
- large-scale multi-tenant architecture
- production analytics dashboards
- complex LMS integrations
- live classroom collaboration tools

---

## 15. Acceptance Criteria

### 15.1 Public website acceptance
- Home page is professionally designed and responsive.
- It communicates the hotel English learning value proposition clearly.
- It includes strong CTAs for students and teachers.

### 15.2 AI conversation acceptance
- A student can select a hotel scenario and start an AI conversation.
- The AI acts in a realistic hotel role.
- The student can type or speak a response.
- AI returns educational feedback with actionable suggestions.

### 15.3 Speaking acceptance
- User can use microphone input in supported browsers.
- The spoken answer is processed and used in the learning flow.
- The UI handles permission issues and unsupported browser conditions.

### 15.4 Email/WhatsApp acceptance
- User can generate professional hotel email or WhatsApp message drafts.
- Output is specific to hospitality context and easy to edit.

### 15.5 Progress acceptance
- Completed modules and scores are saved locally.
- Student can review progress and achievements in a dashboard or summary section.

### 15.6 Teacher dashboard acceptance
- Teacher can review class-level summary information.
- Student performance is visible in a simple, clear format.

### 15.7 Security acceptance
- No Gemini API key is placed in client code.
- All AI communication goes through secure server-side API routes.

---

## 16. Definition of Done

The MVP will be considered complete when:
- all major learning flows work end-to-end
- the public marketing site is complete and polished
- AI scenario practice is functional
- email and WhatsApp writing are implemented
- local progress tracking works reliably
- teacher dashboard is present and useful
- no database is introduced
- Gemini usage is server-side only

---

## 17. Summary

HotelSpeak AI is a hotel-focused English learning platform that turns real hospitality interactions into practical AI-powered practice. The product emphasizes realistic hotel communication, professional business writing, student motivation, and teacher visibility while staying within the constraints of a no-database, Gemini-powered, student-friendly MVP.

This specification defines the product as a modern SaaS-style hospitality learning platform that is educational, professional, and technically realistic for a student project environment.
