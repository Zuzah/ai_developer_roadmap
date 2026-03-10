// src/components/PhaseNav.tsx — Iteration 6
// Phase selector grid with completion % derived from task completions.

import type { Phase } from '../types';

interface PhaseNavProps {
  phases: Phase[];
  activePhaseId: number;
  onPhaseSelect: (id: number) => void;
  completionByPhase: Record<number, number>;
}

export default function PhaseNav({ phases, activePhaseId, onPhaseSelect, completionByPhase }: PhaseNavProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 6,
      marginBottom: 0,
    }}>
      {phases.map(phase => {
        const active = phase.id === activePhaseId;
        const pct    = completionByPhase[phase.id] ?? 0;
        const totalTasks = phase.weeks.flatMap(w => w.tasks).length;

        return (
          <button
            key={phase.id}
            onClick={() => onPhaseSelect(phase.id)}
            style={{
              background: active ? 'var(--bg-raised)' : 'var(--bg-surface)',
              border: `1px solid ${active ? '#04CCFD44' : 'var(--border)'}`,
              borderBottom: active ? '1px solid var(--bg-raised)' : '1px solid var(--border)',
              borderRadius: active ? '6px 6px 0 0' : 6,
              padding: '12px 14px 10px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.15s',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 9,
                color: active ? '#04CCFD' : 'var(--text-dim)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
              }}>
                {phase.label}
              </span>
              <span style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 9,
                color: pct > 0 ? '#04CCFD' : 'var(--text-dim)',
              }}>
                {pct}%
              </span>
            </div>

            <p style={{
              fontSize: 11,
              color: active ? '#FFFFFF' : 'var(--text-muted)',
              margin: '0 0 8px',
              lineHeight: 1.4,
            }}>
              {phase.title}
            </p>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
              <span style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 9,
                color: 'var(--text-dim)',
              }}>
                {phase.weekRange} · {totalTasks} tasks
              </span>
            </div>

            {/* Progress bar */}
            <div style={{
              height: 2,
              background: 'var(--border)',
              borderRadius: 1,
              overflow: 'hidden',
            }}>
              <div style={{
                height: '100%',
                width: `${pct}%`,
                background: '#04CCFD',
                borderRadius: 1,
                transition: 'width 0.3s',
              }} />
            </div>
          </button>
        );
      })}
    </div>
  );
}
