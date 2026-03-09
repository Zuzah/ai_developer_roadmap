// src/components/PhaseNav.tsx
// 6-phase selector grid. Shows phase label, title, week range.
// Completion % comes from progress prop — wired in Iteration 6.

import type { Phase } from '../types';

interface PhaseNavProps {
  phases: Phase[];
  activePhaseId: number;
  onPhaseSelect: (id: number) => void;
  completionByPhase: Record<number, number>; // phaseId → 0–100
}

export default function PhaseNav({
  phases,
  activePhaseId,
  onPhaseSelect,
  completionByPhase,
}: PhaseNavProps) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 8,
      marginBottom: 24,
    }}>
      {phases.map(phase => {
        const isActive = phase.id === activePhaseId;
        const pct = completionByPhase[phase.id] ?? 0;

        return (
          <button
            key={phase.id}
            onClick={() => onPhaseSelect(phase.id)}
            style={{
              background: isActive ? 'rgba(4,204,253,0.08)' : 'var(--bg-surface)',
              border: `1px solid ${isActive ? '#04CCFD' : 'var(--border)'}`,
              borderRadius: 6,
              padding: '12px 14px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.15s',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Progress bar underlay */}
            {pct > 0 && (
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: `${pct}%`,
                height: 2,
                background: '#04CCFD',
                opacity: 0.6,
                transition: 'width 0.3s ease',
              }} />
            )}

            {/* Phase label + weeks */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 5,
            }}>
              <span style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 10,
                color: '#04CCFD',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              }}>
                {phase.label}
              </span>
              {pct > 0 && (
                <span style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: 10,
                  color: pct === 100 ? '#04CCFD' : 'var(--text-dim)',
                }}>
                  {pct}%
                </span>
              )}
            </div>

            {/* Phase title */}
            <p style={{
              fontSize: 12,
              color: isActive ? '#FFFFFF' : 'var(--text-muted)',
              fontWeight: isActive ? 600 : 400,
              lineHeight: 1.35,
              margin: '0 0 4px',
            }}>
              {phase.title}
            </p>

            {/* Week range */}
            <p style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 10,
              color: 'var(--text-dim)',
              margin: 0,
            }}>
              {phase.weeks}
            </p>
          </button>
        );
      })}
    </div>
  );
}
