// src/data/staying-current.ts
// The operating cadence for staying current as an Applied AI Engineer.
// The half-life of AI knowledge is approximately 3–6 months.
// This is not a study plan — it is a maintenance schedule.

import type { CadenceBlock } from '../types';

export const cadenceBlocks: CadenceBlock[] = [
  {
    cadence: 'Daily · 15 minutes',
    items: [
      'Skim Simon Willison\'s blog or feed — he catalogs every meaningful model release with context',
      'Check one AI changelog: Anthropic, OpenAI, or Google DeepMind release notes',
      'If you shipped something yesterday, spend 5 minutes logging one lesson in your CLAUDE.md',
    ],
  },
  {
    cadence: 'Weekly · 1–2 hours',
    items: [
      'Ship one small AI experiment — even a 50-line script that tries one new technique counts',
      'Read one paper abstract from arXiv cs.AI or cs.CL — track the idea, not the math',
      'Watch one practitioner talk: Latent Space podcast, AI Engineer World\'s Fair, or Anthropic Engineering blog',
      'Review one open source AI repo that recently trended — read the README and skim the core code',
    ],
  },
  {
    cadence: 'Monthly · 2–3 hours',
    items: [
      'Re-evaluate your stack: better embedding model available? Faster vector store? Cheaper API tier?',
      'Update your portfolio repo: new project, improved README, or updated benchmark numbers',
      'Review 3–5 Applied AI job descriptions at target companies — note unfamiliar skills or terms',
      'Write or outline one blog post based on something you built or learned this month',
    ],
  },
];

export const compoundRule = {
  title: 'The Compound Rule',
  body: 'An engineer who ships one small AI experiment per week has 52 real data points after one year — intuitions that no course teaches. The goal is not to track every model release. It is to build continuously so your mental model stays calibrated against reality, not against blog posts.',
};

export const adhdPrinciples = [
  {
    principle: '50-minute focus blocks',
    detail: 'Work in 50-minute blocks with a 10-minute break. Every session should produce something visible — a working script, a passing test, an updated README.',
  },
  {
    principle: 'Start coding immediately',
    detail: 'Don\'t over-plan. Open a file, write one function, run it. Momentum is easier to sustain than to start.',
  },
  {
    principle: 'Ship broken but working',
    detail: 'A deployed 70% solution beats a local 100% solution. Iteration from something live is faster than perfecting in isolation.',
  },
  {
    principle: 'Public by default',
    detail: 'Push every session\'s work to GitHub, even if incomplete. Public commits create accountability and leave a trail of progress.',
  },
  {
    principle: 'Context switching is OK',
    detail: 'Pick projects based on energy level. High energy → complex agent architecture. Low energy → documentation, README improvements, small experiments.',
  },
  {
    principle: 'Track wins daily',
    detail: 'Keep a running wins list — one line per session. Momentum is motivation. Looking back at 30 wins makes the next one easier to start.',
  },
];
