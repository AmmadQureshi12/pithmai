function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function evaluatePracticeResponse(response, goals = []) {
  const cleaned = normalizeText(response);
  const hasMeaningfulText = cleaned.length >= 10;

  const goalPhrases = (goals || [])
    .map((goal) => normalizeText(goal))
    .filter(Boolean);

  const hasGreeting = /(hello|hi|good (morning|afternoon|evening)|welcome|thank you)/.test(cleaned);
  const hasApology = /(sorry|apologize|apologise)/.test(cleaned);
  const hasAction = /(i can|i would|i will|let me|happy to assist|i can help|i will help|i can arrange|i would be happy|i am happy to|i can fix|i will arrange)/.test(cleaned);
  const hasNextStep = /(next step|i will|i can|i would|we can|let me|as soon as|today|immediately|right away|for you|once|before|after)/.test(cleaned);
  const hasGoalMatch = goalPhrases.some((goal) => cleaned.includes(goal) || cleaned.includes(goal.replace(/\s+/g, "")));

  const scoreSignals = [hasGreeting, hasApology, hasAction, hasNextStep, hasMeaningfulText, hasGoalMatch].filter(Boolean).length;
  const isCorrect = hasMeaningfulText && hasAction && (hasGreeting || hasApology || hasNextStep) && scoreSignals >= 3;

  const suggestion = isCorrect
    ? "Strong response. Keep the tone polite, clear, and guest-focused, and add a specific next step for reassurance."
    : "Your answer needs improvement. Add a polite greeting, a clear action, and a next step that reassures the guest or manager.";

  return {
    isCorrect,
    points: isCorrect ? 1 : -1,
    suggestion,
    scoreSignals,
  };
}

module.exports = { evaluatePracticeResponse };
