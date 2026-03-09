// src/data/gap-analysis.ts
// Analysis of the LinkedIn post: "Your next AI engineer candidate might be a senior dev who learned to prompt."
// Verdict on each claim — what holds up, what is overstated, and what the actual fix is.

import type { GapClaim } from '../types';

export const postSummary = {
  verdict: 'Substantially correct — but it slightly overstates the invisibility of the gap and understates what fixes it.',
  detail: 'The gap is real and significant. But it is invisible only in resume screening and conversational interviews. Give any candidate a 90-minute live task involving tool use, retrieval, or agent design and the gap surfaces within 20 minutes. The failure the post describes is a process failure, not a detection failure. The fix is a better hiring process — not a certification.',
};

export const gapClaims: GapClaim[] = [
  {
    id: 'claim-invisible',
    claim: 'The gap is enormous and almost invisible in a standard interview.',
    verdict: 'Mostly True',
    analysis: 'Invisible in resume screening and conversational interviews — accurate. But give someone a 90-minute task involving tool use or agent design and the gap surfaces fast. The failure the post describes is a process problem: most hiring processes don\'t include real tasks. The gap itself is detectable.',
  },
  {
    id: 'claim-hobbyist',
    claim: 'A ChatGPT hobbyist uses AI to move slightly faster.',
    verdict: 'True',
    analysis: 'Accurately describes the ceiling of AI-assisted coding: it\'s still fundamentally the same architecture, same design, slightly faster typing. An Applied AI Engineer changes what is possible to build in a sprint, not just how fast they type it.',
  },
  {
    id: 'claim-prompts',
    claim: 'Applied AI Engineers structure prompts the way a senior engineer structures code.',
    verdict: 'True & Underrated',
    analysis: 'This is the most accurate and most underappreciated point in the post. A prompt is a specification with edge cases, failure modes, and constraints. Engineers who treat it like a Google search query will always produce inconsistent, unreliable output — regardless of how good the model is.',
  },
  {
    id: 'claim-multiplier',
    claim: 'The output difference is 3–5x.',
    verdict: 'Contextually True',
    analysis: 'True for tasks that benefit from AI-native architecture: RAG pipelines, multi-step agents, eval harnesses, workflow automation. Misleading as a blanket claim for all engineering work. The multiplier applies to complexity, not volume — an Applied AI Engineer builds things that would otherwise require a 3-person team, not things faster than a 1-person team.',
  },
  {
    id: 'claim-certification',
    claim: 'There is no certification — results are the only proof.',
    verdict: 'True for Now',
    analysis: 'Accurate as of early 2026. Deeplearning.ai courses and Anthropic certs exist but carry low signal. The only credible proof is shipped systems with measurable outcomes. This will change as the field matures. Right now: portfolio beats credentials every time.',
  },
];

export const seniorEngineerAdvantage = {
  title: 'Why Your Background Is an Advantage',
  points: [
    'You already understand retry logic, schema validation, and state management — the hard parts of reliable agent systems.',
    'Most people learning AI come from data science and struggle to ship production-quality software. You do not have that problem.',
    'Multi-agent systems are distributed systems where some nodes happen to be LLMs. You have built distributed systems.',
    '10+ years of debugging production failures means you will find agent failure modes faster than any new graduate.',
    'Your real-world projects (corp management, automotive, space) solve actual problems — which is exactly what builder-focused companies hire for.',
  ],
};
