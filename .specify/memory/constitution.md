# HotelSpeak AI — Project Constitution

## 1. Product Vision

HotelSpeak AI is a modern, interactive, AI-powered Business English and Hotel Management learning platform designed primarily for hotel-management students.

The platform must combine:

1. Business English learning
2. Hotel-industry English
3. Realistic hotel department scenarios
4. AI-powered conversation practice
5. Speaking and pronunciation practice
6. Professional communication training
7. AI-powered email and WhatsApp business communication
8. Student progress tracking
9. Class leaderboard
10. Teacher performance dashboard

The product must feel like a real modern SaaS/web application rather than a basic student project or static website.

The application should have a professional hospitality-inspired visual identity while maintaining a modern AI-product experience.

---

# 2. Core Product Principles

### 2.1 Student First

Every feature must provide clear educational value to a hotel-management student.

The interface must be easy to understand for students who may not have advanced technical knowledge.

### 2.2 Practical Learning

The application should prioritize realistic hotel situations over generic English exercises.

Examples include:

* Guest check-in
* Guest complaints
* Reservation calls
* Room-service requests
* Housekeeping requests
* Restaurant complaints
* Billing problems
* Concierge assistance
* Lost-and-found situations
* Hotel inquiries
* Banquet/event inquiries
* Guest greetings
* Telephone conversations
* Professional staff communication

### 2.3 AI Should Be Useful

AI responses must be context-aware and educational.

The AI should not simply return random English sentences.

The system should help students improve:

* Grammar
* Vocabulary
* Professional tone
* Hospitality terminology
* Sentence structure
* Politeness
* Confidence
* Pronunciation
* Conversational ability

### 2.4 No Fake AI

Features presented as AI must actually use the configured Gemini API.

Demo/static responses must not be presented to the user as real AI functionality.

---

# 3. Technology Principles

The application should use:

* Next.js
* TypeScript
* React
* Tailwind CSS
* Gemini API
* Next.js server-side API routes for Gemini communication
* Browser Web Speech APIs where appropriate
* localStorage for local student progress
* No database
* No MySQL
* No Prisma
* No external database dependency

The architecture should remain simple enough for a student project while being production-quality.

---

# 4. Gemini API Rules

Gemini will be the primary AI engine.

Gemini must be used for:

* AI hotel conversations
* Guest roleplay
* Student response evaluation
* Grammar correction
* Professional English feedback
* Vocabulary suggestions
* Speaking feedback where technically possible
* Email generation
* WhatsApp business message generation
* Scenario adaptation
* Educational feedback

The Gemini API key must NEVER be exposed directly in client-side JavaScript.

The key must be stored in environment variables and accessed only through server-side code.

The frontend must communicate with a secure Next.js API endpoint.

No `NEXT_PUBLIC_` variable should contain the Gemini secret API key.

The application must handle:

* API errors
* Rate limits
* Empty responses
* Network failures
* Invalid AI responses
* Loading states
* Retry states

Graceful fallback UI must be provided.

---

# 5. No Database Principle

The project must not use a database.

Do not introduce:

* MySQL
* PostgreSQL
* MongoDB
* Prisma
* Supabase database
* Firebase database
* MongoDB Atlas
* Any other persistent database

Student progress, preferences and leaderboard data should use browser localStorage where appropriate.

The application must clearly separate local/demo data from server-side AI functionality.

Because there is no database, cross-device synchronization is not required for the MVP.

---

# 6. Application Structure

The product must be structured as a complete web application.

It must not feel like a single dashboard page.

The application should include a complete website experience with:

* Landing/Home page
* Header
* Navigation
* Hero section
* Feature sections
* How It Works section
* Hotel departments section
* AI learning section
* Student learning experience
* Teacher experience
* Testimonials or educational trust section where appropriate
* Call-to-action sections
* Footer
* Student application area
* Teacher dashboard
* Dedicated feature pages/routes where appropriate

The final information architecture should be determined during specification and planning, but it must support clear separation between marketing pages and the authenticated-style learning experience.

---

# 7. Home Page Requirements

The home page must look like a professional modern product website.

It should contain:

### Header

* HotelSpeak AI logo/brand
* Navigation
* Features
* Hotel Departments
* How It Works
* Student area
* Teacher area
* Primary CTA
* Responsive mobile navigation

### Hero Section

The hero should immediately communicate:

* What HotelSpeak AI is
* Who it is for
* How AI helps students
* Why hotel-management students should use it

The hero should include an attractive visual treatment representing:

* Hospitality
* AI
* Conversation
* Learning
* Professional English

The hero must contain strong CTA buttons.

### Feature Showcase

Show the major capabilities:

* AI Conversation
* Speaking Practice
* Pronunciation
* Hotel Scenarios
* Email Assistant
* WhatsApp Assistant
* Progress Tracking
* Leaderboard

### Hotel Departments

Visually showcase departments such as:

* Front Office
* Food & Beverage
* Housekeeping
* Reservations
* Concierge
* Sales & Banquets

Each department should have its own identity, description and scenarios.

### How It Works

Explain the learning process:

1. Choose a hotel scenario
2. Start AI conversation
3. Speak or type your response
4. Receive AI feedback
5. Improve your response
6. Track progress

### CTA

The homepage should end with a strong CTA encouraging students to start practicing.

### Footer

The footer must be complete and professional.

Include appropriate:

* Product links
* Learning links
* Student links
* Teacher links
* Contact information/placeholders where necessary
* Copyright
* Privacy/Terms placeholders if implemented

---

# 8. Visual Design Principles

The application must have a premium, modern hospitality + AI visual language.

The design should feel:

* Professional
* Clean
* Modern
* Friendly
* Educational
* Premium
* Trustworthy
* Interactive

Avoid making the application look like a generic admin template.

Avoid excessive gradients, excessive glassmorphism or unnecessary visual effects.

Use visual hierarchy carefully.

Typography must be highly readable.

Spacing must be consistent.

Cards, buttons, inputs and navigation must follow a consistent design system.

---

# 9. Animation Principles

The application should be animated throughout, but animations must remain professional.

Use subtle animations for:

* Page entrances
* Hero elements
* Section reveals
* Cards
* Buttons
* Navigation
* Hover states
* Progress indicators
* AI response appearance
* Microphone state
* Loading states
* Score reveal
* Leaderboard transitions
* Modal/dialog transitions

Animations should improve UX rather than distract from learning.

Avoid excessive bouncing, spinning or distracting animations.

Prefer smooth transitions and purposeful motion.

Animation libraries may be introduced only when they provide clear value.

Respect `prefers-reduced-motion`.

Users who prefer reduced motion must receive a reduced-animation experience.

---

# 10. Responsive Design

The application must be fully responsive.

Required:

* Desktop
* Laptop
* Tablet
* Mobile

Do not design desktop first and leave mobile unfinished.

All major screens must be usable on small screens.

Mobile navigation must be properly designed.

Tables such as leaderboards must remain usable on mobile.

AI conversation interfaces must work comfortably on phones.

Microphone controls must be easy to tap.

Buttons must have appropriate touch targets.

---

# 11. Accessibility

Accessibility is a core requirement.

The application should provide:

* Semantic HTML
* Proper heading hierarchy
* Accessible buttons
* Accessible forms
* Keyboard navigation
* Visible focus states
* Sufficient contrast
* Meaningful labels
* Screen-reader-friendly controls
* Accessible error messages
* Reduced-motion support

Icons must not replace necessary text labels.

Interactive elements must clearly communicate their state.

---

# 12. AI Hotel Conversation

The AI conversation system is a core feature.

The student should be able to select:

* Hotel department
* Scenario
* Difficulty level where supported

The AI acts as a realistic hotel guest/customer or relevant professional role.

The student acts as hotel staff.

The AI should maintain conversational context throughout the session.

The conversation should feel natural rather than like disconnected questions.

The AI should respond according to the selected hotel scenario.

---

# 13. Hotel Departments

The application must support realistic scenarios for:

### Front Office

Examples:

* Guest check-in
* Guest check-out
* Room not ready
* Guest complaint
* Room upgrade request
* Billing issue
* Late checkout request

### Food & Beverage

Examples:

* Restaurant complaint
* Menu inquiry
* Food allergy request
* Special meal request
* Room service
* Wrong order
* Delayed order

### Housekeeping

Examples:

* Extra towels
* Room cleaning request
* Missing amenities
* Maintenance-related housekeeping communication
* Guest complaint

### Reservations

Examples:

* New reservation
* Date change
* Cancellation
* Room availability
* Rate inquiry
* Reservation confirmation

### Concierge

Examples:

* Restaurant recommendation
* Transportation
* Local attraction information
* Directions
* Guest itinerary assistance

### Sales & Banquets

Examples:

* Conference inquiry
* Wedding inquiry
* Corporate event
* Meeting room booking
* Package inquiry
* Event pricing communication

Additional departments/scenarios may be added later without breaking the architecture.

---

# 14. Speaking and Microphone

Students must be able to use their microphone where browser support permits.

The application should:

* Request microphone permission clearly
* Show recording state
* Show listening state
* Provide start/stop controls
* Convert speech to text using supported browser APIs
* Place recognized speech into the conversation
* Handle unsupported browsers gracefully

The UI must clearly tell the student when the microphone is active.

The application must not silently record users.

---

# 15. AI Voice

The AI guest should be able to speak responses using browser speech synthesis where supported.

The system should provide:

* Play response
* Stop response
* Speaking state
* Appropriate voice selection when available
* Graceful fallback when speech synthesis is unavailable

The AI voice should feel natural within browser limitations.

---

# 16. Pronunciation and Speaking Feedback

The platform should help students improve pronunciation and speaking.

Where browser capabilities allow, the application should evaluate recognized speech and provide useful feedback.

Feedback may include:

* Grammar
* Vocabulary
* Sentence structure
* Professional tone
* Fluency indicators
* Suggested better sentence
* Hospitality vocabulary suggestions

The application must clearly distinguish between actual speech recognition results and AI-generated educational feedback.

Do not claim phonetic accuracy that the underlying browser/API cannot reliably provide.

---

# 17. AI Evaluation and Scoring

After a roleplay session, Gemini should evaluate the student's performance.

The evaluation should consider appropriate dimensions such as:

* Grammar
* Professionalism
* Hospitality language
* Vocabulary
* Relevance
* Politeness
* Communication quality

The score should be understandable to students.

The result should show:

* Overall score
* Strengths
* Areas to improve
* Corrected examples
* Suggested better response
* Recommended vocabulary
* Learning tips

Scoring should be consistent and based on a defined rubric rather than arbitrary feedback.

---

# 18. Business English

The platform must teach practical Business English relevant to hospitality.

Topics may include:

* Professional greetings
* Requests
* Apologies
* Complaints
* Telephone English
* Email English
* Customer service language
* Formal vs informal language
* Polite expressions
* Professional vocabulary
* Workplace communication

The content should prioritize real-world usage.

---

# 19. Email Assistant

The AI Email Assistant should help students create professional hotel/business emails.

Inputs may include:

* Purpose
* Recipient type
* Situation
* Tone
* Important details

Outputs should include:

* Subject
* Professional email body
* Appropriate greeting
* Appropriate closing

The generated email must be editable before copying.

Users should be able to copy the generated result easily.

The AI must avoid fabricating important business facts that the user did not provide.

---

# 20. WhatsApp Business Assistant

The AI WhatsApp Business Assistant should generate professional but natural business messages.

It should support situations such as:

* Guest communication
* Reservation confirmation
* Follow-up
* Complaint response
* Appointment/event communication
* Business inquiry
* Customer service

Messages should be appropriate for WhatsApp rather than blindly copying formal email language.

Users should be able to edit and copy the generated message.

---

# 21. Student Progress

Student progress should be stored locally using localStorage.

Track useful information such as:

* Scenarios completed
* Sessions completed
* Scores
* Average score
* Department performance
* Recent activity
* Improvement indicators
* Learning streak where appropriate
* Vocabulary practice where appropriate

Do not claim that data is synchronized across devices.

The UI should make the progress understandable.

Use charts/visualizations only where they improve comprehension.

---

# 22. Class Leaderboard

The application should include a class leaderboard.

Leaderboard information may include:

* Student name
* Score
* Sessions completed
* Rank
* Department performance

For the no-database MVP, leaderboard data may use local/demo data.

The architecture should allow future replacement with a real backend without requiring a complete UI rewrite.

Avoid exposing sensitive student information.

---

# 23. Teacher Dashboard

The Teacher Dashboard should provide a professional overview of student learning.

It should include:

* Total students
* Average class score
* Sessions completed
* Top performers
* Department performance
* Recent activity
* Leaderboard
* Scenario performance

Because there is no database, the initial implementation should clearly use local/demo data.

Do not falsely claim that real multi-user student analytics exist without a backend.

---

# 24. Navigation

Navigation must be intuitive.

The user should always understand:

* Where they are
* What they can do
* How to return
* What action is primary

Use breadcrumbs where useful.

Avoid unnecessarily deep navigation.

---

# 25. Loading States

Every asynchronous operation must have a meaningful loading state.

Examples:

* Gemini request
* AI evaluation
* Email generation
* WhatsApp generation
* Voice processing

Do not leave users wondering whether the application is frozen.

Use skeletons, spinners, progress indicators or contextual loading messages where appropriate.

---

# 26. Error Handling

Errors must be human-readable.

Do not expose raw stack traces or technical API errors to normal users.

The UI should provide:

* What went wrong
* Whether the user needs to retry
* What action they can take

Handle:

* Gemini API errors
* Network errors
* Browser speech API limitations
* Microphone permission denial
* Invalid form inputs
* Empty AI responses
* LocalStorage failures

---

# 27. Security

Security is mandatory.

Never expose:

* Gemini API keys
* Server secrets
* Environment secrets

Do not store unnecessary sensitive user information.

Do not log secrets.

Validate API inputs.

Avoid blindly rendering unsanitized AI-generated HTML.

AI output should be treated as untrusted text/data.

---

# 28. Performance

The application should remain fast.

Requirements:

* Avoid unnecessary client-side JavaScript
* Use server components where appropriate
* Use client components only where interaction requires them
* Optimize images
* Lazy-load heavy components when useful
* Avoid unnecessary API requests
* Avoid unnecessary animations
* Avoid memory leaks in speech recognition
* Clean up event listeners

The application should remain responsive during AI operations.

---

# 29. Code Quality

Code must be:

* TypeScript-first
* Strongly typed
* Modular
* Reusable
* Maintainable
* Readable
* Component-based

Avoid:

* Huge monolithic components
* Duplicate logic
* Unnecessary dependencies
* Hardcoded secrets
* Unexplained magic values
* Dead code
* Temporary hacks presented as final implementation

Reusable UI components should be created for repeated patterns.

---

# 30. Project Architecture

The project should have clear separation between:

* UI components
* Pages/routes
* AI/API logic
* Scenario data
* Utility functions
* Local storage logic
* Types
* Configuration
* Shared design components

Hotel scenarios should be represented as structured data rather than duplicated manually throughout components.

AI prompts should be centralized and maintainable.

---

# 31. Design System

Create a consistent design system covering:

* Colors
* Typography
* Spacing
* Border radius
* Shadows
* Buttons
* Inputs
* Cards
* Badges
* Alerts
* Modals
* Navigation
* Progress indicators
* Empty states
* Loading states

Components should have consistent states:

* Default
* Hover
* Focus
* Active
* Disabled
* Loading
* Error

---

# 32. Content Quality

All visible content should use professional English.

Hotel terminology must be realistic.

Avoid awkward AI-generated placeholder copy in the final UI.

The product should sound like a professional educational hospitality platform.

Examples and scenarios should reflect realistic hotel operations.

---

# 33. UX Principle

The student should be able to start an AI practice session with minimal friction.

The ideal flow should be:

Home/Dashboard
→ Choose Department
→ Choose Scenario
→ Start Practice
→ Speak/Type
→ AI Responds
→ Continue Conversation
→ Finish
→ AI Evaluation
→ Progress Updated

The user should always have a clear primary action.

---

# 34. Mobile UX

On mobile:

* Navigation must collapse properly
* Conversation UI must remain readable
* Microphone button must be easy to use
* AI voice controls must be accessible
* Cards must stack appropriately
* Tables must not overflow the viewport
* Text must remain readable
* No horizontal scrolling should be required for normal usage

---

# 35. Browser Compatibility

Core functionality should work in modern browsers.

Speech recognition and speech synthesis are browser-dependent.

When a feature is unsupported:

* Detect it
* Explain the limitation
* Provide a text-based fallback

The application must never completely fail because voice functionality is unavailable.

---

# 36. Progressive Enhancement

Text-based conversation must remain available even when:

* Microphone is unavailable
* Speech recognition is unsupported
* Speech synthesis is unsupported

Voice should enhance the application rather than become a single point of failure.

---

# 37. Testing Principles

Every major feature must be tested.

Test:

* Navigation
* Responsive layout
* AI requests
* AI errors
* Conversation state
* Microphone permissions
* Speech recognition
* Speech synthesis
* Scoring
* localStorage
* Leaderboard
* Teacher dashboard
* Email generation
* WhatsApp generation
* Loading states
* Error states

The final application must not contain obvious console errors.

---

# 38. Development Workflow

Development must follow Spec-Driven Development.

Required workflow:

1. Constitution
2. Feature specifications
3. Clarification
4. Implementation plan
5. Task breakdown
6. Implementation
7. Testing
8. Review
9. Refinement

Do not begin large implementation work without an approved specification and plan.

Each major feature should be independently testable.

---

# 39. Feature Independence

Features should be modular.

Adding a new hotel department should not require rewriting the entire application.

Adding a new AI scenario should primarily involve adding scenario configuration/content.

Adding future authentication/database functionality should be possible without replacing the entire UI architecture.

---

# 40. Future Extensibility

The MVP does not require:

* Database
* Authentication
* Cloud student profiles
* Real-time multiplayer
* Paid subscriptions

However, architecture should not make these future capabilities unnecessarily difficult to introduce.

Possible future versions may add:

* Student accounts
* Teacher accounts
* Cloud progress
* Real class management
* Database
* Certificates
* Advanced analytics
* More hotel departments
* More AI models
* Subscription plans

These future features must not be implemented in the MVP unless explicitly specified.

---

# 41. MVP Scope Discipline

The project must remain focused.

Do not add unrelated features simply because they are technically possible.

Do not introduce unnecessary infrastructure.

Do not add a database.

Do not add authentication unless explicitly requested.

Do not add payment systems.

Do not add unnecessary third-party services.

Prioritize the core HotelSpeak AI learning experience.

---

# 42. Definition of Done

A feature is considered complete only when:

* It matches its specification
* UI is polished
* Desktop works
* Mobile works
* Loading state exists
* Error state exists
* Accessibility has been considered
* TypeScript has no avoidable type errors
* No secrets are exposed
* AI functionality works where specified
* Browser limitations have fallbacks
* No obvious console errors exist
* The feature integrates cleanly with the existing design system
* The feature does not unnecessarily break existing functionality

---

# 43. Product Quality Standard

HotelSpeak AI should be treated as a real product, not merely a classroom prototype.

Every implementation decision should ask:

1. Is this useful for a hotel-management student?
2. Is this easy to understand?
3. Does this feel professional?
4. Does this work on mobile?
5. Is it accessible?
6. Is it performant?
7. Is it secure?
8. Is the AI behavior honest and useful?
9. Can the feature be maintained?
10. Does it fit the overall HotelSpeak AI experience?

The final result must feel like a polished AI-powered hospitality education platform.

---

# 44. Non-Negotiable Constraints

The following are mandatory:

* Gemini API for AI functionality
* Gemini secret must remain server-side
* No database
* No MySQL
* No Prisma
* localStorage for MVP local progress
* Responsive design
* Professional hospitality + AI UI
* Complete website experience
* Animated but professional interface
* Real hotel scenarios
* Voice interaction with browser fallback
* AI evaluation and scoring
* Student progress
* Class leaderboard
* Teacher dashboard
* Email Assistant
* WhatsApp Business Assistant
* Clean TypeScript architecture
* Accessible UI
* Proper loading/error states
* Production-quality implementation
* No fake AI functionality

---

# 45. Final Product Goal

HotelSpeak AI should provide a complete learning environment where a hotel-management student can enter the platform, select a real hotel situation, communicate with an AI guest, speak using a microphone, hear the AI response, receive professional English feedback, improve their response, generate real-world business communication, and track their learning progress.

The application must combine the feel of:

* A modern SaaS product
* A hospitality training platform
* An AI conversation coach
* A Business English learning tool

The result should be visually impressive, technically clean, educationally useful and suitable for real student use.
