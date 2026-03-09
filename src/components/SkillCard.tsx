// src/components/SkillCard.tsx
// Expandable accordion card for a single skill.
// Checkbox wiring arrives in Iteration 6 — prop is accepted now but no-ops.

import { useState } from 'react';
import type { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  completed: boolean;
  onToggle: (id: string) => void;
}

export default function SkillCard({ skill, completed, onToggle }: SkillCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      marginBottom: 6,
      border: `1px solid ${open ? 'rgba(4,204,253,0.35)' : 'var(--border)'}`,
      borderRadius: 6,
      overflow: 'hidden',
      transition: 'border-color 0.15s',
    }}>
      {/* ── Header row ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        background: open ? 'var(--bg-raised)' : 'var(--bg-surface)',
        padding: '11px 14px',
        cursor: 'pointer',
        transition: 'background 0.15s',
      }}>
        {/* Checkbox */}
        <button
          onClick={e => { e.stopPropagation(); onToggle(skill.id); }}
          aria-label={completed ? 'Mark incomplete' : 'Mark complete'}
          style={{
            width: 16,
            height: 16,
            borderRadius: 3,
            border: `1.5px solid ${completed ? '#04CCFD' : 'var(--text-dim)'}`,
            background: completed ? '#04CCFD' : 'transparent',
            cursor: 'pointer',
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.15s',
            padding: 0,
          }}
        >
          {completed && (
            <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
              <path d="M1 3.5L3.5 6L8 1" stroke="#02132F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>

        {/* Skill name — clicking expands */}
        <span
          onClick={() => setOpen(o => !o)}
          style={{
            flex: 1,
            fontSize: 13,
            color: completed ? 'var(--text-muted)' : '#FFFFFF',
            fontWeight: open ? 600 : 400,
            textDecoration: completed ? 'line-through' : 'none',
            textDecorationColor: 'var(--text-dim)',
            transition: 'all 0.15s',
            userSelect: 'none',
          }}
        >
          {skill.name}
        </span>

        {/* Expand toggle */}
        <span
          onClick={() => setOpen(o => !o)}
          style={{
            fontFamily: 'monospace',
            fontSize: 16,
            color: '#04CCFD',
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'transform 0.15s',
            lineHeight: 1,
            userSelect: 'none',
            cursor: 'pointer',
          }}
        >
          +
        </span>
      </div>

      {/* ── Detail bullets ── */}
      {open && (
        <div style={{
          background: 'var(--bg-base)',
          borderTop: '1px solid rgba(4,204,253,0.15)',
          padding: '12px 14px 14px 40px',
        }}>
          {skill.details.map((detail, i) => (
            <div key={i} style={{
              display: 'flex',
              gap: 10,
              alignItems: 'flex-start',
              marginBottom: i < skill.details.length - 1 ? 9 : 0,
            }}>
              <div style={{
                width: 4,
                height: 4,
                background: '#04CCFD',
                borderRadius: '50%',
                marginTop: 7,
                flexShrink: 0,
                opacity: 0.7,
              }} />
              <p style={{
                margin: 0,
                fontSize: 12,
                color: 'var(--text-muted)',
                lineHeight: 1.7,
              }}>
                {detail}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
