// src/types/index.ts
// All TypeScript interfaces for the roadmap app.
// Imported by all data files and components.
// Do not modify field names without updating data files and components together.

export interface Resource {
  label: string;
  url: string;
}

export interface Skill {
  id: string;             // unique key e.g. "p1-prompt-structure"
  name: string;
  details: string[];
}

export interface Project {
  id: string;             // unique key e.g. "p1-receipt-manager"
  week: string;           // e.g. "Week 3" | "Weeks 14–15"
  name: string;
  language: string;       // e.g. "Python" | "Go" | "Python + TypeScript"
  category: 'Corp' | 'Space' | 'Automotive' | 'Portfolio';
  description: string;
  features: string[];
  successCriteria: string[];
  repoUrl?: string;       // added later as projects are built
}

export interface Phase {
  id: number;
  label: string;          // "Phase 1"
  title: string;          // "Claude Mastery & Prompt Engineering"
  weeks: string;          // "Weeks 1–4"
  hoursPerWeek: string;   // "5–10 hrs/week"
  color: string;          // CSS color string
  tagline: string;        // motivational one-liner
  goal: string;           // phase objective sentence
  why: string;            // why this phase matters (2–3 sentences)
  skills: Skill[];
  projects: Project[];
  resources: Resource[];
}

export interface CadenceBlock {
  cadence: string;        // "Daily (15 min)"
  items: string[];
}

export interface GapClaim {
  id: string;
  claim: string;
  verdict: 'True' | 'Mostly True' | 'Contextually True' | 'True & Underrated' | 'True for Now';
  analysis: string;
}

// Stored in localStorage under key 'roadmap-progress'
export interface ProgressState {
  completedSkills: Record<string, boolean>;    // key: skill.id
  completedProjects: Record<string, boolean>;  // key: project.id
}
