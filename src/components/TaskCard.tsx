// src/components/TaskCard.tsx — theme-aware, all colors via CSS variables

import { useState } from 'react';
import type { Task, TaskType } from '../types';

const TYPE_META: Record<TaskType, { label: string; color: string; icon: string }> = {
  setup:    { label: 'Setup',    color: '#F97316', icon: '⚙' },
  read:     { label: 'Read',     color: '#A78BFA', icon: '📖' },
  watch:    { label: 'Watch',    color: '#34D399', icon: '▶' },
  build:    { label: 'Build',    color: 'var(--accent)', icon: '⚡' },
  practice: { label: 'Practice', color: '#FBBF24', icon: '🔁' },
  write:    { label: 'Write',    color: '#F472B6', icon: '✍' },
};

interface TaskCardProps {
  task: Task;
  index: number;
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
      background: completed ? 'var(--accent-faint)' : 'var(--bg-surface)',
      border: `1px solid ${completed ? 'var(--accent-border)' : 'var(--border)'}`,
      borderLeft: `3px solid ${completed ? 'var(--accent)' : meta.color}`,
      borderRadius: 6,
      overflow: 'hidden',
      marginBottom: 6,
      boxShadow: 'var(--shadow-sm)',
    }}>

      {/* ── Header row ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        padding: '11px 14px',
        cursor: 'pointer',
      }}>

        {/* Checkbox / index */}
        <div
          onClick={() => onToggle(task.id)}
          style={{
            width: 24, height: 24,
            borderRadius: 4,
            border: `1.5px solid ${completed ? 'var(--accent)' : 'var(--border)'}`,
            background: completed ? 'var(--accent)' : 'transparent',
            cursor: 'pointer',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {completed ? (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L3.5 6.5L9 1" stroke="var(--accent-on)"
                strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
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

        {/* Title */}
        <span
          onClick={() => setOpen(o => !o)}
          style={{
            flex: 1,
            fontSize: 13,
            color: completed ? 'var(--text-muted)' : 'var(--text-primary)',
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

        {/* Meta: type badge + time + expand */}
        <div
          onClick={() => setOpen(o => !o)}
          style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}
        >
          <span style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 9,
            color: meta.color,
            background: `color-mix(in srgb, ${meta.color} 12%, transparent)`,
            border: `1px solid color-mix(in srgb, ${meta.color} 30%, transparent)`,
            padding: '2px 7px',
            borderRadius: 3,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            {meta.icon} {meta.label}
          </span>

          <span style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 10,
            color: 'var(--text-dim)',
            minWidth: 28,
            textAlign: 'right',
          }}>
            {timeLabel}
          </span>

          <span style={{
            fontSize: 13,
            color: open ? 'var(--accent)' : 'var(--text-dim)',
            transform: open ? 'rotate(180deg)' : 'none',
            lineHeight: 1,
            userSelect: 'none',
          }}>
            ▾
          </span>
        </div>
      </div>

      {/* ── Expanded detail ── */}
      {open && (
        <div style={{
          borderTop: '1px solid var(--border)',
          padding: '14px 14px 16px 48px',
          background: 'var(--bg-raised)',
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
                color: 'var(--accent)',
                textDecoration: 'none',
                border: '1px solid var(--accent-border)',
                borderRadius: 4,
                padding: '5px 12px',
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
