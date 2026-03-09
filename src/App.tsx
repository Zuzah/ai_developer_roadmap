// src/App.tsx — Iteration 4 of 6
// Wires: Header + PhaseNav + PhaseView (full roadmap tab functional)
// Progress state is stub zeros — localStorage arrives in Iteration 6.
// StayingCurrent + GapAnalysis components arrive in Iteration 5.

import { useState } from 'react';
import Header from './components/Header';
import PhaseNav from './components/PhaseNav';
import PhaseView from './components/PhaseView';
import { phases } from './data/phases';
import type { ProgressState } from './types';

type Tab = 'roadmap' | 'staying-current' | 'gap-analysis';

// Stub progress — replaced by useProgress hook in Iteration 6
const EMPTY_PROGRESS: ProgressState = {
  completedSkills: {},
  completedProjects: {},
};

export default function App() {
  const [activeTab, setActiveTab]     = useState<Tab>('roadmap');
  const [activePhaseId, setActivePhaseId] = useState<number>(1);

  // Stub handlers — wired to localStorage in Iteration 6
  const [progress, setProgress] = useState<ProgressState>(EMPTY_PROGRESS);

  const handleSkillToggle = (id: string) => {
    setProgress(prev => ({
      ...prev,
      completedSkills: {
        ...prev.completedSkills,
        [id]: !prev.completedSkills[id],
      },
    }));
  };

  const handleProjectToggle = (id: string) => {
    setProgress(prev => ({
      ...prev,
      completedProjects: {
        ...prev.completedProjects,
        [id]: !prev.completedProjects[id],
      },
    }));
  };

  const activePhase = phases.find(p => p.id === activePhaseId)!;

  // Compute per-phase completion % for PhaseNav progress bars
  const completionByPhase: Record<number, number> = {};
  phases.forEach(phase => {
    const total  = phase.skills.length + phase.projects.length;
    if (total === 0) { completionByPhase[phase.id] = 0; return; }
    const done =
      phase.skills.filter(s  => progress.completedSkills[s.id]).length +
      phase.projects.filter(p => progress.completedProjects[p.id]).length;
    completionByPhase[phase.id] = Math.round((done / total) * 100);
  });

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Header activeTab={activeTab} onTabChange={setActiveTab} />

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '32px 32px 64px' }}>

        {/* ── ROADMAP TAB ── */}
        {activeTab === 'roadmap' && (
          <div>
            <PhaseNav
              phases={phases}
              activePhaseId={activePhaseId}
              onPhaseSelect={setActivePhaseId}
              completionByPhase={completionByPhase}
            />
            <PhaseView
              phase={activePhase}
              progress={progress}
              onSkillToggle={handleSkillToggle}
              onProjectToggle={handleProjectToggle}
            />
          </div>
        )}

        {/* ── STAYING CURRENT TAB — full component in Iteration 5 ── */}
        {activeTab === 'staying-current' && (
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '28px 28px',
          }}>
            <p style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 11,
              color: '#04CCFD',
              letterSpacing: '0.2em',
              marginBottom: 12,
            }}>
              STAYING CURRENT
            </p>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
              Daily / weekly / monthly cadence and ADHD principles arrive in Iteration 5.
            </p>
          </div>
        )}

        {/* ── GAP ANALYSIS TAB — full component in Iteration 5 ── */}
        {activeTab === 'gap-analysis' && (
          <div style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            padding: '28px 28px',
          }}>
            <p style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 11,
              color: '#04CCFD',
              letterSpacing: '0.2em',
              marginBottom: 12,
            }}>
              GAP ANALYSIS
            </p>
            <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
              LinkedIn post analysis and senior engineer advantage arrive in Iteration 5.
            </p>
          </div>
        )}

      </main>
    </div>
  );
}
