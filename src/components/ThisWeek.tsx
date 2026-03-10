// src/components/ThisWeek.tsx
// The daily driver tab. Shows exactly what to do this week — nothing else.
// Designed for ADHD-friendly focus: one week, ordered tasks, no noise.

import TaskCard from './TaskCard';
import { phases } from '../data/phases';
import type { ProgressState, Week } from '../types';
import { getCurrentWeekNumber, getWeekStartDate, formatDate } from '../types';

interface ThisWeekProps {
  progress: ProgressState;
  onToggle: (taskId: string) => void;
}

export default function ThisWeek({ progress, onToggle }: ThisWeekProps) {
  const { startDate, completedTasks } = progress;

  if (!startDate) return null; // guarded at App level but safety check

  const currentWeekNum = getCurrentWeekNumber(startDate);

  // Find the current week object across all phases
  const currentWeek: Week | undefined = phases
    .flatMap(p => p.weeks)
    .find(w => w.weekNumber === currentWeekNum);

  const currentPhase = currentWeek
    ? phases.find(p => p.id === currentWeek.phaseId)
    : null;

  // Date range display
  const weekStart = getWeekStartDate(startDate, currentWeekNum);
  const weekEnd   = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  const dateRange = `${formatDate(weekStart)} → ${formatDate(weekEnd)}`;

  // Completion stats
  const requiredTasks  = currentWeek?.tasks.filter(t => t.required) ?? [];
  const allTasks       = currentWeek?.tasks ?? [];
  const completedReq   = requiredTasks.filter(t => completedTasks[t.id]).length;
  const completedAll   = allTasks.filter(t => completedTasks[t.id]).length;
  const pct            = requiredTasks.length > 0
    ? Math.round((completedReq / requiredTasks.length) * 100)
    : 0;

  // Look-ahead: next week info
  const nextWeekNum = Math.min(currentWeekNum + 1, 24);
  const nextWeek = phases.flatMap(p => p.weeks).find(w => w.weekNumber === nextWeekNum);

  // Overall roadmap progress
  const totalTasks = phases.flatMap(p => p.weeks).flatMap(w => w.tasks).length;
  const doneTasks  = Object.values(completedTasks).filter(Boolean).length;
  const overallPct = Math.round((doneTasks / totalTasks) * 100);

  const weekComplete = pct === 100;

  return (
    <div>

      {/* ── Top bar: week identity ── */}
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderLeft: weekComplete ? '3px solid #34d399' : '3px solid #04CCFD',
        borderRadius: 8,
        padding: '20px 24px',
        marginBottom: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 16,
        flexWrap: 'wrap',
      }}>
        <div>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 10,
            color: weekComplete ? '#34d399' : '#04CCFD',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 6,
          }}>
            {weekComplete ? '✓ Week Complete · ' : ''}
            Week {currentWeekNum} of 24 · {currentPhase?.label ?? ''}
          </p>
          <h2 style={{
            fontSize: 'clamp(16px, 2.5vw, 22px)',
            fontWeight: 700,
            color: '#FFFFFF',
            margin: '0 0 6px',
          }}>
            {currentWeek?.title ?? 'Week not found'}
          </h2>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 11,
            color: 'var(--text-dim)',
            margin: '0 0 10px',
          }}>
            {dateRange}
          </p>
          {currentWeek && (
            <p style={{
              fontSize: 12,
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              margin: 0,
              maxWidth: 520,
            }}>
              <strong style={{ color: 'rgba(255,255,255,0.6)' }}>This week:</strong>{' '}
              {currentWeek.objective}
            </p>
          )}
        </div>

        {/* Completion ring — text-based */}
        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 32,
            fontWeight: 700,
            color: weekComplete ? '#34d399' : '#04CCFD',
            lineHeight: 1,
            marginBottom: 4,
          }}>
            {pct}%
          </div>
          <div style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 10,
            color: 'var(--text-dim)',
            marginBottom: 4,
          }}>
            {completedReq}/{requiredTasks.length} required
          </div>
          {allTasks.length > requiredTasks.length && (
            <div style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 10,
              color: 'var(--text-dim)',
            }}>
              {completedAll - completedReq} bonus done
            </div>
          )}
        </div>
      </div>

      {/* Progress bar */}
      <div style={{
        height: 3,
        background: 'var(--border)',
        borderRadius: 2,
        overflow: 'hidden',
        marginBottom: 20,
      }}>
        <div style={{
          height: '100%',
          width: `${pct}%`,
          background: weekComplete ? '#34d399' : '#04CCFD',
          borderRadius: 2,
          transition: 'width 0.4s',
        }} />
      </div>

      {/* ── Task list ── */}
      {currentWeek && (
        <div style={{ marginBottom: 24 }}>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 10,
            color: 'var(--text-dim)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 12,
          }}>
            Tasks — Do in Order · ~{currentWeek.hoursEstimate}
          </p>

          {currentWeek.tasks.map((task, i) => (
            <TaskCard
              key={task.id}
              task={task}
              index={i + 1}
              completed={completedTasks[task.id] ?? false}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}

      {/* ── Bottom stats row ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 8,
        marginBottom: nextWeek ? 20 : 0,
      }}>
        {/* Overall progress */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: 6,
          padding: '14px 16px',
        }}>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 9,
            color: 'var(--text-dim)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            Overall Progress
          </p>
          <div style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 22,
            fontWeight: 700,
            color: '#04CCFD',
            marginBottom: 4,
          }}>
            {overallPct}%
          </div>
          <div style={{
            height: 2,
            background: 'var(--border)',
            borderRadius: 1,
            overflow: 'hidden',
          }}>
            <div style={{
              height: '100%',
              width: `${overallPct}%`,
              background: '#04CCFD',
              borderRadius: 1,
            }} />
          </div>
        </div>

        {/* Weeks remaining */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: 6,
          padding: '14px 16px',
        }}>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 9,
            color: 'var(--text-dim)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            Weeks Remaining
          </p>
          <div style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 22,
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: 4,
          }}>
            {Math.max(24 - currentWeekNum, 0)}
          </div>
          <div style={{
            fontSize: 11,
            color: 'var(--text-dim)',
          }}>
            of 24 total
          </div>
        </div>

        {/* Total time this week */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: 6,
          padding: '14px 16px',
        }}>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 9,
            color: 'var(--text-dim)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginBottom: 8,
          }}>
            This Week
          </p>
          <div style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 22,
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: 4,
          }}>
            {currentWeek?.hoursEstimate ?? '—'}
          </div>
          <div style={{
            fontSize: 11,
            color: 'var(--text-dim)',
          }}>
            estimated
          </div>
        </div>
      </div>

      {/* ── Up next ── */}
      {nextWeek && currentWeekNum < 24 && (
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderRadius: 6,
          padding: '14px 18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}>
          <div>
            <p style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 9,
              color: 'var(--text-dim)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 4,
            }}>
              Up Next · Week {nextWeekNum}
            </p>
            <p style={{
              fontSize: 13,
              color: 'var(--text-muted)',
              margin: 0,
            }}>
              {nextWeek.title}
            </p>
          </div>
          <span style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 10,
            color: 'var(--text-dim)',
            flexShrink: 0,
          }}>
            {nextWeek.tasks.length} tasks →
          </span>
        </div>
      )}

      {currentWeekNum === 24 && weekComplete && (
        <div style={{
          background: 'rgba(52,211,153,0.08)',
          border: '1px solid rgba(52,211,153,0.3)',
          borderRadius: 8,
          padding: '24px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 12,
            color: '#34d399',
            letterSpacing: '0.15em',
            marginBottom: 8,
          }}>
            ROADMAP COMPLETE
          </p>
          <p style={{
            fontSize: 14,
            color: 'var(--text-muted)',
            lineHeight: 1.7,
            margin: 0,
          }}>
            24 weeks. 10 projects. You did the work.<br />
            Time to apply.
          </p>
        </div>
      )}
    </div>
  );
}
