// src/data/phases.ts
// The complete unified roadmap — 6 phases, 24 weeks, 11 projects.
// Synthesized from the reference roadmap + gap analysis.
// Edit content here freely. Never edit field names without updating types/index.ts.

import type { Phase } from '../types';

export const phases: Phase[] = [
  // ─────────────────────────────────────────────────────────────
  // PHASE 1 — Claude Mastery & Prompt Engineering (Weeks 1–4)
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    label: 'Phase 1',
    title: 'Claude Mastery & Prompt Engineering',
    weeks: 'Weeks 1–4',
    hoursPerWeek: '5–10 hrs/week',
    color: '#04CCFD',
    tagline: 'Become expert at working WITH Claude before building ON Claude.',
    goal: 'Master prompt engineering fundamentals and ship your first two AI-integrated projects.',
    why: 'You cannot build agents if you cannot reliably control model output. Prompt engineering is the foundation layer — the equivalent of knowing how to write a function before building a system. Most "AI engineers" skip this and ship inconsistent, fragile products.',
    skills: [
      {
        id: 'p1-prompt-structure',
        name: 'Prompt Architecture',
        details: [
          'Role + Context + Task + Constraint + Output Format — always all five, always explicit',
          'Positive framing over negative: "always return JSON" beats "don\'t return plain text"',
          'Chain-of-thought: add "think step by step before answering" on reasoning tasks',
          'XML tags for structured inputs: <context>, <examples>, <constraints>, <output_format>',
          'Few-shot examples: provide 2–3 labeled samples; order matters — best example last',
        ],
      },
      {
        id: 'p1-output-control',
        name: 'Output Control & Structured Extraction',
        details: [
          'JSON mode / structured outputs via tool_use or response_format parameter',
          'Enforce schema via Pydantic (Python) with retry-on-parse-failure loops',
          'Temperature tuning: 0 for deterministic/extraction tasks, 0.7–1.0 for creative',
          'Test Claude on your specific use cases: expense categorization, data extraction, code generation',
          'Build a personal prompt template library — reusable patterns save hours across projects',
        ],
      },
      {
        id: 'p1-api-fundamentals',
        name: 'Claude API Fundamentals',
        details: [
          'Install Anthropic Python SDK, configure API key securely via .env files',
          'Understand: Messages API, streaming with SSE, conversation history management',
          'API parameters: temperature, top_p, max_tokens — know what each does and when to tune',
          'Set up cost tracking from day one — token costs compound fast at scale',
          'Build reusable client wrapper: retry logic, rate limit handling, error logging',
        ],
      },
      {
        id: 'p1-hallucination',
        name: 'Hallucination Detection',
        details: [
          'Ask the model to cite sources or explicitly say "I don\'t know" when uncertain',
          'Self-consistency: run same prompt 3x, flag disagreements as low-confidence outputs',
          'Never trust model output for code logic without execution-level verification',
          'Cross-verify factual claims with a second model call or a retrieval step',
          'Know when NOT to use AI — deterministic problems need deterministic code',
        ],
      },
    ],
    projects: [
      {
        id: 'p1-receipt-manager',
        week: 'Week 3',
        name: 'Receipt Manager',
        language: 'Python',
        category: 'Corp',
        description: 'AI-powered expense tracker for your Canadian corporation. Accepts receipt images or text, extracts structured data with Claude, categorizes per Canadian tax rules, and exports to Wave Accounting CSV format.',
        features: [
          'CLI interface (Click) — process a single receipt or a batch folder',
          'Image and PDF input with OCR fallback for scanned receipts',
          'Claude extracts: merchant, date, amount, HST/GST, expense category',
          'Canadian categories: meals (50% deductible), vehicle, home office, software, professional fees',
          'CSV export matching Wave Accounting import format exactly',
          'JSON backup export for raw data retention',
          'Target: process receipts in under 5 seconds with >90% accuracy',
        ],
        successCriteria: [
          'Process 10+ real receipts from your corporation successfully',
          'CSV imports cleanly into Wave with correct Canadian categories',
          'Code on GitHub with README explaining the Canadian tax category logic',
        ],
      },
      {
        id: 'p1-space-tracker',
        week: 'Week 4',
        name: 'Space Mission Tracker',
        language: 'Python + TypeScript',
        category: 'Space',
        description: 'Real-time tracker for active lunar and Mars missions. Fetches live data from NASA and SpaceX APIs, uses Claude to generate natural language summaries and flag anomalies, and displays everything on a live React dashboard.',
        features: [
          'FastAPI backend: clients for NASA, SpaceX, ISS APIs — normalized data model across sources',
          'Claude integration: daily mission summaries in plain English',
          'Anomaly detection: flag telemetry values outside expected ranges',
          'React/TypeScript frontend: live dashboard with mission cards and AI summaries',
          'Covers: Artemis, Mars rovers (Perseverance/Curiosity), ISS position and crew',
          'Scheduled job: Claude summaries refresh daily automatically',
        ],
        successCriteria: [
          '3+ live data sources integrated and normalized into one schema',
          'Deployed dashboard with public URL (Railway backend + Vercel frontend)',
          'Claude summaries update on schedule and read naturally to a non-technical audience',
        ],
      },
    ],
    resources: [
      { label: 'Anthropic Prompt Engineering Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
      { label: 'Anthropic Python SDK', url: 'https://github.com/anthropics/anthropic-sdk-python' },
      { label: 'Claude API Reference', url: 'https://docs.anthropic.com/en/api/getting-started' },
      { label: 'Wave Accounting API', url: 'https://developer.waveapps.com/hc/en-us/categories/360001114072' },
      { label: 'NASA Open APIs', url: 'https://api.nasa.gov/' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PHASE 2 — Agentic Development & Claude Code (Weeks 5–8)
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    label: 'Phase 2',
    title: 'Agentic Development & Claude Code',
    weeks: 'Weeks 5–8',
    hoursPerWeek: '6–10 hrs/week',
    color: '#04CCFD',
    tagline: 'Stop writing code. Start delegating it.',
    goal: 'Master Claude Code as an agentic development platform and ship two projects where AI writes the majority of the code.',
    why: 'This is the mental model shift the LinkedIn post describes. An Applied AI Engineer uses AI to architect differently — not just autocomplete faster. Claude Code is the tool, but the real skill is decomposing tasks, writing effective CLAUDE.md briefs, and debugging agent failures. Your software background is an advantage: reliable systems thinking transfers directly.',
    skills: [
      {
        id: 'p2-claude-code',
        name: 'Claude Code Mastery',
        details: [
          'Install Claude Code (requires Node.js 18+), complete official onboarding project',
          'CLAUDE.md: the brief you write per project — context, constraints, file structure, conventions',
          'Plan Mode: review Claude\'s proposed plan before execution on any task touching 3+ files',
          'Slash commands and hooks: build reusable workflows that compound across sessions',
          'Self-improvement loop: update CLAUDE.md after every session with lessons learned',
          'Mental model shift: Claude Code is a compute scheduler, not a smarter autocomplete',
        ],
      },
      {
        id: 'p2-agentic-patterns',
        name: 'Agentic Patterns',
        details: [
          'ReAct loop: Reason → Act → Observe → Repeat — the core cycle of every agent',
          'Task decomposition: break complex goals into atomic, verifiable steps with explicit done conditions',
          'Error recovery: every step needs a fallback — agents fail silently without explicit retry logic',
          'Test-driven agentic development: write failing tests first, let Claude Code pass them',
          'Know when NOT to use agents: simple CRUD, deterministic transforms, anything a pure function handles',
        ],
      },
      {
        id: 'p2-go-basics',
        name: 'Go for CLI Tools',
        details: [
          'Go chosen for CLI: single distributable binary, no runtime dependency, fast startup',
          'Cobra or urfave/cli for CLI framework — Claude Code scaffolds the boilerplate',
          'SQLite for local data persistence — no server needed for personal tooling',
          'Go is an excellent Claude Code target: clear conventions, fast compile feedback loop',
          'Architecture is your job; Claude Code writes >70% of Go code — review and understand all of it',
        ],
      },
      {
        id: 'p2-debugging-agents',
        name: 'Debugging Agent Failures',
        details: [
          'Agents fail three ways: wrong tool chosen, wrong input passed, wrong output interpreted',
          'Add verbose logging at every tool call — silent agents are impossible to debug in production',
          'Hallucinated file paths and function names are the most common Claude Code failure mode',
          'Always verify agent output schema before trusting it downstream',
          'Document failure patterns in CLAUDE.md so they don\'t recur across sessions',
        ],
      },
    ],
    projects: [
      {
        id: 'p2-fleet-manager',
        week: 'Week 7',
        name: 'Fleet Manager CLI',
        language: 'Go',
        category: 'Automotive',
        description: 'Go CLI tool for managing your vehicle rental business — built primarily with Claude Code. Tracks vehicles, rentals, maintenance schedules, and income. You architect; Claude Code writes >70% of the code.',
        features: [
          'Vehicle CRUD: add, edit, delete vehicles with make/model/year/VIN/plate',
          'Rental tracking: customer, dates, mileage in/out, payment status',
          'Maintenance reminders: schedule by date or mileage, flag overdue items',
          'Financial reports: monthly/annual income, outstanding balances per vehicle',
          'SQLite storage with migration support for schema changes',
          'CSV export for Wave Accounting import',
        ],
        successCriteria: [
          'Fully functional CLI usable for your actual rental business',
          'Readable, tested, idiomatic Go code — passes go vet and golint',
          'Published on GitHub with demo GIF in README',
          'Document: what % was Claude Code generated vs manually written',
        ],
      },
      {
        id: 'p2-wave-assistant',
        week: 'Week 8',
        name: 'Wave Accounting Assistant',
        language: 'Python',
        category: 'Corp',
        description: 'Natural language interface to your Wave Accounting data. Ask "How much did I spend on software last quarter?" or "Show me unpaid invoices" and get accurate answers from the Wave API via Claude.',
        features: [
          'Wave API client wrapper with secure credential management via environment variables',
          'Natural language → Wave API query translation using Claude tool use',
          'Query types: expenses by category, invoice status, profit/loss, tax-ready summaries',
          'Canadian tax context built in: understands HST, deductible categories',
          'Query history with saved favourite queries',
          'Optional: simple React chat UI for non-terminal use',
        ],
        successCriteria: [
          'Natural language queries return accurate Wave data reliably across 20+ test questions',
          'Genuinely useful for day-to-day corp financial management',
          'No API keys in code or logs — passes a basic security review',
        ],
      },
    ],
    resources: [
      { label: 'Claude Code Documentation', url: 'https://docs.anthropic.com/en/docs/claude-code/overview' },
      { label: 'Claude Code Best Practices (Anthropic)', url: 'https://www.anthropic.com/engineering/claude-code-best-practices' },
      { label: 'Agentic Systems Overview', url: 'https://docs.anthropic.com/en/docs/build-with-claude/agents-and-tools/agents-overview' },
      { label: 'Cobra CLI Framework (Go)', url: 'https://cobra.dev/' },
      { label: 'Wave API Documentation', url: 'https://developer.waveapps.com/hc/en-us/categories/360001114072' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PHASE 3 — MCP Deep Dive (Weeks 9–12)
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    label: 'Phase 3',
    title: 'MCP Deep Dive',
    weeks: 'Weeks 9–12',
    hoursPerWeek: '6–10 hrs/week',
    color: '#04CCFD',
    tagline: 'Build custom integrations that extend Claude\'s reach into your world.',
    goal: 'Understand MCP architecture deeply, build two production-quality MCP servers, and publish both to the MCP registry.',
    why: 'MCP is becoming the standard protocol for connecting Claude to external systems. Having published MCP servers in the registry is tangible, searchable evidence of skill that most candidates won\'t have. Your Wise and Automotive servers connect to real systems you actually use — which means real security considerations, real edge cases, and real portfolio value.',
    skills: [
      {
        id: 'p3-mcp-architecture',
        name: 'MCP Architecture',
        details: [
          'Three components: Servers (expose tools/resources), Clients (Claude Desktop, Claude Code), Transports (stdio, SSE)',
          'Three primitives: Tools (functions Claude can call), Resources (data Claude can read), Prompts (reusable templates)',
          'Security model: MCP servers run locally by default — understand what trust boundaries that creates',
          'MCP vs function calling vs direct API: each has the right context — know which to reach for',
          'Start: build Hello World MCP server, test with Claude Desktop, study 3 existing servers on GitHub',
        ],
      },
      {
        id: 'p3-tool-design',
        name: 'Tool Design Patterns',
        details: [
          'Naming convention: verb_noun — get_balance, create_quote, query_vehicles, list_transactions',
          'Input schemas: explicit and strict — vague schemas produce hallucinated or wrong inputs from the model',
          'Error messages: return structured, model-readable errors — not stack traces',
          'Read-only by default: never expose write/delete tools without a deliberate security decision',
          'Audit logging: record every tool call with timestamp, inputs, and outputs',
        ],
      },
      {
        id: 'p3-security',
        name: 'MCP Security',
        details: [
          'Credentials via environment variables only — never hardcoded, never logged, never in error messages',
          'SQL injection prevention: parameterized queries only, read-only database user for all query tools',
          'Rate limiting: protect your upstream APIs from runaway agent loops',
          'Input validation and sanitization on all model-provided parameters before execution',
          'Principle of least privilege: request only the OAuth scopes your tools actually need',
        ],
      },
      {
        id: 'p3-publishing',
        name: 'Publishing & Open Source Practices',
        details: [
          'MCP registry submission requires: comprehensive README, setup guide, usage examples, tests',
          'Demo video: 2–3 minutes showing the server working end-to-end with Claude Desktop',
          'Unit tests for each tool, integration tests for error scenarios, performance benchmarks',
          'Announcement: share in Anthropic Discord #mcp with a specific finding or lesson — not just a link',
          'Blog post: "Building MCP Servers: Lessons Learned" — your first technical writing deliverable',
        ],
      },
    ],
    projects: [
      {
        id: 'p3-wise-mcp',
        week: 'Week 10',
        name: 'Wise MCP Server',
        language: 'Python',
        category: 'Corp',
        description: 'MCP server connecting Claude to your Wise account. Query balances, transaction history, and exchange rates through natural conversation with Claude Desktop. Read-only with full audit logging.',
        features: [
          'get_balances — all currency balances across your Wise accounts',
          'get_transactions — history with date range, currency, and type filters',
          'get_quote — transfer quote between currencies with full fee breakdown',
          'get_exchange_rate — current and historical rates for any currency pair',
          'Structured error handling with model-readable error messages',
          'Full audit log: every tool call recorded with timestamp, inputs, and result',
        ],
        successCriteria: [
          'All four tools working against the live Wise API',
          'Passes a basic security checklist: no hardcoded creds, no secrets in logs',
          'Submitted to MCP registry with full documentation',
          'Demo video showing natural language financial queries working in Claude Desktop',
        ],
      },
      {
        id: 'p3-automotive-mcp',
        week: 'Week 11',
        name: 'Automotive Database MCP',
        language: 'Go',
        category: 'Automotive',
        description: 'High-performance Go MCP server exposing your Fleet Manager database to Claude. Natural language queries about vehicles, rentals, maintenance, and revenue — all answered from your actual data in real time.',
        features: [
          'query_vehicles — search and filter fleet with natural language predicates',
          'get_rental_status — active rentals and upcoming returns',
          'maintenance_due — vehicles overdue or upcoming for service',
          'revenue_report — income by vehicle, time period, or customer',
          'Sub-100ms query response with connection pooling',
          'SQL injection prevention: parameterized queries, read-only Postgres user',
        ],
        successCriteria: [
          'Sub-100ms p95 query latency — document how you measured this',
          'Zero SQL injection vulnerabilities — document your prevention approach',
          'Natural language → SQL reliable across 20+ test queries',
          'Published on GitHub with benchmark results in README',
        ],
      },
    ],
    resources: [
      { label: 'MCP Specification', url: 'https://modelcontextprotocol.io' },
      { label: 'MCP Python SDK', url: 'https://github.com/modelcontextprotocol/python-sdk' },
      { label: 'MCP Server Registry', url: 'https://github.com/modelcontextprotocol/servers' },
      { label: 'Wise API Documentation', url: 'https://docs.wise.com/api-docs/api-reference' },
      { label: 'Anthropic Discord #mcp', url: 'https://discord.gg/anthropic' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PHASE 4 — RAG & Vector Databases (Weeks 13–16)
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    label: 'Phase 4',
    title: 'RAG & Vector Databases',
    weeks: 'Weeks 13–16',
    hoursPerWeek: '6–10 hrs/week',
    color: '#04CCFD',
    tagline: 'Build systems that augment Claude with knowledge it couldn\'t have otherwise.',
    goal: 'Understand embeddings and retrieval deeply, build a production RAG system over real business documents, and establish a repeatable eval framework.',
    why: 'RAG is the practical alternative to fine-tuning for most business use cases — it lets Claude answer questions about your specific data without retraining. Getting retrieval quality right is the hard part that separates production systems from demos. You will build over your actual corporation documents, giving the system real utility from day one.',
    skills: [
      {
        id: 'p4-embeddings',
        name: 'Embeddings & Semantic Search',
        details: [
          'Embeddings: dense vectors where semantic similarity maps to geometric proximity',
          'Models to compare: OpenAI text-embedding-3-small, Cohere Embed v3, Voyage AI — quality vs cost',
          'Distance metrics: cosine similarity for normalized vectors, dot product, Euclidean — when to use each',
          'Keyword vs semantic search: semantic wins on meaning, keyword wins on exact terms — hybrid beats both',
          'Hands-on: embed sample corp docs, visualize clusters, build intuition for what "similar" means numerically',
        ],
      },
      {
        id: 'p4-chunking',
        name: 'Chunking Strategies',
        details: [
          'Fixed-size chunks: simple and predictable but loses sentence coherence at boundaries',
          'Sentence-based: respects natural language structure — better for prose documents',
          'Semantic chunking: groups by meaning shift — best quality, most compute-intensive',
          'Overlapping windows: include N tokens from prior chunk to preserve cross-boundary context',
          'Document-type-aware: contracts chunk differently than receipts, which chunk differently than emails',
        ],
      },
      {
        id: 'p4-retrieval',
        name: 'Retrieval Pipeline & Reranking',
        details: [
          'pgvector first: you already run Postgres — add vector search without a new service',
          'Hybrid search: BM25 keyword + vector semantic combined consistently outperforms either alone',
          'Cohere Rerank: re-scores top-K retrieval hits before sending to LLM — measurable quality jump',
          'Context assembly: how you format retrieved chunks in the prompt affects answer quality significantly',
          'Citation tracking: record which chunk each answer draws from — required for business trust',
        ],
      },
      {
        id: 'p4-evals',
        name: 'RAG Evaluation',
        details: [
          'Golden dataset: 20–30 questions with ground-truth answers drawn from your real corp documents',
          'Retrieval metrics: MRR, NDCG, Precision@K — measure whether the right document is retrieved',
          'Answer quality: LLM-as-judge using a second Claude call to score accuracy and groundedness',
          'A/B testing: different chunking strategies, embedding models, reranking — document every experiment',
          'Cost per query: track token usage and latency per query from the first day of production',
        ],
      },
    ],
    projects: [
      {
        id: 'p4-corp-knowledge-base',
        week: 'Weeks 14–15',
        name: 'Corp Knowledge Base',
        language: 'Python + TypeScript',
        category: 'Corp',
        description: 'RAG system over your actual corporation documents — contracts, invoices, receipts, emails, notes. Natural language search returns accurate, cited answers from your real business data.',
        features: [
          'Ingestion pipeline: PDF, DOCX, TXT, email exports with OCR for scanned receipts',
          'Metadata extraction: document type, date, counterparty, amounts where present',
          'Document-type-aware chunking strategy',
          'pgvector storage — uses your existing Postgres instance',
          'Hybrid search: keyword + semantic with Cohere Rerank on top results',
          'Claude generates answers with citations linking directly to source documents',
          'React frontend: search UI with source highlighting and follow-up question support',
          'Search history, saved queries, result export to CSV',
          'Target: <1s search latency, >85% retrieval accuracy on golden test set',
        ],
        successCriteria: [
          '100+ real corp documents indexed and searchable',
          '>85% retrieval accuracy on a 20-query golden dataset',
          'Every answer includes citations to source documents',
          'Web UI deployed and demo-ready with a public URL',
        ],
      },
    ],
    resources: [
      { label: 'pgvector (Postgres Extension)', url: 'https://github.com/pgvector/pgvector' },
      { label: 'Cohere Embed + Rerank Docs', url: 'https://docs.cohere.com/docs/retrieval-augmented-generation-rag' },
      { label: 'Anthropic RAG Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/retrieval-augmented-generation' },
      { label: 'Hamel Husain on LLM Evals', url: 'https://hamel.dev' },
      { label: 'LangChain Text Splitters', url: 'https://python.langchain.com/docs/concepts/text_splitters/' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PHASE 5 — Multi-Agent Systems (Weeks 17–20)
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    label: 'Phase 5',
    title: 'Multi-Agent Systems',
    weeks: 'Weeks 17–20',
    hoursPerWeek: '7–12 hrs/week',
    color: '#04CCFD',
    tagline: 'Build systems where agents collaborate — not just systems that call an API.',
    goal: 'Design and ship a production multi-agent system that automates real financial workflows for your corporation.',
    why: 'This is the actual gap the LinkedIn post describes — and your engineering background is a direct advantage. Most people learning AI can\'t build reliable systems. You already understand retry logic, state management, schema validation, and production failure modes. Multi-agent systems are distributed systems where some nodes happen to be LLMs. Apply what you already know.',
    skills: [
      {
        id: 'p5-agent-architecture',
        name: 'Agent Architecture Patterns',
        details: [
          'ReAct loop: Reason → Act → Observe → Repeat — the foundation of every agent',
          'Plan-and-execute: separate planning pass from execution — better for complex multi-step tasks',
          'Reflection agents: self-critique step before final output reduces errors measurably',
          'Orchestrator-worker: one planning agent delegates to specialized execution subagents',
          'Every agent needs an explicit done condition — without one, agents loop indefinitely',
        ],
      },
      {
        id: 'p5-orchestration',
        name: 'Multi-Agent Orchestration',
        details: [
          'Prefer explicit message passing over shared mutable state — far easier to debug',
          'Orchestrator maintains a registry of available agents and their declared capabilities',
          'Task routing: orchestrator decides which agent handles which subtask based on capabilities',
          'Critic/validator agent reviews outputs before they pass downstream — catches errors early',
          'Human-in-the-loop checkpoints before any destructive action: financial writes, sends, deletes',
        ],
      },
      {
        id: 'p5-state',
        name: 'State & Error Management',
        details: [
          'Persist intermediate results to Postgres — never rely on context window alone for multi-step state',
          'Treat every agent step as a transaction: succeed completely or roll back cleanly',
          'Dead letter queue: failed tasks go to a queue for human review, not silent discard',
          'Parallel execution where tasks are independent — reduces end-to-end latency significantly',
          'Cost tracking per workflow run: log tokens per agent call, alert on expensive outliers',
        ],
      },
      {
        id: 'p5-evaluation',
        name: 'Agent System Evaluation',
        details: [
          'Task completion rate: % of workflows completing without human intervention',
          'Cost per workflow: average token spend per end-to-end run — track this from day one',
          'Error recovery rate: % of failures that self-recover vs require human escalation',
          'Latency: p50 and p95 end-to-end completion time per workflow type',
          'Test each agent individually before testing the full orchestrated system',
        ],
      },
    ],
    projects: [
      {
        id: 'p5-business-automation',
        week: 'Weeks 18–19',
        name: 'Business Automation System',
        language: 'Python',
        category: 'Corp',
        description: 'Multi-agent system automating financial operations for your Canadian corporation. Four specialized agents coordinated by an orchestrator — the system integrates everything built in Phases 1–4.',
        features: [
          'Receipt Agent: process receipts → categorize → stage for Wave update (extends Phase 1 project)',
          'Invoice Agent: generate invoices from time logs, track status, send payment reminders via email',
          'Compliance Agent: monitor Canadian tax deadlines, HST remittance dates, filing requirements',
          'Finance Agent: cash flow analysis, quarterly P&L reports, expense summaries by category',
          'Orchestrator: coordinates agents, routes tasks, manages Postgres state, aggregates results',
          'Human-in-the-loop checkpoint before any write to Wave — AI investigates, human approves',
          'Dashboard: workflow run history, agent status, pending human reviews, cost per run',
        ],
        successCriteria: [
          'All 4 agents individually tested and operational',
          'Orchestrator coordinates at least one complete end-to-end workflow',
          'Zero silent failures — every error is logged and routed appropriately',
          'Demo-ready: one complete workflow visible in the dashboard with real data',
        ],
      },
    ],
    resources: [
      { label: 'Anthropic Multi-Agent Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/agents-and-tools/agents-overview' },
      { label: 'LangGraph (Stateful Agents)', url: 'https://langchain-ai.github.io/langgraph/' },
      { label: 'AI Engineer World\'s Fair Talks', url: 'https://www.youtube.com/@AIEngineerWorldsFair' },
      { label: 'Latent Space Podcast', url: 'https://www.latent.space/podcast' },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PHASE 6 — Portfolio & Capstone (Weeks 21–24)
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    label: 'Phase 6',
    title: 'Portfolio & Capstone',
    weeks: 'Weeks 21–24',
    hoursPerWeek: '10–15 hrs/week',
    color: '#04CCFD',
    tagline: 'Make your skills undeniable. Show, don\'t tell.',
    goal: 'Package everything into a portfolio that speaks for itself: live projects, a professional site, published MCP servers, technical writing, and active applications to target companies.',
    why: 'The LinkedIn post is right — there is no certification yet. The only credible signal is shipped systems. Your non-FAANG, non-Ivy background is not a liability if your GitHub shows 11 production-quality projects solving real problems. Twilio, Airbnb, GitHub, GitLab, and Planet hire builders. After 6 months, that is exactly what you are.',
    skills: [
      {
        id: 'p6-portfolio',
        name: 'Portfolio Construction',
        details: [
          'Every GitHub repo needs: problem → architecture decisions → tradeoffs → measured results',
          'Include eval numbers: "retrieval accuracy went from 61% to 84% after adding Cohere Rerank"',
          'Document what FAILED and why — this signals senior thinking more than success stories alone',
          'Architecture diagrams for the three most complex projects: Knowledge Base, Automation, Capstone',
          'Demo GIFs in every README — reduces reviewer activation energy by orders of magnitude',
        ],
      },
      {
        id: 'p6-interviews',
        name: 'Interview Preparation',
        details: [
          'Whiteboard an agent architecture cold from a one-sentence prompt — practice timed with a peer',
          'Know your tradeoffs: RAG vs fine-tuning, LangGraph vs raw SDK, MCP vs function calling',
          'Failure modes on command: hallucination, tool misuse, infinite loops, prompt injection',
          'Quantify everything: "~$0.003/run at 2.4s p95 latency, 84% retrieval accuracy"',
          'Implement a tool-use loop cold in <20 minutes, a minimal RAG pipeline in <30 minutes',
        ],
      },
      {
        id: 'p6-writing',
        name: 'Technical Writing',
        details: [
          'Post 1: "Building MCP Servers: What the Docs Don\'t Tell You" — lessons from Wise + Automotive MCPs',
          'Post 2: "RAG in Production: What Actually Improves Retrieval Quality" — your A/B test results',
          'Post 3: "Multi-Agent Systems for Business Automation: Architecture and Real Tradeoffs"',
          '5-minute Loom: architecture → live demo → lessons learned for your strongest project',
          'Technical writing separates you from 90% of candidates who only have code on GitHub',
        ],
      },
      {
        id: 'p6-network',
        name: 'Community & Job Search',
        details: [
          'Anthropic Discord #mcp: share a specific finding from your MCP builds — link your repo, not just the registry',
          'Submit both MCP servers to the official registry with full documentation and demo videos',
          'LinkedIn: update to AI-focused profile, post a short summary for each blog post published',
          'Target companies: Twilio (AI Platform), Airbnb (ML Infra), GitHub (Copilot), GitLab (ModelOps), Planet (Geospatial ML)',
          'Apply to 10+ roles — personalize each application with the most relevant project from your portfolio',
        ],
      },
    ],
    projects: [
      {
        id: 'p6-portfolio-site',
        week: 'Week 21',
        name: 'Portfolio Website',
        language: 'TypeScript',
        category: 'Portfolio',
        description: 'Professional portfolio site showcasing all 10 projects with live demos, architecture write-ups, and a technical blog. Built with Next.js, deployed to Vercel.',
        features: [
          'Next.js + TypeScript — fast, SEO-friendly, easy to extend',
          'Project gallery: each project with GitHub link, live demo URL, and one-paragraph architecture summary',
          'Blog section: 3 technical posts published directly on the site',
          'About page: background, language strategy (Python/TS/Go), and target companies',
          'Mobile-responsive with fast load times (<2s LCP)',
          'Architecture diagrams for the three most complex projects',
          'Demo GIFs or embedded Loom walkthroughs per project',
        ],
        successCriteria: [
          'Live at zuzah.github.io or custom domain',
          'All 10 prior projects documented with demo links that work',
          '3 blog posts published and indexed',
          'Passes Core Web Vitals on mobile and desktop',
        ],
      },
      {
        id: 'p6-capstone',
        week: 'Weeks 22–23',
        name: 'Capstone: AI Rental Management Platform',
        language: 'Python + TypeScript',
        category: 'Automotive',
        description: 'Full-stack production platform integrating everything from all 5 phases: multi-agent backend, RAG over vehicle history, MCP integrations, and a professional Next.js frontend. Your strongest interview demo piece.',
        features: [
          'Next.js frontend: fleet dashboard, rental management, financial overview with real data',
          'FastAPI backend: multi-agent orchestration from Phase 5 powering all operations',
          'RAG: natural language queries over vehicle service history, rental records, customer notes',
          'MCP integration: Automotive DB MCP from Phase 3 wired directly into the backend',
          'Multi-agent operations: availability checking, pricing, booking, invoice generation',
          'AI anomaly detection: flag unusual rental patterns or overdue maintenance',
          'Production deployment: Railway (backend) + Vercel (frontend)',
          'Monitoring: latency, token cost per operation, error rate — all visible in an admin dashboard',
        ],
        successCriteria: [
          'Fully deployed with a public URL — demonstrable in an interview without setup',
          'All major workflows end-to-end with real data from your rental business',
          'Code quality matches what you would submit as a work sample at a job',
          'README with architecture diagram, deployment guide, and cost/performance benchmarks',
          'Demo video: 5-minute walkthrough covering architecture decisions and live functionality',
        ],
      },
    ],
    resources: [
      { label: 'Chip Huyen\'s AI Engineering Blog', url: 'https://huyenchip.com/blog/' },
      { label: 'Simon Willison\'s Weblog', url: 'https://simonwillison.net' },
      { label: 'Next.js Documentation', url: 'https://nextjs.org/docs' },
      { label: 'MCP Registry Submission Guide', url: 'https://github.com/modelcontextprotocol/servers' },
      { label: 'Vercel Deployment Docs', url: 'https://vercel.com/docs' },
    ],
  },
];
