// src/data/phases.ts — Iteration 6
// 6 phases · 24 weeks · ordered tasks per week
// Task IDs (w1-t1 … w24-t6) are localStorage keys — never rename them.

import type { Phase } from '../types';

export const phases: Phase[] = [

  // ─────────────────────────────────────────────────────────────
  // PHASE 1 — Claude Mastery & Prompt Engineering (Weeks 1–4)
  // ─────────────────────────────────────────────────────────────
  {
    id: 1,
    label: 'Phase 1',
    title: 'Claude Mastery & Prompt Engineering',
    weekRange: 'Weeks 1–4',
    color: '#04CCFD',
    tagline: 'Become expert at working WITH Claude before building ON Claude.',
    goal: 'Master prompt engineering fundamentals and ship your first two AI-integrated projects.',
    why: 'You cannot build reliable agents if you cannot reliably control model output. Prompt engineering is the foundation — the equivalent of knowing how to write a function before building a system. Most "AI engineers" skip this phase and ship inconsistent, fragile products.',
    weeks: [
      {
        id: 'w1', weekNumber: 1, phaseId: 1,
        title: 'Prompt Engineering Fundamentals',
        objective: 'Structure prompts that produce consistent, reliable output from Claude on any task.',
        hoursEstimate: '5–7 hours',
        tasks: [
          {
            id: 'w1-t1', type: 'setup', required: true,
            title: 'Set up your Anthropic account and explore Claude.ai',
            description: 'Create your account if you haven\'t. Spend 20 minutes in Claude.ai — try free-form questions, code generation, and document analysis. Get a feel for how it responds before you start engineering prompts.',
            estimatedMinutes: 30,
          },
          {
            id: 'w1-t2', type: 'read', required: true,
            title: 'Complete the Anthropic Prompt Engineering Guide',
            description: 'Read end-to-end. Focus on: XML tags for structured input, chain-of-thought prompting, and the role/context/task/constraint/format pattern. Take notes — you will use these patterns every week.',
            estimatedMinutes: 120,
            resource: { label: 'Anthropic Prompt Engineering Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview' },
            notes: [
              {
                lessonTitle: 'Define Success Criteria & Build Evaluations',
                source: { label: 'Develop Tests — Anthropic Docs', url: 'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests' },
                keyTakeaway: 'A prompt without an eval is a feature without a test.',
                pipelineLabel: 'The Pipeline to Remember',
                pipeline: [
                  'Write Prompt',
                  'Define Success Criteria',
                  'Build Evals',
                  'Run + Grade',
                  'Iterate',
                ],
                points: [
                  {
                    title: 'Define Success BEFORE you prompt',
                    bullets: [
                      'Success criteria must be Specific + Measurable = Testable',
                      'Bad: "Give good summaries"',
                      'Good: "Summaries under 100 words, score ≥ 4/5 on relevance"',
                    ],
                  },
                  {
                    title: 'Build Evals Like You Build Tests — 3 grading methods',
                    bullets: [
                      'Code-based (exact/string match) → for deterministic outputs → like unit tests',
                      'LLM-based grading → for nuanced judgement (tone, relevance)',
                      'Human grading → last resort only, does not scale',
                      'Rule: More automated tests at 80% accuracy > fewer human-graded tests',
                    ],
                  },
                  {
                    title: 'The Grading Rubric Trick (for LLM-graded evals)',
                    bullets: [
                      'Force binary or scalar output from your grader LLM',
                      'Bad rubric: "Grade whether the answer is safe"',
                      'Good rubric: "Output only \'correct\' or \'incorrect\'. Incorrect if any PII detected."',
                    ],
                  },
                ],
                flashcard: {
                  question: 'How do you evaluate the quality of a prompt?',
                  answer: 'Define measurable success criteria first — accuracy rate, latency, format compliance — then build automated evals against a test set. Use string matching for simple outputs, LLM-based grading with a strict rubric for nuanced outputs. The goal is a repeatable, scalable feedback loop — same as CI for regular code.',
                },
              },
            ],
          },
          {
            id: 'w1-t3', type: 'watch', required: true,
            title: 'Complete the DeepLearning.AI "Prompt Engineering with Claude" course',
            description: 'Free 1-hour course by Andrew Ng with hands-on code examples. Do every exercise — don\'t just watch. This is the fastest path from reading about prompting to actually doing it.',
            estimatedMinutes: 90,
            resource: { label: 'DeepLearning.AI Short Course', url: 'https://www.deeplearning.ai/short-courses/prompt-engineering-with-claude/' },
          },
          {
            id: 'w1-t4', type: 'practice', required: true,
            title: 'Experiment with 5 prompting techniques in Claude.ai',
            description: 'Manually test each technique on your own use cases: (1) chain-of-thought, (2) few-shot with 3 examples, (3) XML tags for structure, (4) role prompting, (5) explicit output format constraints. For each, compare output with and without the technique.',
            estimatedMinutes: 90,
          },
          {
            id: 'w1-t5', type: 'build', required: true,
            title: 'Create your personal prompt template library repo',
            description: 'Create a new GitHub repo "prompt-library". Add a prompts/ folder with at least 5 markdown files — one per technique tested. Each file: template, when to use it, example input, example output. You will add to this every week.',
            estimatedMinutes: 60,
          },
          {
            id: 'w1-t6', type: 'read', required: false,
            title: 'Read the Brex Prompt Engineering Handbook',
            description: 'Battle-tested internal prompt guide from a fintech engineering team. Read in full — it\'s practical, not theoretical. Note patterns relevant to business/financial use cases.',
            estimatedMinutes: 45,
            resource: { label: 'Brex Prompt Engineering Handbook', url: 'https://github.com/brexhq/prompt-engineering' },
          },
        ],
      },
      {
        id: 'w2', weekNumber: 2, phaseId: 1,
        title: 'Claude API — First Integration',
        objective: 'Make API calls, handle streaming, manage conversation state, and track costs programmatically.',
        hoursEstimate: '5–7 hours',
        tasks: [
          {
            id: 'w2-t1', type: 'setup', required: true,
            title: 'Install the Anthropic Python SDK and configure your API key',
            description: 'pip install anthropic. Create a .env file for your API key — never hardcode it. Set up python-dotenv. Verify with one test call against the quickstart.',
            estimatedMinutes: 30,
            resource: { label: 'Anthropic Python SDK', url: 'https://github.com/anthropics/anthropic-sdk-python' },
          },
          {
            id: 'w2-t2', type: 'read', required: true,
            title: 'Read the Claude API reference documentation',
            description: 'Read thoroughly: Messages API, model options, and every parameter (temperature, top_p, max_tokens, stop sequences). Understand what each does and when to tune it. Take an hour — do not skim.',
            estimatedMinutes: 60,
            resource: { label: 'Claude API Reference', url: 'https://docs.anthropic.com/en/api/getting-started' },
          },
          {
            id: 'w2-t3', type: 'build', required: true,
            title: 'Build a streaming response script',
            description: 'Write a Python script: takes a user prompt, calls Claude with streaming enabled, prints tokens as they arrive, and prints total token counts + estimated cost at the end. Commit under examples/ in your prompt-library repo.',
            estimatedMinutes: 45,
          },
          {
            id: 'w2-t4', type: 'build', required: true,
            title: 'Build a multi-turn conversation script',
            description: 'Write a Python script that maintains a conversation history array across turns. Add a --max-turns flag and "cost so far" after each turn. This is the foundation of every chatbot you will build.',
            estimatedMinutes: 45,
          },
          {
            id: 'w2-t5', type: 'build', required: true,
            title: 'Build a reusable ClaudeClient wrapper class',
            description: 'Refactor your scripts into a ClaudeClient class: exponential backoff retry on rate limits, configurable model and temperature, token usage tracking, structured error handling. Copy-paste this into every Python project in the roadmap.',
            estimatedMinutes: 60,
          },
          {
            id: 'w2-t6', type: 'practice', required: true,
            title: 'Test Claude on 3 of your actual business use cases',
            description: 'Run real experiments: (1) extract structured data from a receipt description, (2) categorize expenses from free-text, (3) generate a client email from bullet points. Document which prompting technique worked best for each case.',
            estimatedMinutes: 60,
          },
        ],
      },
      {
        id: 'w3', weekNumber: 3, phaseId: 1,
        title: 'Project 1 — Receipt Manager',
        objective: 'Ship a CLI tool that processes your corp receipts and exports categorized data to Wave Accounting.',
        hoursEstimate: '7–10 hours',
        tasks: [
          {
            id: 'w3-t1', type: 'setup', required: true,
            title: 'Scaffold the Receipt Manager project',
            description: 'Create repo "receipt-manager". Set up Python with: Click for CLI, python-dotenv, Pillow + pytesseract for OCR, PyMuPDF for PDFs, anthropic SDK. Folder structure: src/receipt_manager/ with cli.py, extractor.py, categorizer.py, exporter.py.',
            estimatedMinutes: 30,
          },
          {
            id: 'w3-t2', type: 'build', required: true,
            title: 'Build the receipt input handler with OCR',
            description: 'Write extractor.py: accept image (JPG/PNG) or PDF input, run pytesseract on images, PyMuPDF for PDFs, normalize extracted text. Test on 3 of your own receipts — OCR output will be messy, Claude cleans it in the next step.',
            estimatedMinutes: 90,
          },
          {
            id: 'w3-t3', type: 'build', required: true,
            title: 'Build the Claude extraction prompt with Pydantic validation',
            description: 'Write categorizer.py: prompt that takes raw OCR text and extracts structured JSON — merchant name, date, subtotal, tax, total, currency. Use Pydantic to validate output. Add retry logic for JSON parse failures. Target >90% accuracy on clear receipts.',
            estimatedMinutes: 90,
          },
          {
            id: 'w3-t4', type: 'build', required: true,
            title: 'Build the Canadian tax categorizer',
            description: 'Add Canadian business expense classification: meals & entertainment (50% deductible), vehicle, home office, software/subscriptions, professional fees, office supplies, travel. Prompt Claude to assign category and deductibility %. Test on one receipt from each category.',
            estimatedMinutes: 60,
          },
          {
            id: 'w3-t5', type: 'build', required: true,
            title: 'Build the Wave CSV exporter and CLI',
            description: 'Write exporter.py: transform categorized data into Wave\'s CSV import format. Wire the Click CLI: `receipt-manager process invoice.pdf` and `receipt-manager batch ./receipts/`. Test the CSV import in your actual Wave account.',
            estimatedMinutes: 60,
          },
          {
            id: 'w3-t6', type: 'practice', required: true,
            title: 'Process 10+ real receipts and measure accuracy',
            description: 'Run your actual corporate receipts through the tool. Count: how many extracted correctly vs needed manual correction? Import the CSV into Wave. Document accuracy rate in the README — this is your portfolio benchmark.',
            estimatedMinutes: 60,
          },
          {
            id: 'w3-t7', type: 'write', required: true,
            title: 'Write the README with Canadian tax logic and accuracy benchmarks',
            description: 'Write it as if a hiring manager will read it: what it does, setup, usage, supported expense categories with deductibility rules, measured accuracy on real receipts. This is a portfolio piece.',
            estimatedMinutes: 30,
          },
        ],
      },
      {
        id: 'w4', weekNumber: 4, phaseId: 1,
        title: 'Project 2 — Space Mission Tracker',
        objective: 'Ship a live deployed dashboard tracking real space missions with AI-generated daily summaries.',
        hoursEstimate: '7–10 hours',
        tasks: [
          {
            id: 'w4-t1', type: 'setup', required: true,
            title: 'Scaffold FastAPI backend and React/TypeScript frontend',
            description: 'Create repo "space-mission-tracker". Backend: FastAPI + uvicorn + httpx + anthropic + APScheduler. Frontend: Vite + React + TypeScript. Set up CORS. Verify both run locally with a /health endpoint.',
            estimatedMinutes: 45,
          },
          {
            id: 'w4-t2', type: 'build', required: true,
            title: 'Build API clients for NASA, SpaceX, and ISS',
            description: 'Three async httpx clients: NASA APOD + Mars Rover, SpaceX launches + Starship, ISS position + crew. Normalize all three into a shared MissionData schema. Handle API errors — these APIs go down.',
            estimatedMinutes: 120,
            resource: { label: 'NASA Open APIs', url: 'https://api.nasa.gov/' },
          },
          {
            id: 'w4-t3', type: 'build', required: true,
            title: 'Build Claude daily summary generation with caching',
            description: 'Prompt Claude to generate a plain-English daily summary of each mission — audience is an intelligent non-expert. Schedule with APScheduler. Cache results in Redis or a simple file cache to avoid redundant API calls.',
            estimatedMinutes: 60,
          },
          {
            id: 'w4-t4', type: 'build', required: true,
            title: 'Build the React dashboard',
            description: 'Mission cards with live telemetry, AI summary panel, ISS position display, last-updated timestamps. Call your FastAPI endpoints. Clean layout — no UI library needed. This is a portfolio piece.',
            estimatedMinutes: 90,
          },
          {
            id: 'w4-t5', type: 'setup', required: true,
            title: 'Deploy backend to Railway, frontend to Vercel',
            description: 'Deploy FastAPI to Railway (free tier). Deploy React to Vercel. Wire the frontend to the Railway URL. Verify live site shows real mission data. Get a working public URL to link from your portfolio.',
            estimatedMinutes: 45,
            resource: { label: 'Railway', url: 'https://railway.app/' },
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PHASE 2 — Agentic Development & Claude Code (Weeks 5–8)
  // ─────────────────────────────────────────────────────────────
  {
    id: 2,
    label: 'Phase 2',
    title: 'Agentic Development & Claude Code',
    weekRange: 'Weeks 5–8',
    color: '#04CCFD',
    tagline: 'Stop writing code. Start delegating it.',
    goal: 'Master Claude Code as an agentic development platform and ship two projects where AI writes >70% of the implementation.',
    why: 'This is the mental model shift that separates AI dabblers from Applied AI Engineers. Claude Code is not smarter autocomplete — it is a compute scheduler. Your job becomes architecture, task decomposition, and quality review. Your Go projects this phase are built with Claude Code doing the heavy lifting.',
    weeks: [
      {
        id: 'w5', weekNumber: 5, phaseId: 2,
        title: 'Claude Code — Installation & First Delegation',
        objective: 'Be comfortable delegating real coding tasks to Claude Code and know when to use it vs write manually.',
        hoursEstimate: '6–8 hours',
        tasks: [
          {
            id: 'w5-t1', type: 'setup', required: true,
            title: 'Install Claude Code and verify setup',
            description: 'npm install -g @anthropic-ai/claude-code (requires Node 18+). Authenticate with your Anthropic API key. Run `claude` in a test directory and verify it responds. Read the installation docs if anything fails.',
            estimatedMinutes: 30,
            resource: { label: 'Claude Code Docs', url: 'https://docs.anthropic.com/en/docs/claude-code/overview' },
          },
          {
            id: 'w5-t2', type: 'read', required: true,
            title: 'Read the Claude Code documentation end-to-end',
            description: 'Read in full — do not skim. Focus on: CLAUDE.md (project briefs), Plan Mode (always use before big tasks), slash commands, hooks, and subagents. These are the features that separate basic from expert usage.',
            estimatedMinutes: 90,
          },
          {
            id: 'w5-t3', type: 'practice', required: true,
            title: 'Try 5 tasks on your existing projects',
            description: 'Open receipt-manager or space-mission-tracker in Claude Code. Try: (1) generate a missing unit test, (2) fix a bug you\'ve been ignoring, (3) add input validation, (4) refactor a messy function, (5) generate docstrings for all functions. Note what worked and what didn\'t.',
            estimatedMinutes: 90,
          },
          {
            id: 'w5-t4', type: 'write', required: true,
            title: 'Write your first CLAUDE.md for an existing project',
            description: 'Write a CLAUDE.md for receipt-manager: project purpose, tech stack, folder structure, coding conventions, what NOT to do, common tasks. Test it — does Claude Code behave differently with vs without it?',
            estimatedMinutes: 45,
          },
          {
            id: 'w5-t5', type: 'read', required: true,
            title: 'Read the Anthropic Claude Code best practices post',
            description: 'Written by the people who built it. Covers the self-improvement loop, subagents, and thinking about Claude Code as a compute scheduler rather than a smarter IDE assistant.',
            estimatedMinutes: 45,
            resource: { label: 'Claude Code Best Practices', url: 'https://www.anthropic.com/engineering/claude-code-best-practices' },
          },
        ],
      },
      {
        id: 'w6', weekNumber: 6, phaseId: 2,
        title: 'Agentic Patterns — Deep Dive',
        objective: 'Understand ReAct, tool use, and where agentic approaches fail — with hands-on experiments.',
        hoursEstimate: '5–7 hours',
        tasks: [
          {
            id: 'w6-t1', type: 'read', required: true,
            title: 'Read the Anthropic agentic systems guide',
            description: 'Read in full. Focus on: agent architectures (ReAct, orchestrator-worker), when to use agents vs deterministic code, and how to handle failures gracefully. Required reading before building any multi-step agent.',
            estimatedMinutes: 60,
            resource: { label: 'Agents Overview', url: 'https://docs.anthropic.com/en/docs/build-with-claude/agents-and-tools/agents-overview' },
          },
          {
            id: 'w6-t2', type: 'practice', required: true,
            title: 'Experiment: TDD with Claude Code',
            description: 'Pick any new utility function you need. Write the tests first (manually or by describing them to Claude Code). Then let Claude Code implement the function to pass the tests. Does TDD constrain Claude Code into better output? Document your finding.',
            estimatedMinutes: 60,
          },
          {
            id: 'w6-t3', type: 'practice', required: true,
            title: 'Experiment: Generate a typed API client from an OpenAPI spec',
            description: 'Find a public OpenAPI spec (Stripe, GitHub, etc). Feed it to Claude Code and ask it to generate a typed Python client. Review for correctness, error handling, and code quality. High-value use case — understand it well.',
            estimatedMinutes: 60,
          },
          {
            id: 'w6-t4', type: 'write', required: true,
            title: 'Document your personal Claude Code best practices guide',
            description: 'Write a markdown file: (1) 5 tasks where Claude Code excels, (2) 5 tasks needing supervision, (3) your CLAUDE.md template, (4) how you structure delegation. Add to your prompt-library repo. Update it weekly.',
            estimatedMinutes: 45,
          },
        ],
      },
      {
        id: 'w7', weekNumber: 7, phaseId: 2,
        title: 'Project 3 — Fleet Manager CLI (Go)',
        objective: 'Ship a Go CLI for managing your vehicle rental business — built primarily with Claude Code.',
        hoursEstimate: '7–10 hours',
        tasks: [
          {
            id: 'w7-t1', type: 'setup', required: true,
            title: 'Install Go and scaffold with Cobra — write CLAUDE.md first',
            description: 'Install Go 1.22+. Create repo "fleet-manager". Initialize Go module, install Cobra. BEFORE writing code: write the CLAUDE.md brief with purpose, all commands needed, data model, and file structure. This is what Claude Code works from.',
            estimatedMinutes: 45,
            resource: { label: 'Cobra CLI', url: 'https://cobra.dev/' },
          },
          {
            id: 'w7-t2', type: 'read', required: true,
            title: 'Read Go basics — understand what Claude Code produces',
            description: 'Read tour.golang.org for 60 minutes. Focus on: structs, interfaces, error handling, goroutines. You don\'t need to be a Go expert — you need to read and review Go code intelligently before accepting Claude Code output.',
            estimatedMinutes: 60,
          },
          {
            id: 'w7-t3', type: 'build', required: true,
            title: 'Build vehicle CRUD with SQLite — Claude Code leads',
            description: 'Hand Claude Code the CLAUDE.md. Ask it to implement: Vehicle struct, SQLite schema, and CRUD commands (fleet add, list, update, delete). Review every file before accepting. Understand each function before moving on.',
            estimatedMinutes: 90,
          },
          {
            id: 'w7-t4', type: 'build', required: true,
            title: 'Build rental tracking — Claude Code leads',
            description: 'Ask Claude Code to add: Rental struct, rental commands (fleet rent, fleet return, fleet rentals), SQLite storage. Review the SQL schema carefully — this is where correctness matters most.',
            estimatedMinutes: 90,
          },
          {
            id: 'w7-t5', type: 'build', required: true,
            title: 'Build maintenance reminders and financial reports',
            description: 'Ask Claude Code to add: maintenance tracking (by date or mileage, flag overdue), monthly income report by vehicle, CSV export for Wave. Add fleet maintenance and fleet report commands.',
            estimatedMinutes: 60,
          },
        ],
      },
      {
        id: 'w8', weekNumber: 8, phaseId: 2,
        title: 'Project 4 — Wave Accounting Assistant',
        objective: 'Ship a natural language interface to your Wave Accounting data that you actually use weekly.',
        hoursEstimate: '7–10 hours',
        tasks: [
          {
            id: 'w8-t1', type: 'setup', required: true,
            title: 'Set up Wave API credentials and Python project',
            description: 'Apply for Wave API access. Create repo "wave-assistant". Set up Python with: anthropic, httpx, python-dotenv, rich. Verify you can authenticate and call one Wave endpoint successfully.',
            estimatedMinutes: 30,
            resource: { label: 'Wave API Docs', url: 'https://developer.waveapps.com/' },
          },
          {
            id: 'w8-t2', type: 'build', required: true,
            title: 'Build the Wave GraphQL client wrapper',
            description: 'Write wave_client.py: async GraphQL client with auth, error handling, pagination, and rate limits. Implement: get_transactions(date_range), get_invoices(status), get_profit_loss(period). Test each against your real Wave account.',
            estimatedMinutes: 90,
          },
          {
            id: 'w8-t3', type: 'build', required: true,
            title: 'Build the Claude tool-use layer for natural language queries',
            description: 'Define Wave API methods as Claude tools using the tool_use API. Claude receives a NL query, selects the right tool and parameters, you execute and return the result, Claude formats the response. Handle multi-tool queries like "compare Q3 vs Q4 software spend."',
            estimatedMinutes: 90,
          },
          {
            id: 'w8-t4', type: 'build', required: true,
            title: 'Add Canadian tax context and query history',
            description: 'Add a system prompt with Canadian tax context: HST rates, deductible categories, fiscal year conventions. Add SQLite query history: save every query and response. Add --history flag and --favorite for pinned queries.',
            estimatedMinutes: 60,
          },
          {
            id: 'w8-t5', type: 'practice', required: true,
            title: 'Test with 20+ real natural language queries',
            description: 'Test against your actual Wave data: "How much did I spend on software last quarter?", "Which invoices are unpaid?", "What\'s my net profit this year?" Document which queries work perfectly, which need rephrasing, and which fail.',
            estimatedMinutes: 60,
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PHASE 3 — MCP Deep Dive (Weeks 9–12)
  // ─────────────────────────────────────────────────────────────
  {
    id: 3,
    label: 'Phase 3',
    title: 'MCP Deep Dive',
    weekRange: 'Weeks 9–12',
    color: '#04CCFD',
    tagline: 'Build custom integrations that extend Claude\'s reach into your real world.',
    goal: 'Build two production-quality MCP servers over your real data and submit both to the MCP registry.',
    why: 'MCP is becoming the standard protocol for connecting Claude to external systems. Published MCP servers in the registry are tangible, searchable evidence of skill that most candidates won\'t have. Your Wise and Automotive servers connect to real systems with real security requirements — exactly what production AI engineering looks like.',
    weeks: [
      {
        id: 'w9', weekNumber: 9, phaseId: 3,
        title: 'MCP Fundamentals',
        objective: 'Understand MCP architecture and ship a Hello World server that works with Claude Desktop.',
        hoursEstimate: '6–8 hours',
        tasks: [
          {
            id: 'w9-t1', type: 'read', required: true,
            title: 'Read the full MCP specification',
            description: 'Read the complete MCP spec at modelcontextprotocol.io. Focus on: the three primitives (Tools, Resources, Prompts), transport options (stdio vs SSE), the security model, and how clients discover server capabilities.',
            estimatedMinutes: 90,
            resource: { label: 'MCP Specification', url: 'https://modelcontextprotocol.io' },
          },
          {
            id: 'w9-t2', type: 'setup', required: true,
            title: 'Install MCP Python SDK and Claude Desktop',
            description: 'pip install mcp. Install Claude Desktop. Verify it\'s running. Read the MCP Python SDK README end-to-end to understand the server development pattern.',
            estimatedMinutes: 30,
            resource: { label: 'MCP Python SDK', url: 'https://github.com/modelcontextprotocol/python-sdk' },
          },
          {
            id: 'w9-t3', type: 'build', required: true,
            title: 'Build a Hello World MCP server',
            description: 'One tool: get_greeting(name: str) → str. Connect to Claude Desktop. Verify Claude can call it: "What is the greeting for Murtaza?" This confirms your entire MCP development environment works before you build real servers.',
            estimatedMinutes: 60,
          },
          {
            id: 'w9-t4', type: 'read', required: true,
            title: 'Study 3 existing MCP servers on GitHub',
            description: 'Read source of 3 servers from the official registry: one simple (filesystem), one API-based (Brave search), one database-based. For each: tool schema design, error handling, security approach. Copy patterns you like.',
            estimatedMinutes: 60,
            resource: { label: 'MCP Server Registry', url: 'https://github.com/modelcontextprotocol/servers' },
          },
          {
            id: 'w9-t5', type: 'practice', required: true,
            title: 'Design your tool schemas before writing any implementation',
            description: 'For both upcoming MCP servers (Wise + Automotive DB): write out all tool names, input schemas, and output formats in a markdown file. Vague schemas produce wrong model inputs. Design explicitly first.',
            estimatedMinutes: 45,
          },
        ],
      },
      {
        id: 'w10', weekNumber: 10, phaseId: 3,
        title: 'Project 5 — Wise MCP Server',
        objective: 'Ship a production-quality MCP server connecting Claude to your Wise account, ready for registry submission.',
        hoursEstimate: '7–10 hours',
        tasks: [
          {
            id: 'w10-t1', type: 'setup', required: true,
            title: 'Set up Wise API sandbox and scaffold the project',
            description: 'Create a Wise developer account and get sandbox credentials. Create repo "wise-mcp-server". Python with mcp SDK, httpx, python-dotenv. Write test script that authenticates to sandbox and fetches a balance. No credentials in code — .env only.',
            estimatedMinutes: 30,
            resource: { label: 'Wise API Docs', url: 'https://docs.wise.com/api-docs/api-reference' },
          },
          {
            id: 'w10-t2', type: 'build', required: true,
            title: 'Build the Wise API client layer',
            description: 'write wise_client.py: async httpx client with auth, pagination, and error handling. Implement: get_profiles(), get_balances(profile_id), get_transactions(profile_id, currency, date_range), get_exchange_rate(source, target). Test each against the sandbox.',
            estimatedMinutes: 60,
          },
          {
            id: 'w10-t3', type: 'build', required: true,
            title: 'Build all 4 MCP tools',
            description: 'Wire the Wise client into MCP tools: get_balances, get_transactions (with date range), get_quote (with fees broken out), get_exchange_rate. Write explicit input schemas — vague schemas produce wrong model inputs. Add structured error messages the model can reason about.',
            estimatedMinutes: 90,
          },
          {
            id: 'w10-t4', type: 'build', required: true,
            title: 'Add audit logging and security hardening',
            description: 'Audit log every tool call to SQLite: timestamp, tool name, sanitized inputs (no credentials), result status. Verify: no API keys appear in any log. Add input validation on all parameters. Test with invalid inputs deliberately.',
            estimatedMinutes: 45,
          },
          {
            id: 'w10-t5', type: 'practice', required: true,
            title: 'End-to-end test with Claude Desktop',
            description: 'Connect your server to Claude Desktop. Test natural language: "What are my current Wise balances?", "Show me CAD transactions from last month", "What\'s the rate to send $500 CAD to GBP?" All 4 tools must work correctly.',
            estimatedMinutes: 45,
          },
        ],
      },
      {
        id: 'w11', weekNumber: 11, phaseId: 3,
        title: 'Project 6 — Automotive Database MCP (Go)',
        objective: 'Ship a high-performance Go MCP server over your Fleet Manager database with sub-100ms queries.',
        hoursEstimate: '7–10 hours',
        tasks: [
          {
            id: 'w11-t1', type: 'setup', required: true,
            title: 'Scaffold Go MCP project and connect to Fleet Manager SQLite',
            description: 'Create repo "automotive-db-mcp". Set up Go module with MCP Go SDK. Connect to your Fleet Manager SQLite database. Verify you can query vehicle records from Go. Write CLAUDE.md for the project before coding.',
            estimatedMinutes: 45,
          },
          {
            id: 'w11-t2', type: 'build', required: true,
            title: 'Build query_vehicles, rental_status, and maintenance_due tools',
            description: 'Three tools with parameterized queries only — never string concatenation. query_vehicles: filter by make/model/status/year. rental_status: active rentals and upcoming returns in 7 days. maintenance_due: overdue or coming up within 500km/30 days.',
            estimatedMinutes: 120,
          },
          {
            id: 'w11-t3', type: 'build', required: true,
            title: 'Build revenue_report tool with caching',
            description: 'revenue_report: accepts period (this_month, last_month, ytd, custom date range). Returns total income, income by vehicle, outstanding payments. Cache results for 5 minutes — report queries are expensive.',
            estimatedMinutes: 60,
          },
          {
            id: 'w11-t4', type: 'practice', required: true,
            title: 'Benchmark query performance and add indexes if needed',
            description: 'Run each tool 100 times, record p50/p95/p99 latency. Target: p95 under 100ms. Add indexes if any query exceeds this. Document before/after results — concrete perf numbers make your portfolio stand out.',
            estimatedMinutes: 45,
          },
          {
            id: 'w11-t5', type: 'practice', required: true,
            title: 'Security audit: attempt SQL injection on every parameter',
            description: 'Try injecting through every input: "Toyota\' OR \'1\'=\'1", "--", "DROP TABLE vehicles". Verify none cause unexpected behavior. Document your parameterization approach in the README — this shows security awareness.',
            estimatedMinutes: 45,
          },
        ],
      },
      {
        id: 'w12', weekNumber: 12, phaseId: 3,
        title: 'MCP Testing, Documentation & Publishing',
        objective: 'Polish both servers to registry quality and publish Blog Post 1.',
        hoursEstimate: '5–7 hours',
        tasks: [
          {
            id: 'w12-t1', type: 'build', required: true,
            title: 'Write unit and integration tests for both MCP servers',
            description: 'Wise server: unit test each tool with mocked Wise API responses. Automotive MCP: unit test each tool with in-memory SQLite. Integration tests for at least 2 error scenarios per server: invalid input, API timeout, missing credentials.',
            estimatedMinutes: 90,
          },
          {
            id: 'w12-t2', type: 'write', required: true,
            title: 'Write comprehensive READMEs for both servers',
            description: 'Both READMEs: what it does, prerequisites, installation, .env config, all tools with input/output schemas, example Claude Desktop queries, security notes, known limitations. Write as if a stranger sets this up from scratch.',
            estimatedMinutes: 60,
          },
          {
            id: 'w12-t3', type: 'write', required: true,
            title: 'Write Blog Post 1: "Building MCP Servers — Lessons Learned"',
            description: '600–1000 words: what MCP is, what you built, one technical decision and why, one surprise, what you\'d do differently. Publish on dev.to or your portfolio site. This is your first searchable, public evidence of expertise.',
            estimatedMinutes: 120,
          },
          {
            id: 'w12-t4', type: 'practice', required: true,
            title: 'Submit both servers to the official MCP registry',
            description: 'Follow the registry submission process. Submit PRs to modelcontextprotocol/servers. Even if not merged immediately, the PR is portfolio-visible and shows you understand the contribution process.',
            estimatedMinutes: 45,
            resource: { label: 'MCP Registry', url: 'https://github.com/modelcontextprotocol/servers' },
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PHASE 4 — RAG & Vector Databases (Weeks 13–16)
  // ─────────────────────────────────────────────────────────────
  {
    id: 4,
    label: 'Phase 4',
    title: 'RAG & Vector Databases',
    weekRange: 'Weeks 13–16',
    color: '#04CCFD',
    tagline: 'Build systems that augment Claude with knowledge it couldn\'t have otherwise.',
    goal: 'Ship a production RAG system over your real corporation documents with measurable retrieval accuracy.',
    why: 'RAG is the practical alternative to fine-tuning for most business use cases. Getting retrieval right is the hard part — chunking strategies, hybrid search, reranking. You will build over your actual corp documents so the system has real utility from day one, and you will measure it with a real eval harness.',
    weeks: [
      {
        id: 'w13', weekNumber: 13, phaseId: 4,
        title: 'Embeddings & Vector Databases — Fundamentals',
        objective: 'Understand embeddings practically — run real similarity searches before building the full pipeline.',
        hoursEstimate: '6–8 hours',
        tasks: [
          {
            id: 'w13-t1', type: 'read', required: true,
            title: 'Read the Anthropic RAG guide',
            description: 'Read in full. Focus on: when RAG beats fine-tuning, chunking strategies, context window management, and citation patterns. This is the conceptual foundation for everything you build this phase.',
            estimatedMinutes: 60,
            resource: { label: 'Anthropic RAG Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/retrieval-augmented-generation' },
          },
          {
            id: 'w13-t2', type: 'setup', required: true,
            title: 'Install pgvector on your Postgres instance',
            description: 'CREATE EXTENSION vector; — run this on your existing Postgres. Create a test table with a vector column. Install Python: psycopg2, cohere. Verify you can insert and query vectors. No new service needed.',
            estimatedMinutes: 30,
            resource: { label: 'pgvector', url: 'https://github.com/pgvector/pgvector' },
          },
          {
            id: 'w13-t3', type: 'practice', required: true,
            title: 'Generate embeddings for 50 real documents and run similarity queries',
            description: 'Take 50 text samples from your corp documents. Generate embeddings with Cohere Embed v3 (free tier). Store in pgvector. Run 5 similarity queries and examine results — do semantically similar documents cluster? Document your observations.',
            estimatedMinutes: 60,
            resource: { label: 'Cohere Embed', url: 'https://docs.cohere.com/docs/embeddings' },
          },
          {
            id: 'w13-t4', type: 'practice', required: true,
            title: 'Experiment with 3 chunking strategies on the same document',
            description: 'Take one long document. Chunk it 3 ways: fixed 500 tokens, sentence-based, paragraph-based with 50-token overlap. Run the same 5 queries for each. Which chunks return more relevant results? This is the most important intuition in RAG.',
            estimatedMinutes: 60,
          },
          {
            id: 'w13-t5', type: 'practice', required: true,
            title: 'Implement and compare hybrid search vs pure vector',
            description: 'Implement BM25 keyword search using Postgres full-text (ts_vector). Combine with vector search via RRF (Reciprocal Rank Fusion). Compare pure vector vs pure keyword vs hybrid on 10 queries. Hybrid almost always wins — understand why.',
            estimatedMinutes: 60,
          },
        ],
      },
      {
        id: 'w14', weekNumber: 14, phaseId: 4,
        title: 'Corp Knowledge Base — Ingestion Pipeline',
        objective: 'Build the backend ingestion pipeline that processes your real corp documents into a searchable vector store.',
        hoursEstimate: '8–10 hours',
        tasks: [
          {
            id: 'w14-t1', type: 'setup', required: true,
            title: 'Scaffold the Corp Knowledge Base project and Postgres schema',
            description: 'Create repo "corp-knowledge-base". FastAPI backend with psycopg2/pgvector, cohere, anthropic, PyMuPDF, python-docx, pytesseract. Design the schema: documents (id, filename, doc_type, date, metadata JSONB) and chunks (id, document_id, content, embedding vector(1024), chunk_index).',
            estimatedMinutes: 30,
          },
          {
            id: 'w14-t2', type: 'build', required: true,
            title: 'Build multi-format document ingestion',
            description: 'ingestion.py: handles PDF (PyMuPDF), DOCX (python-docx), TXT, and images (pytesseract OCR). For each: extract text, detect doc type (invoice/contract/receipt/note), extract metadata (date, amounts, parties). Output: clean text + structured metadata.',
            estimatedMinutes: 120,
          },
          {
            id: 'w14-t3', type: 'build', required: true,
            title: 'Build document-type-aware chunking',
            description: 'chunker.py: different strategy per doc type. Contracts: chunk by clause. Invoices: single chunk (they\'re short). Emails: by paragraph. Long notes: sentence-based with 50-token overlap. Test on 10 real corp documents.',
            estimatedMinutes: 90,
          },
          {
            id: 'w14-t4', type: 'build', required: true,
            title: 'Build embedding generation and hybrid search',
            description: 'embedder.py: batch embed with Cohere Embed v3 (batch 96). Store in pgvector with metadata. Add idempotency — re-ingesting same file updates, not duplicates. retriever.py: BM25 + vector → RRF merge → Cohere Rerank top-5 from top-20.',
            estimatedMinutes: 90,
            resource: { label: 'Cohere Rerank', url: 'https://docs.cohere.com/docs/rerank-overview' },
          },
        ],
      },
      {
        id: 'w15', weekNumber: 15, phaseId: 4,
        title: 'Corp Knowledge Base — Frontend & Deployment',
        objective: 'Ship the full RAG system with a React UI, citation tracking, and a live deployed URL.',
        hoursEstimate: '7–9 hours',
        tasks: [
          {
            id: 'w15-t1', type: 'build', required: true,
            title: 'Build Claude answer generation with mandatory citations',
            description: 'generator.py: takes retrieved chunks, assembles context, prompts Claude to answer with explicit source citations in every claim. Format: "[Invoice #2024-047] The total billed was $3,200 CAD." No uncited claims allowed.',
            estimatedMinutes: 90,
          },
          {
            id: 'w15-t2', type: 'build', required: true,
            title: 'Build the React search UI',
            description: 'Search input, answer panel with citations, source document cards, chunk highlighting, and a follow-up question input. Wire to FastAPI. Clean and functional — you will use this daily for corp management.',
            estimatedMinutes: 90,
          },
          {
            id: 'w15-t3', type: 'setup', required: true,
            title: 'Deploy and index your real corp documents',
            description: 'Deploy FastAPI to Railway, React to Vercel. Ingest your real corp documents — target 100+. Run 10 queries you actually want answered. Verify answers are accurate and citations are correct. This system should earn its keep immediately.',
            estimatedMinutes: 60,
          },
          {
            id: 'w15-t4', type: 'practice', required: true,
            title: 'Measure latency and add HNSW index if over 1 second',
            description: 'Time 20 queries end-to-end. Target: under 1 second. If over: (1) add HNSW vector index, (2) reduce rerank candidates, (3) add Redis caching for frequent queries. Document p50 and p95 latency in the README.',
            estimatedMinutes: 45,
          },
        ],
      },
      {
        id: 'w16', weekNumber: 16, phaseId: 4,
        title: 'RAG Evaluation & Blog Post',
        objective: 'Build a repeatable eval framework with real metrics, run A/B tests, and publish Blog Post 2.',
        hoursEstimate: '5–7 hours',
        tasks: [
          {
            id: 'w16-t1', type: 'build', required: true,
            title: 'Build a golden dataset of 20 test questions with ground truth',
            description: 'Write 20 questions answerable from your corp documents, with ground-truth answers. Mix: easy (single doc), medium (cross-doc), hard (multi-doc reasoning). This is your regression suite — run it before every change to the pipeline.',
            estimatedMinutes: 60,
          },
          {
            id: 'w16-t2', type: 'build', required: true,
            title: 'Build automated eval harness with Precision@3, MRR, and LLM-as-judge',
            description: 'eval.py: for each question, run retrieval and score: Precision@3 (did the right doc appear in top 3?), MRR (what rank?), answer correctness (prompt Claude to compare generated vs ground-truth answer). Output a score report.',
            estimatedMinutes: 90,
          },
          {
            id: 'w16-t3', type: 'practice', required: true,
            title: 'Run A/B test: with vs without Cohere Rerank',
            description: 'Run your 20-question eval twice: with Rerank and without. Record Precision@3 and MRR for each. Document the delta with real numbers — "reranking improved Precision@3 from 61% to 84%" is the kind of concrete result that makes portfolios stand out.',
            estimatedMinutes: 60,
          },
          {
            id: 'w16-t4', type: 'write', required: true,
            title: 'Write Blog Post 2: "RAG in Production — What Actually Improves Retrieval"',
            description: '700–1000 words: what you built, your A/B test results (with real numbers), what you tried that did NOT help (equally valuable), your production setup. Include the eval methodology. Publish on dev.to.',
            estimatedMinutes: 120,
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PHASE 5 — Multi-Agent Systems (Weeks 17–20)
  // ─────────────────────────────────────────────────────────────
  {
    id: 5,
    label: 'Phase 5',
    title: 'Multi-Agent Systems',
    weekRange: 'Weeks 17–20',
    color: '#04CCFD',
    tagline: 'Build systems where agents collaborate — not just systems that call an API.',
    goal: 'Ship a production multi-agent system that automates real financial workflows for your corporation.',
    why: 'Your engineering background is a direct advantage. Multi-agent systems are distributed systems where some nodes happen to be LLMs. You already understand retry logic, state management, and failure modes. Most AI practitioners can build one agent — few can build a reliable orchestrated system.',
    weeks: [
      {
        id: 'w17', weekNumber: 17, phaseId: 5,
        title: 'Agent Patterns & Architecture',
        objective: 'Build two single agents and observe failure modes before designing a multi-agent system.',
        hoursEstimate: '6–8 hours',
        tasks: [
          {
            id: 'w17-t1', type: 'read', required: true,
            title: 'Read the original ReAct paper',
            description: 'Read "ReAct: Synergizing Reasoning and Acting in Language Models" (2022). Focus on the Reason → Act → Observe loop. It\'s short and accessible — the foundational architecture behind most modern agents.',
            estimatedMinutes: 60,
            resource: { label: 'ReAct Paper', url: 'https://arxiv.org/abs/2210.03629' },
          },
          {
            id: 'w17-t2', type: 'read', required: true,
            title: 'Read the Anthropic multi-agent guide',
            description: 'Focus on: orchestrator-worker pattern, when to use agents vs deterministic code, state management approaches, and human-in-the-loop design. This sets the architecture vocabulary for everything you build this phase.',
            estimatedMinutes: 45,
            resource: { label: 'Anthropic Multi-Agent Guide', url: 'https://docs.anthropic.com/en/docs/build-with-claude/agents-and-tools/agents-overview' },
          },
          {
            id: 'w17-t3', type: 'build', required: true,
            title: 'Build a single research agent with web search',
            description: 'Python agent: receives a research question → searches the web (Brave Search or Tavily API) → reads relevant pages → synthesizes a report with citations. Implement the ReAct loop manually — no framework. Observe where it succeeds and where it fails.',
            estimatedMinutes: 90,
          },
          {
            id: 'w17-t4', type: 'write', required: true,
            title: 'Write your agent vs code decision framework',
            description: 'Based on your experiments: when should a task be an agent vs deterministic code? Include: task complexity, required flexibility, acceptable error rate, cost. This becomes a key talking point in technical interviews.',
            estimatedMinutes: 30,
          },
        ],
      },
      {
        id: 'w18', weekNumber: 18, phaseId: 5,
        title: 'Business Automation — Orchestrator + Receipt & Invoice Agents',
        objective: 'Build the orchestrator and first two specialized agents for your corporate automation system.',
        hoursEstimate: '10–14 hours (across weeks 18–19)',
        tasks: [
          {
            id: 'w18-t1', type: 'setup', required: true,
            title: 'Design system architecture and scaffold the project',
            description: 'Create repo "business-automation". Draw the message flow before coding: orchestrator → agents, task routing logic, Postgres state schema. Write the CLAUDE.md. Set up FastAPI, psycopg2, anthropic, and your Wave client from Week 8.',
            estimatedMinutes: 45,
          },
          {
            id: 'w18-t2', type: 'build', required: true,
            title: 'Build the orchestrator',
            description: 'orchestrator.py: agent registry (name → Agent), task router (NL description → selects agent), result aggregator, Postgres state store. The orchestrator never calls Claude directly — it delegates. Every task gets a UUID and status (pending/running/done/failed).',
            estimatedMinutes: 120,
          },
          {
            id: 'w18-t3', type: 'build', required: true,
            title: 'Build the Receipt Agent',
            description: 'Port your Week 3 Receipt Manager as an Agent class. Input: file path. Output: {receipt_id, merchant, amount, category, wave_staged: bool}. Register with the orchestrator.',
            estimatedMinutes: 90,
          },
          {
            id: 'w18-t4', type: 'build', required: true,
            title: 'Build the Invoice Agent',
            description: 'Invoice Agent: generates invoices from time logs, tracks payment status via Wave API, sends email reminders for overdue invoices (SendGrid free tier). Register with orchestrator. Test end-to-end with a real invoice.',
            estimatedMinutes: 90,
          },
        ],
      },
      {
        id: 'w19', weekNumber: 19, phaseId: 5,
        title: 'Business Automation — Finance & Compliance Agents + Dashboard',
        objective: 'Complete all 4 agents, add human-in-the-loop controls, and ship the monitoring dashboard.',
        hoursEstimate: '(continued from Week 18)',
        tasks: [
          {
            id: 'w19-t1', type: 'build', required: true,
            title: 'Build the Compliance Agent',
            description: 'Tracks Canadian tax deadlines: HST remittance quarterly, corporate tax annual, T4 season. Monitors Wave data for upcoming obligations. Sends proactive alerts 30 days before each deadline. Returns structured compliance calendar.',
            estimatedMinutes: 90,
          },
          {
            id: 'w19-t2', type: 'build', required: true,
            title: 'Build the Finance Agent',
            description: 'Uses your Wave Assistant (Week 8) to: generate monthly P&L summaries, 90-day cash flow projections, and expense anomaly detection (flag categories significantly above prior months).',
            estimatedMinutes: 90,
          },
          {
            id: 'w19-t3', type: 'build', required: true,
            title: 'Add human-in-the-loop checkpoint for all Wave writes',
            description: 'Before any agent writes to Wave: save the proposed action to Postgres with status "pending_approval." The dashboard shows pending actions. You approve or reject each one. No agent writes to Wave without explicit approval — this is the safety boundary.',
            estimatedMinutes: 60,
          },
          {
            id: 'w19-t4', type: 'build', required: true,
            title: 'Build the monitoring dashboard',
            description: 'React dashboard: workflow run history (last 20 with status), agent status cards (last run, success rate, avg cost), pending HITL approval queue, total token spend this month. Deploy to Railway + Vercel.',
            estimatedMinutes: 90,
          },
          {
            id: 'w19-t5', type: 'practice', required: true,
            title: 'Run one complete end-to-end workflow with real data',
            description: '"Process this week\'s receipts, check for overdue invoices, and generate a financial summary." All 4 agents should activate. Review the HITL queue before approving Wave writes. Verify it completes correctly.',
            estimatedMinutes: 60,
          },
        ],
      },
      {
        id: 'w20', weekNumber: 20, phaseId: 5,
        title: 'Agent Evaluation, Optimization & Blog Post',
        objective: 'Measure your system\'s performance, optimize the worst bottlenecks, and publish Blog Post 3.',
        hoursEstimate: '5–7 hours',
        tasks: [
          {
            id: 'w20-t1', type: 'build', required: true,
            title: 'Build automated test scenarios for each agent',
            description: '5 test inputs with expected outputs per agent. Receipt Agent: 5 receipt images with known correct categorization. Run on every deploy. This is your regression test suite for the whole system.',
            estimatedMinutes: 60,
          },
          {
            id: 'w20-t2', type: 'practice', required: true,
            title: 'Measure task completion rate, cost per run, and latency',
            description: 'Run test suite 10 times. Record: completion rate, avg cost per agent call, avg workflow latency, error recovery rate. These baselines are your interview talking points — "my system completes 94% of tasks without human intervention" is a real answer.',
            estimatedMinutes: 60,
          },
          {
            id: 'w20-t3', type: 'practice', required: true,
            title: 'Optimize: tighten prompts, add caching, parallelize independent agents',
            description: 'Find your most expensive agent. Reduce cost: tighten system prompt, cache repeated lookups, use smaller model for simple classification. Where agents are independent, run in parallel with asyncio.gather().',
            estimatedMinutes: 90,
          },
          {
            id: 'w20-t4', type: 'write', required: true,
            title: 'Write Blog Post 3: "Multi-Agent Systems for Business Automation"',
            description: '700–1000 words: your architecture (with diagram), the HITL decision and why it matters, your measured performance numbers, what you\'d do differently at 10x scale. Your most technically substantive post — demonstrates systems thinking.',
            estimatedMinutes: 120,
          },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // PHASE 6 — Portfolio & Capstone (Weeks 21–24)
  // ─────────────────────────────────────────────────────────────
  {
    id: 6,
    label: 'Phase 6',
    title: 'Portfolio & Capstone',
    weekRange: 'Weeks 21–24',
    color: '#04CCFD',
    tagline: 'Make your skills undeniable. Show, don\'t tell.',
    goal: 'Ship a capstone project, a professional portfolio site, and activate your job search at target companies.',
    why: 'The only credible signal in Applied AI Engineering right now is shipped systems. Your non-FAANG background is not a liability if your GitHub shows 10+ production-quality projects solving real problems. Twilio, Airbnb, GitHub, GitLab, and Planet hire builders. After 6 months of building, that is exactly what you are.',
    weeks: [
      {
        id: 'w21', weekNumber: 21, phaseId: 6,
        title: 'Portfolio Website',
        objective: 'Ship a professional portfolio site showcasing all 10 projects and your 3 blog posts.',
        hoursEstimate: '7–10 hours',
        tasks: [
          {
            id: 'w21-t1', type: 'setup', required: true,
            title: 'Scaffold Next.js + TypeScript portfolio and deploy to Vercel immediately',
            description: 'Create repo "portfolio". Scaffold with Next.js 14 + TypeScript + Tailwind. Set up routing: /, /projects, /blog, /about. Deploy to Vercel on day 1 — push early and iterate in public.',
            estimatedMinutes: 30,
          },
          {
            id: 'w21-t2', type: 'build', required: true,
            title: 'Build the project gallery with detail pages',
            description: '/projects page: card per project with name, category, one-sentence description, tech stack, GitHub link, live demo. /projects/[slug] detail page with architecture overview and key technical decisions. Write these as if a hiring manager will read them.',
            estimatedMinutes: 90,
          },
          {
            id: 'w21-t3', type: 'build', required: true,
            title: 'Build the blog section with your 3 posts',
            description: 'Add /blog using MDX + Next.js. All 3 published posts should live here AND externally on dev.to. Cross-post links for search indexing.',
            estimatedMinutes: 60,
          },
          {
            id: 'w21-t4', type: 'write', required: true,
            title: 'Update all 10 project READMEs',
            description: 'Every repo needs: live demo URL, architecture diagram, tech stack, how to run locally, and measured results (accuracy %, latency, cost). READMEs are read more than code — this takes a full day and it is worth it.',
            estimatedMinutes: 120,
          },
        ],
      },
      {
        id: 'w22', weekNumber: 22, phaseId: 6,
        title: 'Capstone — Backend, Agents & RAG',
        objective: 'Build the AI Rental Management Platform backend integrating all Phase 1–5 skills.',
        hoursEstimate: '14–20 hours (across weeks 22–23)',
        tasks: [
          {
            id: 'w22-t1', type: 'setup', required: true,
            title: 'Scaffold full-stack capstone with comprehensive CLAUDE.md',
            description: 'Create repo "ai-rental-platform". FastAPI backend + Next.js frontend + Postgres. Write the most comprehensive CLAUDE.md you have ever written — define API schema, DB schema, and component hierarchy before any code.',
            estimatedMinutes: 45,
          },
          {
            id: 'w22-t2', type: 'build', required: true,
            title: 'Port and adapt the multi-agent orchestration layer',
            description: 'Adapt your Phase 5 orchestration for rental operations: AvailabilityAgent, PricingAgent (rate + season + duration), BookingAgent (create rental + invoice), NotificationAgent (confirmations + reminders).',
            estimatedMinutes: 120,
          },
          {
            id: 'w22-t3', type: 'build', required: true,
            title: 'Port RAG over vehicle service and rental history',
            description: 'Adapt your Phase 4 RAG system for vehicle data. Index: service records, rental history, damage reports, customer notes. Enable queries like "What maintenance has Vehicle 3 had in 2024?" Wire to FastAPI.',
            estimatedMinutes: 90,
          },
          {
            id: 'w22-t4', type: 'build', required: true,
            title: 'Wire the Automotive Database MCP into the backend',
            description: 'Connect your Phase 3 Automotive MCP server to the capstone backend. Backend calls MCP for fleet queries — don\'t duplicate the logic. This demonstrates MCP as a real integration pattern, not just a demo.',
            estimatedMinutes: 60,
          },
        ],
      },
      {
        id: 'w23', weekNumber: 23, phaseId: 6,
        title: 'Capstone — Frontend, Deployment & Demo',
        objective: 'Ship the production-deployed capstone with a live URL, monitoring, and a 5-minute demo video.',
        hoursEstimate: '(continued from Week 22)',
        tasks: [
          {
            id: 'w23-t1', type: 'build', required: true,
            title: 'Build the Next.js fleet management dashboard',
            description: 'Fleet overview, rental calendar (Gantt-style), customer management, financial overview, and AI natural language query interface over vehicle history. This is the most visible part of the capstone — make it clean.',
            estimatedMinutes: 120,
          },
          {
            id: 'w23-t2', type: 'build', required: true,
            title: 'Add nightly AI anomaly detection for fleet operations',
            description: 'Background job: flags vehicles with unusual patterns (overdue returns, frequent damage, revenue below fleet average), surfaces alerts in dashboard. Claude does the anomaly analysis — demonstrates AI judgment in a real business context.',
            estimatedMinutes: 60,
          },
          {
            id: 'w23-t3', type: 'setup', required: true,
            title: 'Production deployment with monitoring',
            description: 'FastAPI to Railway, Next.js to Vercel. /health endpoint checking DB connectivity. Daily cost tracker logging Claude API spend. Clean public URL for the portfolio.',
            estimatedMinutes: 60,
          },
          {
            id: 'w23-t4', type: 'build', required: true,
            title: 'Record a 5-minute architecture and live demo video',
            description: '90 sec: architecture and which AI techniques are used where. 3 min: live demo of key workflows. 30 sec: what you would build next. Post to Loom and embed on portfolio site. Include in every job application.',
            estimatedMinutes: 60,
          },
        ],
      },
      {
        id: 'w24', weekNumber: 24, phaseId: 6,
        title: 'Job Search Activation',
        objective: 'Activate your job search with optimized applications to 10+ target companies.',
        hoursEstimate: '7–10 hours',
        tasks: [
          {
            id: 'w24-t1', type: 'practice', required: true,
            title: 'Whiteboard an agent architecture cold — timed, 3 times',
            description: 'Set 20-minute timer. Prompt: "Design an AI system that processes customer support tickets, routes to the right team, drafts responses, and escalates complex cases." Whiteboard in full. Review gaps. Repeat with 2 different prompts. This is the interview you will face.',
            estimatedMinutes: 60,
          },
          {
            id: 'w24-t2', type: 'practice', required: true,
            title: 'Implement tool-use loop and RAG pipeline cold — timed',
            description: 'No references: implement a basic Claude tool-use loop in under 20 minutes. Then a minimal RAG pipeline in under 30 minutes. Time yourself. Repeat until both are fluent. Fluency under pressure is what differentiates senior candidates.',
            estimatedMinutes: 90,
          },
          {
            id: 'w24-t3', type: 'write', required: true,
            title: 'Update resume and LinkedIn headline for AI engineering',
            description: 'Headline: "Applied AI Engineer — Python, TypeScript, Go | Claude API, MCP, RAG, Multi-Agent Systems." List your 5 strongest projects with one-line impact summaries. Portfolio URL prominently in both. Update LinkedIn to match.',
            estimatedMinutes: 60,
          },
          {
            id: 'w24-t4', type: 'practice', required: true,
            title: 'Apply to 10+ target companies with personalized applications',
            description: 'Targets: Twilio (AI Platform), Airbnb (ML Infrastructure), GitHub (Copilot), GitLab (ModelOps), Planet (Geospatial ML) + 5 more builder-focused companies. Personalize each: pick the most relevant project and explain why it maps directly to their problem domain.',
            estimatedMinutes: 120,
          },
        ],
      },
    ],
  },
];
