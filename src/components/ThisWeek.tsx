// src/components/ThisWeek.tsx — theme-aware

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
  if (!startDate) return null;

  const currentWeekNum = getCurrentWeekNumber(startDate);
  const currentWeek: Week | undefined = phases.flatMap(p => p.weeks).find(w => w.weekNumber === currentWeekNum);
  const currentPhase = currentWeek ? phases.find(p => p.id === currentWeek.phaseId) : null;

  const weekStart = getWeekStartDate(startDate, currentWeekNum);
  const weekEnd   = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6);
  const dateRange = `${formatDate(weekStart)} → ${formatDate(weekEnd)}`;

  const requiredTasks  = currentWeek?.tasks.filter(t => t.required) ?? [];
  const allTasks       = currentWeek?.tasks ?? [];
  const completedReq   = requiredTasks.filter(t => completedTasks[t.id]).length;
  const completedAll   = allTasks.filter(t => completedTasks[t.id]).length;
  const pct            = requiredTasks.length > 0 ? Math.round((completedReq / requiredTasks.length) * 100) : 0;

  const nextWeekNum = Math.min(currentWeekNum + 1, 24);
  const nextWeek = phases.flatMap(p => p.weeks).find(w => w.weekNumber === nextWeekNum);

  const totalTasks  = phases.flatMap(p => p.weeks).flatMap(w => w.tasks).length;
  const doneTasks   = Object.values(completedTasks).filter(Boolean).length;
  const overallPct  = Math.round((doneTasks / totalTasks) * 100);
  const weekComplete = pct === 100;
  const GREEN = '#34D399';

  return (
    <div>
      {/* ── Week identity card ── */}
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderLeft: `3px solid ${weekComplete ? GREEN : 'var(--accent)'}`,
        borderRadius: 8,
        padding: '20px 24px',
        marginBottom: 12,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 16,
        flexWrap: 'wrap',
        boxShadow: 'var(--shadow-sm)',
      }}>
        <div>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 10,
            color: weekComplete ? GREEN : 'var(--accent)',
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
            color: 'var(--text-primary)',
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
              <strong style={{ color: 'var(--text-primary)', opacity: 0.7, fontWeight: 600 }}>This week:</strong>{' '}
              {currentWeek.objective}
            </p>
          )}
        </div>

        <div style={{ textAlign: 'right', flexShrink: 0 }}>
          <div style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 32,
            fontWeight: 700,
            color: weekComplete ? GREEN : 'var(--accent)',
            lineHeight: 1,
            marginBottom: 4,
          }}>
            {pct}%
          </div>
          <div style={{ fontFamily: 'Courier New, monospace', fontSize: 10, color: 'var(--text-dim)', marginBottom: 4 }}>
            {completedReq}/{requiredTasks.length} required
          </div>
          {allTasks.length > requiredTasks.length && (
            <div style={{ fontFamily: 'Courier New, monospace', fontSize: 10, color: 'var(--text-dim)' }}>
              {completedAll - completedReq} bonus done
            </div>
          )}
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
          background: weekComplete ? GREEN : 'var(--accent)',
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

      {/* ── Stats row ── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
        gap: 8,
        marginBottom: nextWeek ? 12 : 0,
      }}>
        {[
          { label: 'Overall Progress', value: `${overallPct}%`, sub: `${doneTasks}/${totalTasks} tasks`, accent: true },
          { label: 'Weeks Remaining',  value: `${Math.max(24 - currentWeekNum, 0)}`, sub: 'of 24 total', accent: false },
          { label: 'This Week',        value: currentWeek?.hoursEstimate ?? '—', sub: 'estimated', accent: false },
        ].map(({ label, value, sub, accent }) => (
          <div key={label} style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 6,
            padding: '14px 16px',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <p style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 9,
              color: 'var(--text-dim)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}>
              {label}
            </p>
            <div style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 22,
              fontWeight: 700,
              color: accent ? 'var(--accent)' : 'var(--text-primary)',
              marginBottom: 4,
            }}>
              {value}
            </div>
            {accent && (
              <div style={{
                height: 2, background: 'var(--border)', borderRadius: 1,
                overflow: 'hidden', marginBottom: 6,
              }}>
                <div style={{
                  height: '100%',
                  width: `${overallPct}%`,
                  background: 'var(--accent)',
                  borderRadius: 1,
                }} />
              </div>
            )}
            <div style={{ fontSize: 11, color: 'var(--text-dim)' }}>{sub}</div>
          </div>
        ))}
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
          boxShadow: 'var(--shadow-sm)',
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
            <p style={{ fontSize: 13, color: 'var(--text-muted)', margin: 0 }}>
              {nextWeek.title}
            </p>
          </div>
          <span style={{ fontFamily: 'Courier New, monospace', fontSize: 10, color: 'var(--text-dim)', flexShrink: 0 }}>
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
          <p style={{ fontFamily: 'Courier New, monospace', fontSize: 12, color: GREEN, letterSpacing: '0.15em', marginBottom: 8 }}>
            ROADMAP COMPLETE
          </p>
          <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
            24 weeks. 10 projects. You did the work.<br />Time to apply.
          </p>
        </div>
      )}
    </div>
  );
}
