# Applied AI Roadmap — Master Build Plan
# DO NOT DELETE — shared context across all iterations

## Repo
Name: ai_developer_roadmap
URL: https://yourusername.github.io/ai_developer_roadmap/

## Stack
- Vite + React + TypeScript
- Tailwind CSS (utility styling)
- localStorage (progress persistence)
- GitHub Actions (auto-deploy on push to main)

## Project Structure (final state)
```
ai_developer_roadmap/
├── .github/workflows/deploy.yml     # Auto-deploy to GitHub Pages
├── public/
├── src/
│   ├── types/index.ts               # All TypeScript interfaces
│   ├── data/
│   │   ├── phases.ts                # 6 phases, 24 weeks, all projects
│   │   ├── staying-current.ts       # Daily/weekly/monthly cadence
│   │   └── gap-analysis.ts          # LinkedIn post analysis
│   ├── components/
│   │   ├── Header.tsx               # Branding + tab navigation
│   │   ├── PhaseNav.tsx             # 6-phase selector grid
│   │   ├── PhaseView.tsx            # Active phase detail
│   │   ├── SkillCard.tsx            # Expandable skill accordion
│   │   ├── ProjectCard.tsx          # Project with checkbox tracking
│   │   ├── StayingCurrent.tsx       # Cadence tab content
│   │   └── GapAnalysis.tsx          # Post analysis tab content
│   ├── hooks/
│   │   └── useProgress.ts           # localStorage persistence hook
│   ├── App.tsx                      # Root: tab routing + state
│   ├── main.tsx
│   └── index.css                    # Tailwind directives + CSS vars
├── index.html
├── package.json
├── vite.config.ts                   # base: '/ai_developer_roadmap/'
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Iterations — Deliver in Order
Each iteration is independently deployable.

| # | What's Added | Visible Change |
|---|---|---|
| 1 | Scaffold: configs, main.tsx, placeholder App.tsx, deploy.yml | Branded landing page live on GitHub Pages |
| 2 | Types + all data files (phases, staying-current, gap-analysis) | No visual change — data layer only |
| 3 | Header.tsx + PhaseNav.tsx + App.tsx wired with tabs | Header, tab nav, phase selector visible |
| 4 | PhaseView.tsx + SkillCard.tsx + ProjectCard.tsx | Full roadmap tab functional |
| 5 | StayingCurrent.tsx + GapAnalysis.tsx | All 3 tabs complete |
| 6 | useProgress.ts + checkbox wiring throughout | Persistent progress tracking works |

## Content — The Unified Roadmap (6 phases)

### Phase 1: Claude Mastery & Prompt Engineering (Weeks 1–4)
Color: #00E5CC
Projects:
  - Week 3: Receipt Manager (Python, Corp) — extract/categorize receipts → Wave CSV
  - Week 4: Space Mission Tracker (Python+TS, Space) — NASA/SpaceX APIs + Claude summaries

### Phase 2: Agentic Development & Claude Code (Weeks 5–8)
Color: #3B82F6
Projects:
  - Week 7: Fleet Manager CLI (Go, Automotive) — vehicle/rental tracking CLI
  - Week 8: Wave Accounting Assistant (Python, Corp) — NL queries over Wave API

### Phase 3: MCP Deep Dive (Weeks 9–12)
Color: #FF6B35
Projects:
  - Week 10: Wise MCP Server (Python, Corp) — balances/transactions/quotes via MCP
  - Week 11: Automotive DB MCP (Go, Automotive) — NL→SQL over Fleet Manager DB

### Phase 4: RAG & Vector Databases (Weeks 13–16)
Color: #A855F7
Projects:
  - Weeks 14–15: Corp Knowledge Base (Python+TS, Corp) — RAG over business docs

### Phase 5: Multi-Agent Systems (Weeks 17–20)
Color: #F59E0B
Projects:
  - Weeks 18–19: Business Automation System (Python, Corp) — Receipt+Invoice+Compliance+Finance agents

### Phase 6: Portfolio & Capstone (Weeks 21–24)
Color: #EC4899
Projects:
  - Week 21: Portfolio Website (TypeScript)
  - Weeks 22–23: Capstone — Full-Stack AI Rental Management Platform (Option A)
  - Week 24: 3 blog posts + MCP registry + job applications

## Design System
Background: #0A0A0F
Surface: #0E0E18
Border: #1E1E2E
Text primary: #F0EEE8
Text muted: #7A7A8C
Font: Georgia (headings) + Courier New (labels/mono)

## Tabs
1. Roadmap (default)
2. Staying Current
3. Gap Analysis

## Progress Tracking
- Per-project checkboxes (completed: boolean)
- Per-skill checkboxes (completed: boolean)
- Stored in localStorage key: 'roadmap-progress'
- Phase completion % shown in PhaseNav
