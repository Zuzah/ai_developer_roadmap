// src/types/index.ts — Iteration 6 restructure
// New hierarchy: Phase → Week → Task
// Progress is now purely task-based (skills/projects removed)

export type TaskType = 'setup' | 'read' | 'watch' | 'build' | 'practice' | 'write';

export interface Resource {
  label: string;
  url: string;
}

export interface Task {
  id: string;               // globally unique e.g. "w1-t1"
  type: TaskType;
  title: string;
  description: string;      // concrete instruction, 1–2 sentences
  estimatedMinutes: number;
  resource?: Resource;      // primary link for read/watch tasks
  required: boolean;        // false = bonus/optional
}

export interface Week {
  id: string;               // "w1" … "w24"
  weekNumber: number;       // 1–24
  phaseId: number;
  title: string;
  objective: string;        // "By end of this week you will be able to..."
  hoursEstimate: string;
  tasks: Task[];            // ordered — do top to bottom
}

export interface Phase {
  id: number;
  label: string;            // "Phase 1"
  title: string;
  weekRange: string;        // "Weeks 1–4"
  color: string;
  tagline: string;
  goal: string;
  why: string;
  weeks: Week[];
}

export interface GapClaim {
  id: string;
  claim: string;
  verdict: 'True' | 'Mostly True' | 'Contextually True' | 'True & Underrated' | 'True for Now';
  analysis: string;
}

export interface CadenceBlock {
  cadence: string;
  items: string[];
}

// ── localStorage key: 'roadmap-v2' ───────────────────────────────
export interface ProgressState {
  startDate: string | null;                 // ISO e.g. "2026-03-09"
  completedTasks: Record<string, boolean>;  // key: task.id
}

// ── Utility helpers ───────────────────────────────────────────────
export function getCurrentWeekNumber(startDate: string): number {
  const start = new Date(startDate);
  start.setHours(0, 0, 0, 0);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.floor((today.getTime() - start.getTime()) / 86_400_000);
  return Math.min(Math.max(Math.floor(days / 7) + 1, 1), 24);
}

export function getWeekStartDate(startDate: string, weekNumber: number): Date {
  const d = new Date(startDate);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + (weekNumber - 1) * 7);
  return d;
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-CA', { month: 'short', day: 'numeric', year: 'numeric' });
}
