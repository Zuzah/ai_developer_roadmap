// src/App.tsx — Iteration 3 of 6
// Wires: Header (tabs) + PhaseNav (phase selector)
// PhaseView content is a placeholder — arrives in Iteration 4.

import { useState } from 'react';
import Header from './components/Header';
import PhaseNav from './components/PhaseNav';
import { phases } from './data/phases';

type Tab = 'roadmap' | 'staying-current' | 'gap-analysis';

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('roadmap');
  const [activePhaseId, setActivePhaseId] = useState<number>(1);

  const activePhase = phases.find(p => p.id === activePhaseId)!;

  // Completion percentages — all zero until Iteration 6 wires localStorage
  const completionByPhase: Record<number, number> = {};

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '32px 32px' }}>

        {/* ── ROADMAP TAB ── */}
        {activeTab === 'roadmap' && (
          <div>
            <PhaseNav
              phases={phases}
              activePhaseId={activePhaseId}
              onPhaseSelect={setActivePhaseId}
              completionByPhase={completionByPhase}
            />

            {/* Phase detail placeholder — replaced in Iteration 4 */}
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderTop: '2px solid #04CCFD',
              borderRadius: '0 0 8px 8px',
              padding: '28px 28px',
            }}>
              <div style={{ marginBottom: 20 }}>
                <p style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: 11,
                  color: '#04CCFD',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}>
                  {activePhase.label} · {activePhase.weeks} · {activePhase.hoursPerWeek}
                </p>
                <h2 style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: '#FFFFFF',
                  margin: '0 0 8px',
                  letterSpacing: '-0.01em',
                }}>
                  {activePhase.title}
                </h2>
                <p style={{
                  fontSize: 14,
                  color: '#04CCFD',
                  fontStyle: 'italic',
                  margin: '0 0 12px',
                }}>
                  "{activePhase.tagline}"
                </p>
                <p style={{
                  fontSize: 13,
                  color: 'var(--text-muted)',
                  lineHeight: 1.75,
                  maxWidth: 680,
                  margin: 0,
                }}>
                  {activePhase.why}
                </p>
              </div>

              <div style={{
                background: 'var(--bg-base)',
                border: '1px solid var(--border)',
                borderLeft: '2px solid #04CCFD',
                borderRadius: 4,
                padding: '10px 14px',
                marginTop: 20,
              }}>
                <span style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: '#04CCFD', letterSpacing: '0.1em' }}>
                  ITERATION 3 / 6 —
                </span>
                <span style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: 'var(--text-dim)', marginLeft: 8 }}>
                  Skills, projects, and resources arrive in Iteration 4.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ── STAYING CURRENT TAB ── */}
        {activeTab === 'staying-current' && (
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 8, padding: '28px' }}>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: '#04CCFD', letterSpacing: '0.2em', marginBottom: 12 }}>STAYING CURRENT</p>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>Full cadence content arrives in Iteration 5.</p>
          </div>
        )}

        {/* ── GAP ANALYSIS TAB ── */}
        {activeTab === 'gap-analysis' && (
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border)', borderRadius: 8, padding: '28px' }}>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: '#04CCFD', letterSpacing: '0.2em', marginBottom: 12 }}>GAP ANALYSIS</p>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>Full analysis content arrives in Iteration 5.</p>
          </div>
        )}

      </main>
    </div>
  );
}
