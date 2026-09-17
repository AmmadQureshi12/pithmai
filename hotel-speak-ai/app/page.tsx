import Link from "next/link";
import AiChatbot from "@/app/components/ai-chatbot";
import StepImageSlideshow from "@/app/components/step-image-slideshow";

const features = [
  ["AI Conversation Practice", "Roleplay realistic front desk, service, and complaint conversations."],
  ["Speaking Confidence", "Practise spoken English with guidance for fluency and professional tone."],
  ["Professional Writing", "Create polished emails and WhatsApp messages for hotel operations."],
  ["Progress Tracking", "Review your performance, streaks, and improvements in one place."],
];

const departments = ["Front Office", "Food & Beverage", "Housekeeping", "Guest Relations", "Reservations", "Concierge"];

const steps = [
  ["Choose a scenario", "Pick a realistic guest or workplace situation."],
  ["Practise your response", "Write or speak naturally and build useful professional phrases."],
  ["Improve with feedback", "Refine your tone, grammar, and next step with clear guidance."],
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="site-container">
        <header className="app-header">
          <Link href="/" className="brand" aria-label="HotelSpeak AI home">
            <span className="brand-mark">H</span>
            <span className="brand-name">HotelSpeak <em>AI</em></span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            <Link href="#features" className="nav-button">Features</Link>
            <Link href="#departments" className="nav-button">Departments</Link>
            <Link href="#how-it-works" className="nav-button">How it works</Link>
            <Link href="/student" className="nav-button">Student Area</Link>
          </nav>

          <div className="header-actions">
            <Link href="/student" className="button-primary header-cta">Start Learning</Link>
            <div className="avatar small" aria-label="HotelSpeak account">HS</div>
          </div>
        </header>

        <nav className="mobile-nav" aria-label="Mobile navigation">
          <Link href="#features">Features</Link>
          <Link href="#departments">Departments</Link>
          <Link href="#how-it-works">How it works</Link>
        </nav>

        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Hospitality English reimagined</p>
            <h1 id="hero-title">Speak with confidence. Serve with excellence.</h1>
            <p className="hero-description">
              HotelSpeak AI helps hotel-management students practise the English they need for real guests, real teams, and real hotel careers.
            </p>
            <div className="hero-actions">
              <Link href="/student" className="button-primary">Start Learning</Link>
              <Link href="#how-it-works" className="button-outline">See how it works</Link>
            </div>
            <div className="hero-proof" aria-label="Platform benefits">
              <span><strong>8</strong> hotel departments</span>
              <span><strong>AI</strong> practice coach</span>
              <span><strong>24/7</strong> learning access</span>
            </div>
          </div>
        </section>

        <section id="features" className="content-section" aria-labelledby="features-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Features</p>
              <h2 id="features-title" className="section-title">Everything you need to grow in hospitality.</h2>
            </div>
            <p className="section-intro">Focused practice for the language, judgement, and confidence hotel teams use every day.</p>
          </div>
          <div className="feature-grid">
            {features.map(([title, description], index) => (
              <article key={title} className="info-card">
                <span className="tile-icon">0{index + 1}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="departments" className="content-section" aria-labelledby="departments-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Hotel departments</p>
              <h2 id="departments-title" className="section-title">Learn the language of the whole hotel.</h2>
            </div>
            <Link href="/student" className="section-link">Explore the student app</Link>
          </div>
          <div className="department-grid">
            {departments.map((department, index) => (
              <Link href="/student" key={department} className="department-card">
                <span className="department-number">0{index + 1}</span>
                <span className="department-name">{department}</span>
                <span className="department-arrow" aria-hidden="true">-&gt;</span>
              </Link>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="content-section how-it-works-section" aria-labelledby="how-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">How it works</p>
              <h2 id="how-title" className="section-title">A practical learning loop for your next shift.</h2>
            </div>
          </div>
          <div className="steps-grid">
            {steps.map(([title, description], index) => (
              <article key={title} className="step-card">
                <div className="step-card-top"><span className="step-number">0{index + 1}</span><span className="step-label">Step {index + 1}</span></div>
                <div className="step-card-content"><h3>{title}</h3><p>{description}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="how-image-section" aria-label="Hotel learning moments">
          <StepImageSlideshow wide />
        </section>

        <section className="cta-panel" aria-labelledby="cta-title">
          <div><p className="eyebrow">Ready to start?</p><h2 id="cta-title">Turn everyday hotel situations into English confidence.</h2></div>
          <Link href="/student" className="button-primary">Open Student Area</Link>
        </section>

        <footer className="site-footer">
          <div className="footer-grid">
            <div className="footer-brand"><div className="footer-brand-line"><span className="brand-mark">H</span><span className="brand-name">HotelSpeak <em>AI</em></span></div><p>AI-powered hospitality English training for students and hotel teams.</p></div>
            <div><h3>Explore</h3><div className="footer-links"><Link href="#features">Features</Link><Link href="#departments">Departments</Link><Link href="#how-it-works">How it works</Link></div></div>
            <div><h3>Student Area</h3><div className="footer-links"><Link href="/student">Dashboard</Link><Link href="/student">Practice lab</Link><Link href="/student">Progress</Link></div></div>
            <div><h3>Contact</h3><p>Questions about your learning journey?</p><div className="footer-email-links"><a href="mailto:hello@hotelspeakai.com">hello@hotelspeakai.com</a><a href="mailto:qammad16@gmail.com">qammad16@gmail.com</a></div><div className="social-links" aria-label="Social media links"><a href="https://x.com/AmmadQuresi2201" target="_blank" rel="noreferrer" aria-label="X / Twitter"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18.9 2h3.4l-7.4 8.5L22.7 22h-6.7l-5.2-7.1L5.1 22H1.7l7.9-9.1L1.3 2h6.9l4.7 6.2L18.9 2Zm-1.2 18h1.9L7.3 3.9H5.3L17.7 20Z" /></svg></a><a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V7.4c0-.9.3-1.6 1.6-1.6H17V2.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.4-4.1 4.1v2.3H8v3.2h2.5v8h3Z" /></svg></a><a href="https://www.instagram.com/ammadqureshi28?stkn=ZWVsbm5xMWthZ3Ro" target="_blank" rel="noreferrer" aria-label="Instagram"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.2A5.8 5.8 0 1 1 6.2 13 5.8 5.8 0 0 1 12 7.2Zm0 2A3.8 3.8 0 1 0 15.8 13 3.8 3.8 0 0 0 12 9.2Zm5.1-3.2a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3Z" /></svg></a><a href="https://www.linkedin.com/in/ammad-qureshi-03006a2b4?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noreferrer" aria-label="LinkedIn"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.5 8.5H3V21h3.5V8.5ZM4.75 3A2.05 2.05 0 1 0 4.75 7.1 2.05 2.05 0 0 0 4.75 3ZM21 13.8c0-3.8-2-5.6-4.7-5.6-2.2 0-3.1 1.2-3.6 2v-1.7H9.2V21h3.5v-6.2c0-1.6.3-3.1 2.2-3.1 1.9 0 1.9 1.8 1.9 3.2V21H21v-7.2Z" /></svg></a></div></div>
          </div>
          <div className="footer-bottom">© 2026 HotelSpeak AI. Built for confident hospitality communication.</div>
        </footer>
      </div>
      <AiChatbot />
    </main>
  );
}
