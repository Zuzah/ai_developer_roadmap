// App.tsx — Iteration 1 of 6
// This placeholder confirms the scaffold, design system, and deploy pipeline work.
// It will be replaced incrementally starting at Iteration 3.

const phases = [
  { id: 1, label: 'Phase 1', title: 'Claude Mastery & Prompt Engineering', weeks: 'Weeks 1–4',  color: 'var(--phase-1)' },
  { id: 2, label: 'Phase 2', title: 'Agentic Development & Claude Code',   weeks: 'Weeks 5–8',  color: 'var(--phase-2)' },
  { id: 3, label: 'Phase 3', title: 'MCP Deep Dive',                       weeks: 'Weeks 9–12', color: 'var(--phase-3)' },
  { id: 4, label: 'Phase 4', title: 'RAG & Vector Databases',              weeks: 'Weeks 13–16', color: 'var(--phase-4)' },
  { id: 5, label: 'Phase 5', title: 'Multi-Agent Systems',                 weeks: 'Weeks 17–20', color: 'var(--phase-5)' },
  { id: 6, label: 'Phase 6', title: 'Portfolio & Capstone',                weeks: 'Weeks 21–24', color: 'var(--phase-6)' },
]

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>

      {/* ── Header ── */}
      <header style={{
        borderBottom: '1px solid var(--border)',
        padding: '32px 40px 28px',
        background: 'linear-gradient(180deg, #0D0D18 0%, var(--bg-base) 100%)',
      }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <p className="label" style={{ color: 'var(--phase-1)', marginBottom: 10 }}>
            Applied AI Engineering · 24-Week Roadmap
          </p>
          <h1 style={{
            fontSize: 'clamp(22px, 4vw, 36px)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
          }}>
            From Software Engineer<br />
            <span style={{ color: 'var(--phase-1)' }}>to Applied AI Engineer</span>
          </h1>
          <p style={{
            marginTop: 12,
            fontFamily: 'Courier New, monospace',
            fontSize: 13,
            color: 'var(--text-muted)',
            lineHeight: 1.6,
          }}>
            6 phases · 11 projects · Python / TypeScript / Go · Build &gt; Learn
          </p>
        </div>
      </header>

      {/* ── Main ── */}
      <main style={{ maxWidth: 960, margin: '0 auto', padding: '40px 40px' }}>

        {/* Iteration status banner */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderLeft: '3px solid var(--phase-1)',
          borderRadius: 6,
          padding: '14px 18px',
          marginBottom: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 12,
        }}>
          <span style={{ fontFamily: 'monospace', fontSize: 12, color: 'var(--phase-1)' }}>
            ITERATION 1 / 6
          </span>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            Scaffold live. Data layer, components, and progress tracking coming in next iterations.
          </span>
        </div>

        {/* Phase grid preview */}
        <p className="label" style={{ marginBottom: 14 }}>6 phases · loading soon</p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 10,
        }}>
          {phases.map(phase => (
            <div key={phase.id} style={{
              background: 'var(--bg-surface)',
              border: `1px solid var(--border)`,
              borderTop: `2px solid ${phase.color}`,
              borderRadius: 6,
              padding: '16px 18px',
              opacity: 0.7,
            }}>
              <p style={{
                fontFamily: 'monospace',
                fontSize: 10,
                color: phase.color,
                letterSpacing: '0.15em',
                marginBottom: 6,
              }}>
                {phase.label.toUpperCase()} · {phase.weeks}
              </p>
              <p style={{ fontSize: 14, color: 'var(--text-primary)', lineHeight: 1.4 }}>
                {phase.title}
              </p>
            </div>
          ))}
        </div>

        {/* Stack badge row */}
        <div style={{ marginTop: 40, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {['Python 60%', 'TypeScript 25%', 'Go 15%', 'Claude API', 'MCP', 'RAG', 'Agents'].map(tag => (
            <span key={tag} style={{
              fontFamily: 'monospace',
              fontSize: 11,
              color: 'var(--text-dim)',
              border: '1px solid var(--border)',
              borderRadius: 3,
              padding: '4px 10px',
              letterSpacing: '0.1em',
            }}>
              {tag}
            </span>
          ))}
        </div>
      </main>

    </div>
  )
}
