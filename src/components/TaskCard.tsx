// src/components/TaskCard.tsx
// Individual task row with: type badge, checkbox, expand/collapse, resource link.
// Used in both PhaseView (all weeks) and ThisWeek (current week only).

import { useState } from 'react';
import type { Task, TaskType } from '../types';

const TYPE_META: Record<TaskType, { label: string; color: string; icon: string }> = {
  setup:    { label: 'Setup',    color: '#fb923c', icon: '⚙' },
  read:     { label: 'Read',     color: '#a78bfa', icon: '📖' },
  watch:    { label: 'Watch',    color: '#34d399', icon: '▶' },
  build:    { label: 'Build',    color: '#04CCFD', icon: '⚡' },
  practice: { label: 'Practice', color: '#f59e0b', icon: '🔁' },
  write:    { label: 'Write',    color: '#f472b6', icon: '✍' },
};

interface TaskCardProps {
  task: Task;
  index: number;          // 1-based display number
  completed: boolean;
  onToggle: (id: string) => void;
}

export default function TaskCard({ task, index, completed, onToggle }: TaskCardProps) {
  const [open, setOpen] = useState(false);
  const meta = TYPE_META[task.type];
  const mins = task.estimatedMinutes;
  const timeLabel = mins >= 60
    ? `${Math.floor(mins / 60)}h${mins % 60 ? ` ${mins % 60}m` : ''}`
    : `${mins}m`;

  return (
    <div style={{
      background: completed ? 'rgba(4,204,253,0.03)' : 'var(--bg-base)',
      border: `1px solid ${completed ? 'rgba(4,204,253,0.15)' : 'var(--border)'}`,
      borderLeft: `3px solid ${completed ? '#04CCFD44' : meta.color}`,
      borderRadius: 6,
      overflow: 'hidden',
      marginBottom: 6,
      transition: 'border-color 0.2s, background 0.2s',
    }}>

      {/* ── Header row ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '11px 14px',
        cursor: 'pointer',
      }}>

        {/* Step number + checkbox combined */}
        <div
          onClick={() => onToggle(task.id)}
          title={completed ? 'Mark incomplete' : 'Mark complete'}
          style={{
            width: 24,
            height: 24,
            borderRadius: 4,
            border: `1.5px solid ${completed ? '#04CCFD' : 'var(--text-dim)'}`,
            background: completed ? '#04CCFD' : 'transparent',
            cursor: 'pointer',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s',
          }}
        >
          {completed ? (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="#02132F" strokeWidth="1.8"
                strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <span style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 10,
              color: 'var(--text-dim)',
              fontWeight: 700,
            }}>{index}</span>
          )}
        </div>

        {/* Title — clicking expands */}
        <span
          onClick={() => setOpen(o => !o)}
          style={{
            flex: 1,
            fontSize: 13,
            color: completed ? 'var(--text-muted)' : '#FFFFFF',
            textDecoration: completed ? 'line-through' : 'none',
            textDecorationColor: 'var(--text-dim)',
            lineHeight: 1.4,
            userSelect: 'none',
          }}
        >
          {task.title}
          {!task.required && (
            <span style={{
              marginLeft: 8,
              fontFamily: 'Courier New, monospace',
              fontSize: 9,
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
            }}>BONUS</span>
          )}
        </span>

        {/* Right side meta */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          flexShrink: 0,
        }}
          onClick={() => setOpen(o => !o)}
        >
          {/* Type badge */}
          <span style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 9,
            color: meta.color,
            background: `${meta.color}18`,
            border: `1px solid ${meta.color}33`,
            padding: '2px 7px',
            borderRadius: 3,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            {meta.icon} {meta.label}
          </span>

          {/* Time */}
          <span style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 10,
            color: 'var(--text-dim)',
            minWidth: 28,
            textAlign: 'right',
          }}>
            {timeLabel}
          </span>

          {/* Expand chevron */}
          <span style={{
            fontSize: 14,
            color: open ? '#04CCFD' : 'var(--text-dim)',
            transform: open ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.15s, color 0.15s',
            userSelect: 'none',
            lineHeight: 1,
          }}>
            ▾
          </span>
        </div>
      </div>

      {/* ── Expanded detail ── */}
      {open && (
        <div style={{
          borderTop: '1px solid rgba(4,204,253,0.1)',
          padding: '14px 14px 16px 48px',
          background: 'rgba(0,0,0,0.15)',
        }}>
          <p style={{
            fontSize: 13,
            color: 'var(--text-muted)',
            lineHeight: 1.8,
            margin: 0,
            marginBottom: task.resource ? 14 : 0,
          }}>
            {task.description}
          </p>

          {task.resource && (
            <a
              href={task.resource.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'Courier New, monospace',
                fontSize: 11,
                color: '#04CCFD',
                textDecoration: 'none',
                border: '1px solid rgba(4,204,253,0.3)',
                borderRadius: 4,
                padding: '5px 12px',
                transition: 'all 0.15s',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(4,204,253,0.08)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'transparent';
              }}
            >
              ↗ {task.resource.label}
            </a>
          )}
        </div>
      )}
    </div>
  );
}
