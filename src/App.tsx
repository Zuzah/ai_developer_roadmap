// src/App.tsx — Iteration 6
// Shows Onboarding on first run (no startDate in localStorage).
// After onboarding: main 4-tab app. Full task views arrive in Iteration 7.

import { useState } from 'react';
import { useProgress } from './hooks/useProgress';
import { phases } from './data/phases';
import { getCurrentWeekNumber } from './types';
import Onboarding from './components/Onboarding';
import Header from './components/Header';
import PhaseNav from './components/PhaseNav';
import StayingCurrent from './components/StayingCurrent';
import GapAnalysis from './components/GapAnalysis';

type Tab = 'this-week' | 'roadmap' | 'staying-current' | 'gap-analysis';

export default function App() {
  const { progress, setStartDate } = useProgress();
  const [activeTab, setActiveTab]         = useState<Tab>('this-week');
  const [activePhaseId, setActivePhaseId] = useState<number>(1);

  // ── Onboarding gate ──────────────────────────────────────────
  if (!progress.startDate) {
    return <Onboarding onComplete={setStartDate} />;
  }

  const currentWeek = getCurrentWeekNumber(progress.startDate);

  // Per-phase completion % for PhaseNav
  const completionByPhase: Record<number, number> = {};
  phases.forEach(phase => {
    const allTasks = phase.weeks.flatMap(w => w.tasks);
    const total    = allTasks.length;
    if (total === 0) { completionByPhase[phase.id] = 0; return; }
    const done     = allTasks.filter(t => progress.completedTasks[t.id]).length;
    completionByPhase[phase.id] = Math.round((done / total) * 100);
  });

  const activePhase = phases.find(p => p.id === activePhaseId)!;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '32px 32px 64px' }}>

        {/* ── THIS WEEK — full component arrives Iteration 7 ── */}
        {activeTab === 'this-week' && (
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderTop: '2px solid #04CCFD',
            borderRadius: 8,
            padding: '28px',
          }}>
            <p style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: '#04CCFD', letterSpacing: '0.2em', marginBottom: 12 }}>
              WEEK {currentWeek} OF 24
            </p>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
              Full "This Week" task view arrives in Iteration 7. Your current week is calculated from your start date: <strong style={{ color: '#FFFFFF' }}>{progress.startDate}</strong>.
            </p>
          </div>
        )}

        {/* ── ROADMAP — full task view arrives Iteration 7 ── */}
        {activeTab === 'roadmap' && (
          <div>
            <PhaseNav
              phases={phases}
              activePhaseId={activePhaseId}
              onPhaseSelect={setActivePhaseId}
              completionByPhase={completionByPhase}
            />
            <div style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderTop: '2px solid #04CCFD',
              borderRadius: '0 0 8px 8px',
              padding: '28px',
            }}>
              <p style={{ fontFamily: 'Courier New, monospace', fontSize: 11, color: '#04CCFD', letterSpacing: '0.2em', marginBottom: 12 }}>
                {activePhase.label.toUpperCase()} — {activePhase.weekRange.toUpperCase()}
              </p>
              <h2 style={{ fontSize: 22, color: '#FFFFFF', margin: '0 0 8px' }}>{activePhase.title}</h2>
              <p style={{ fontSize: 13, color: '#04CCFD', fontStyle: 'italic', margin: '0 0 14px' }}>"{activePhase.tagline}"</p>
              <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.8, margin: '0 0 16px', maxWidth: 680 }}>{activePhase.why}</p>
              <p style={{ fontSize: 12, color: 'var(--text-dim)', fontFamily: 'Courier New, monospace' }}>
                Week-by-week task view arrives in Iteration 7 — {activePhase.weeks.flatMap(w => w.tasks).length} tasks across {activePhase.weeks.length} weeks.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'staying-current' && <StayingCurrent />}
        {activeTab === 'gap-analysis'    && <GapAnalysis />}

      </main>
    </div>
  );
}
