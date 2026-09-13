"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { getDepartment, HotelScenario } from "@/lib/scenarios";
import { readStudentState, StudentState, writeStudentState } from "@/lib/progress";

type PracticeFeedback = { points: number; isCorrect: boolean; suggestion: string };

type PracticeResponse = { points?: number; isCorrect?: boolean; suggestion?: string; error?: string };

export default function PracticeDetailPage({ params }: { params: Promise<{ scenarioId: string }> }) {
  const [scenarioId, setScenarioId] = useState("");
  const [scenario, setScenario] = useState<HotelScenario | null>(null);
  const [state, setState] = useState<StudentState>(readStudentState);
  const [response, setResponse] = useState("");
  const [feedback, setFeedback] = useState<PracticeFeedback | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    params.then(({ scenarioId: nextScenarioId }) => {
      setScenarioId(nextScenarioId);
      fetch(`/api/scenarios/${nextScenarioId}`)
        .then(async (result) => {
          if (!result.ok) throw new Error("Topic not found");
          return result.json() as Promise<HotelScenario>;
        })
        .then(setScenario)
        .catch((reason: Error) => setError(reason.message))
        .finally(() => setLoading(false));
    });
  }, [params]);

  const submitPractice = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!scenario || !response.trim()) return;
    setSubmitting(true);
    setError("");
    try {
      const result = await fetch(`/api/scenarios/${scenarioId}/practice`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ response }),
      });
      const data = await result.json() as PracticeResponse;
      if (!result.ok || typeof data.points !== "number") throw new Error(data.error ?? "Unable to score practice");

      const nextFeedback = { points: data.points, isCorrect: !!data.isCorrect, suggestion: data.suggestion ?? "Keep improving your guest-facing English." };
      setFeedback(nextFeedback);
      const nextState = { ...state, completedLessons: [{ scenarioId: scenario.id, score: data.points, completedAt: new Date().toISOString(), response: response.trim() }, ...state.completedLessons.filter((lesson) => lesson.scenarioId !== scenario.id)] };
      setState(nextState);
      writeStudentState(nextState);
    } catch (reason) {
      setError(reason instanceof Error ? reason.message : "Unable to score practice");
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <main className="practice-page"><div className="practice-loading">Loading practice topic...</div></main>;
  if (error || !scenario) return <main className="practice-page"><div className="practice-error"><p>{error || "Topic not found"}</p><Link href="/student" className="button-outline">Back to practice library</Link></div></main>;

  const department = getDepartment(scenario.departmentId);
  return (
    <main className="practice-page">
      <div className="practice-container">
        <header className="practice-header">
          <Link href="/student" className="brand"><span className="brand-mark">H</span><span>HotelSpeak <em>AI</em></span></Link>
          <Link href="/student" className="button-outline">Back to library</Link>
        </header>

        <div className="practice-breadcrumb"><Link href="/student">Student dashboard</Link><span>/</span><span>{department.name}</span><span>/</span><strong>{scenario.title}</strong></div>

        <section className="practice-intro">
          <div><p className="eyebrow">{department.name} / {scenario.difficulty}</p><h1>{scenario.title}</h1><p>{scenario.description}</p></div>
          <div className="practice-step"><span>Practice</span><strong>01</strong></div>
        </section>

        <section className="prompt-card" aria-labelledby="prompt-title">
          <div className="prompt-label"><span className="prompt-icon">?</span><div><p className="eyebrow">Guest or manager says</p><h2 id="prompt-title">Respond professionally</h2></div></div>
          <blockquote>&quot;{scenario.samplePrompt}&quot;</blockquote>
          <div className="goal-list">{scenario.learningGoals.map((goal) => <span key={goal}>{goal}</span>)}</div>
        </section>

        <form onSubmit={submitPractice} className="response-card">
          <div className="response-heading"><div><p className="eyebrow">Your response</p><h2>What would you say?</h2></div><span className="response-count">{response.length} characters</span></div>
          <label htmlFor="practice-response" className="sr-only">Your professional response</label>
          <textarea id="practice-response" value={response} onChange={(event) => setResponse(event.target.value)} placeholder="Write your professional response here..." className="response-textarea" required />
          <div className="response-footer"><p>Include a polite opening, a clear action, and the next step for the guest.</p><button type="submit" className="button-primary response-submit" disabled={submitting || !response.trim()}>{submitting ? "Checking response..." : "Submit response"}<span aria-hidden="true">-&gt;</span></button></div>
          {feedback && <div className={`feedback-card ${feedback.isCorrect ? "feedback-success" : "feedback-review"}`}><div className="feedback-title"><strong>{feedback.isCorrect ? "Correct answer" : "Your answer is wrong"}</strong><span>{feedback.isCorrect ? "+1 point added" : "-1 point deducted"}</span></div><p className="feedback-explanation">{feedback.isCorrect ? "Your response was relevant and professional, so 1 point has been added to your dashboard." : "Your answer was not correct for this situation, so 1 point has been deducted from your dashboard."}</p><p>{feedback.suggestion}</p></div>}
          {error && <p className="practice-form-error">{error}</p>}
        </form>
      </div>
    </main>
  );
}
