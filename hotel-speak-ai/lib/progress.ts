export type CompletedLesson = { scenarioId: string; score: number; completedAt: string; response: string };
export type StudentProfile = { name: string; goal: string };
export type StudentState = { completedLessons: CompletedLesson[]; savedNotes: Record<string, string>; profile: StudentProfile };
export const studentStorageKey = "hotelspeak-student-state";
export const defaultStudentState: StudentState = { completedLessons: [], savedNotes: {}, profile: { name: "Aisha Khan", goal: "Front office confidence" } };

export function readStudentState(): StudentState {
  if (typeof window === "undefined") return defaultStudentState;
  try {
    const storedState = window.localStorage.getItem(studentStorageKey);
    if (!storedState) return defaultStudentState;
    const parsedState = JSON.parse(storedState) as Partial<StudentState>;
    return { completedLessons: Array.isArray(parsedState.completedLessons) ? parsedState.completedLessons : [], savedNotes: parsedState.savedNotes ?? {}, profile: { ...defaultStudentState.profile, ...parsedState.profile } };
  } catch { return defaultStudentState; }
}

export function writeStudentState(state: StudentState) { window.localStorage.setItem(studentStorageKey, JSON.stringify(state)); }