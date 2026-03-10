// src/App.tsx — Iteration 7 (final)
// All 4 tabs fully functional. App is complete.

import { useState } from 'react';
import { useProgress } from './hooks/useProgress';
import { phases } from './data/phases';
import { getCurrentWeekNumber } from './types';
import Onboarding from './components/Onboarding';
import Header from './components/Header';
import PhaseNav from './components/PhaseNav';
import PhaseView from './components/PhaseView';
import ThisWeek from './components/ThisWeek';
import StayingCurrent from './components/StayingCurrent';
import GapAnalysis from './components/GapAnalysis';

type Tab = 'this-week' | 'roadmap' | 'staying-current' | 'gap-analysis';

export default function App() {
  const { progress, setStartDate, toggleTask } = useProgress();
  const [activeTab, setActiveTab]              = useState<Tab>('this-week');
  const [activePhaseId, setActivePhaseId]      = useState<number>(1);

  // ── Onboarding gate ──────────────────────────────────────────
  if (!progress.startDate) {
    return <Onboarding onComplete={setStartDate} />;
  }

  const currentWeek = getCurrentWeekNumber(progress.startDate);

  // Auto-set active phase to the one containing the current week
  // (only on first render — user can navigate freely after)
  const currentPhaseId = phases.find(p =>
    p.weeks.some(w => w.weekNumber === currentWeek)
  )?.id ?? 1;

  const displayPhaseId = activePhaseId;
  const activePhase    = phases.find(p => p.id === displayPhaseId)!;

  // Per-phase completion % for PhaseNav
  const completionByPhase: Record<number, number> = {};
  phases.forEach(phase => {
    const allTasks = phase.weeks.flatMap(w => w.tasks);
    const total    = allTasks.length;
    if (total === 0) { completionByPhase[phase.id] = 0; return; }
    const done     = allTasks.filter(t => progress.completedTasks[t.id]).length;
    completionByPhase[phase.id] = Math.round((done / total) * 100);
  });

  // When user clicks "This Week" tab, also sync the phase selector
  function handleTabChange(tab: Tab) {
    if (tab === 'this-week') {
      setActivePhaseId(currentPhaseId);
    }
    setActiveTab(tab);
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)' }}>
      <Header activeTab={activeTab} onTabChange={handleTabChange} />

      <main style={{ maxWidth: 960, margin: '0 auto', padding: '32px 32px 64px' }}>

        {activeTab === 'this-week' && (
          <ThisWeek
            progress={progress}
            onToggle={toggleTask}
          />
        )}

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
              onToggle={toggleTask}
              currentWeekNumber={currentWeek}
            />
          </div>
        )}

        {activeTab === 'staying-current' && <StayingCurrent />}
        {activeTab === 'gap-analysis'    && <GapAnalysis />}

      </main>
    </div>
  );
}
