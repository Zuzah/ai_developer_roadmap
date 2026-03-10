# Applied AI Roadmap — Master Build Plan
# DO NOT DELETE — shared context across all iterations
# UPDATED: Iteration 6 restructure — week/task data model + onboarding

## Repo
Name: ai_developer_roadmap
URL: https://zuzah.github.io/ai_developer_roadmap/

## Stack
- Vite + React + TypeScript
- Tailwind CSS
- localStorage (progress + start date)
- GitHub Actions (auto-deploy on push to main)

## Design System
Background:   #02132F  (--bg-base)
Surface:      #051d45  (--bg-surface)
Raised:       #071f4a  (--bg-raised)
Border:       #0a2d6e  (--border)
Text primary: #FFFFFF
Text muted:   #7aafc4
Text dim:     #3a6a85
Accent:       #04CCFD  (cyan — all interactive elements)
Font:         Georgia (headings) + Courier New (labels/mono)

## Tabs (4 total after restructure)
1. This Week   ← new — shows current week tasks based on start date
2. Roadmap     ← existing — phase nav + phase/week detail
3. Staying Current
4. Gap Analysis

## Data Model (post-restructure)

### Hierarchy
Phase (6) → Week (24 total) → Task (5-7 per week, ordered, checkable)

### Task types
'setup' | 'read' | 'watch' | 'build' | 'practice' | 'write'

### Progress stored in localStorage key: 'roadmap-v2'
{
  startDate: string | null,       // ISO date, set in onboarding
  completedTasks: Record<string, boolean>  // key: task.id e.g. "w1-t1"
}

### Current week calculation
weekNumber = floor((today - startDate) / 7days) + 1, clamped 1-24

## Project Structure (final state)
```
ai_developer_roadmap/
├── .github/workflows/deploy.yml
├── public/favicon.ico
├── src/
│   ├── types/index.ts               # Restructured: Phase/Week/Task
│   ├── data/
│   │   ├── phases.ts                # 6 phases × 24 weeks × ~6 tasks each
│   │   ├── staying-current.ts       # unchanged
│   │   └── gap-analysis.ts          # unchanged
│   ├── components/
│   │   ├── Header.tsx               # Updated: 4 tabs
│   │   ├── Onboarding.tsx           # NEW: start date capture flow
│   │   ├── PhaseNav.tsx             # Updated: completion % from tasks
│   │   ├── PhaseView.tsx            # Updated: week tabs + task list
│   │   ├── TaskCard.tsx             # NEW: replaces SkillCard + ProjectCard
│   │   ├── ThisWeek.tsx             # NEW: current week focused view
│   │   ├── StayingCurrent.tsx       # unchanged
│   │   └── GapAnalysis.tsx          # unchanged
│   ├── hooks/
│   │   └── useProgress.ts           # NEW: localStorage (startDate + completedTasks)
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.ts                   # base: '/ai_developer_roadmap/'
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Iteration Plan (revised)

| # | Files Changed | Deliverable |
|---|---|---|
| 1-5 | DONE | Scaffold → data → nav → phase view → staying current/gap analysis |
| 6 | types, phases.ts, PhaseView (placeholder), App.tsx — DELETE SkillCard + ProjectCard | Data restructure, build stays green |
| 7 | Onboarding.tsx, useProgress.ts, App.tsx | Onboarding flow, start date in localStorage |
| 8 | TaskCard.tsx, PhaseView.tsx (full), Header.tsx (4 tabs) | Full roadmap tab with week selector + task list |
| 9 | ThisWeek.tsx, App.tsx final | "This Week" tab live — app complete |

## Content — 24 Weeks

Phase 1 (Weeks 1-4):   Claude Mastery & Prompt Engineering
Phase 2 (Weeks 5-8):   Agentic Development & Claude Code
Phase 3 (Weeks 9-12):  MCP Deep Dive
Phase 4 (Weeks 13-16): RAG & Vector Databases
Phase 5 (Weeks 17-20): Multi-Agent Systems
Phase 6 (Weeks 21-24): Portfolio & Capstone

Projects (one per build week):
- W3:  Receipt Manager (Python, Corp)
- W4:  Space Mission Tracker (Python+TS, Space)
- W7:  Fleet Manager CLI (Go, Automotive)
- W8:  Wave Accounting Assistant (Python, Corp)
- W10: Wise MCP Server (Python, Corp)
- W11: Automotive DB MCP (Go, Automotive)
- W14-15: Corp Knowledge Base (Python+TS, Corp)
- W18-19: Business Automation System (Python, Corp)
- W21: Portfolio Website (TypeScript)
- W22-23: Capstone — AI Rental Platform (Python+TS, Automotive)
