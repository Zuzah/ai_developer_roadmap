// src/components/PhaseView.tsx — theme-aware

import { useState } from 'react';
import TaskCard from './TaskCard';
import type { Phase, ProgressState, Week } from '../types';
import { getWeekStartDate, formatDate } from '../types';

interface PhaseViewProps {
  phase: Phase;
  progress: ProgressState;
  onToggle: (taskId: string) => void;
  currentWeekNumber: number;
}

export default function PhaseView({ phase, progress, onToggle, currentWeekNumber }: PhaseViewProps) {
  const defaultWeek = phase.weeks.find(w => w.weekNumber === currentWeekNumber) ?? phase.weeks[0];
  const [activeWeekId, setActiveWeekId] = useState(defaultWeek.id);
  const activeWeek: Week = phase.weeks.find(w => w.id === activeWeekId) ?? phase.weeks[0];

  const totalTasks     = activeWeek.tasks.length;
  const completedCount = activeWeek.tasks.filter(t => progress.completedTasks[t.id]).length;
  const pct            = totalTasks > 0 ? Math.round((completedCount / totalTasks) * 100) : 0;
  const weekComplete   = pct === 100;

  const weekStartDate = progress.startDate
    ? formatDate(getWeekStartDate(progress.startDate, activeWeek.weekNumber))
    : null;

  return (
    <div style={{
      background: 'var(--bg-surface)',
      border: '1px solid var(--border)',
      borderTop: '2px solid var(--accent)',
      borderRadius: '0 0 8px 8px',
      boxShadow: 'var(--shadow-md)',
    }}>

      {/* ── Phase header ── */}
      <div style={{
        padding: '20px 24px 0',
        borderBottom: '1px solid var(--border)',
      }}>
        <p style={{
          fontFamily: 'Courier New, monospace',
          fontSize: 10,
          color: 'var(--accent)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 6,
        }}>
          {phase.label} · {phase.weekRange}
        </p>
        <h2 style={{
          fontSize: 'clamp(16px, 2.5vw, 22px)',
          fontWeight: 700,
          color: 'var(--text-primary)',
          margin: '0 0 6px',
        }}>
          {phase.title}
        </h2>
        <p style={{
          fontSize: 13,
          color: 'var(--accent)',
          fontStyle: 'italic',
          margin: '0 0 16px',
          opacity: 0.8,
        }}>
          "{phase.tagline}"
        </p>
        <p style={{
          fontSize: 12,
          color: 'var(--text-muted)',
          lineHeight: 1.75,
          margin: '0 0 20px',
          maxWidth: 680,
        }}>
          {phase.why}
        </p>

        {/* ── Week tabs ── */}
        <div style={{ display: 'flex', gap: 4, overflowX: 'auto' }}>
          {phase.weeks.map(week => {
            const active    = week.id === activeWeekId;
            const isCurrent = week.weekNumber === currentWeekNumber;
            const wDone     = week.tasks.filter(t => progress.completedTasks[t.id]).length;
            const wPct      = week.tasks.length > 0 ? Math.round((wDone / week.tasks.length) * 100) : 0;

            return (
              <button
                key={week.id}
                onClick={() => setActiveWeekId(week.id)}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 4,
                  padding: '8px 16px 10px',
                  background: active ? 'var(--bg-raised)' : 'transparent',
                  border: 'none',
                  borderTop: `2px solid ${active ? 'var(--accent)' : 'transparent'}`,
                  borderBottom: active ? '1px solid var(--bg-raised)' : 'none',
                  cursor: 'pointer',
                  marginBottom: active ? -1 : 0,
                  flexShrink: 0,
                }}
              >
                {isCurrent && (
                  <div style={{
                    position: 'absolute',
                    top: 4, right: 6,
                    width: 5, height: 5,
                    borderRadius: '50%',
                    background: 'var(--accent)',
                    boxShadow: 'var(--accent-glow)',
                  }} />
                )}
                <span style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: 10,
                  color: active ? 'var(--accent)' : isCurrent ? 'var(--text-muted)' : 'var(--text-dim)',
                  letterSpacing: '0.1em',
                  whiteSpace: 'nowrap',
                }}>
                  W{week.weekNumber}
                </span>
                <div style={{
                  width: 28, height: 2,
                  background: 'var(--border)',
                  borderRadius: 1,
                  overflow: 'hidden',
                }}>
                  <div style={{
                    height: '100%',
                    width: `${wPct}%`,
                    background: 'var(--accent)',
                    borderRadius: 1,
                  }} />
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Active week content ── */}
      <div style={{ padding: '20px 24px 24px' }}>

        {/* Week meta */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          gap: 16,
          flexWrap: 'wrap',
          marginBottom: 16,
        }}>
          <div>
            <p style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 10,
              color: activeWeek.weekNumber === currentWeekNumber ? 'var(--accent)' : 'var(--text-dim)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 6,
            }}>
              Week {activeWeek.weekNumber}
              {activeWeek.weekNumber === currentWeekNumber && ' · Current'}
              {weekStartDate && ` · Starts ${weekStartDate}`}
            </p>
            <h3 style={{
              fontSize: 16,
              fontWeight: 600,
              color: 'var(--text-primary)',
              margin: '0 0 8px',
            }}>
              {activeWeek.title}
            </h3>
            <p style={{
              fontSize: 12,
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 560,
            }}>
              <strong style={{ color: 'var(--text-primary)', opacity: 0.7, fontWeight: 600 }}>Objective:</strong>{' '}
              {activeWeek.objective}
            </p>
          </div>

          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 22,
              fontWeight: 700,
              color: weekComplete ? '#34D399' : 'var(--accent)',
              lineHeight: 1,
              marginBottom: 4,
            }}>
              {pct}%
            </div>
            <div style={{ fontFamily: 'Courier New, monospace', fontSize: 10, color: 'var(--text-dim)', marginBottom: 4 }}>
              {completedCount}/{totalTasks} tasks
            </div>
            <div style={{ fontFamily: 'Courier New, monospace', fontSize: 10, color: 'var(--text-dim)' }}>
              ~{activeWeek.hoursEstimate}
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div style={{
          height: 3, background: 'var(--border)', borderRadius: 2,
          overflow: 'hidden', marginBottom: 20,
        }}>
          <div style={{
            height: '100%',
            width: `${pct}%`,
            background: weekComplete ? '#34D399' : 'var(--accent)',
            borderRadius: 2,
            transition: 'width 0.4s',
          }} />
        </div>

        {/* Tasks */}
        {activeWeek.tasks.map((task, i) => (
          <TaskCard
            key={task.id}
            task={task}
            index={i + 1}
            completed={progress.completedTasks[task.id] ?? false}
            onToggle={onToggle}
          />
        ))}
      </div>
    </div>
  );
}
