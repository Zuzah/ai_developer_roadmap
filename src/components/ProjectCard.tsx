// src/components/ProjectCard.tsx
// Project display card. Shows all project details with an expandable section.
// Checkbox and repoUrl wiring arrives in Iteration 6.

import { useState } from 'react';
import type { Project } from '../types';

const CATEGORY_COLORS: Record<string, string> = {
  Corp:       '#04CCFD',
  Space:      '#a78bfa',
  Automotive: '#34d399',
  Portfolio:  '#fb923c',
};

interface ProjectCardProps {
  project: Project;
  index: number;           // 1-based display number
  completed: boolean;
  onToggle: (id: string) => void;
}

export default function ProjectCard({ project, index, completed, onToggle }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const catColor = CATEGORY_COLORS[project.category] ?? '#04CCFD';

  return (
    <div style={{
      background: 'var(--bg-base)',
      border: `1px solid ${completed ? 'rgba(4,204,253,0.3)' : 'var(--border)'}`,
      borderRadius: 8,
      overflow: 'hidden',
      marginBottom: 10,
      transition: 'border-color 0.15s',
    }}>
      {/* ── Top bar ── */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '14px 16px',
        cursor: 'pointer',
        background: open ? 'rgba(4,204,253,0.04)' : 'transparent',
        transition: 'background 0.15s',
      }}>
        {/* Index circle */}
        <div style={{
          width: 26,
          height: 26,
          borderRadius: '50%',
          background: completed ? '#04CCFD' : 'rgba(4,204,253,0.1)',
          border: `1px solid ${completed ? '#04CCFD' : 'rgba(4,204,253,0.3)'}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          cursor: 'pointer',
          transition: 'all 0.15s',
        }}
          onClick={e => { e.stopPropagation(); onToggle(project.id); }}
        >
          {completed ? (
            <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
              <path d="M1 4L4 7L9 1" stroke="#02132F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          ) : (
            <span style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 11,
              color: '#04CCFD',
              fontWeight: 700,
            }}>{index}</span>
          )}
        </div>

        {/* Title block */}
        <div style={{ flex: 1 }} onClick={() => setOpen(o => !o)}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', marginBottom: 3 }}>
            <span style={{
              fontSize: 14,
              fontWeight: 600,
              color: completed ? 'var(--text-muted)' : '#FFFFFF',
              textDecoration: completed ? 'line-through' : 'none',
              textDecorationColor: 'var(--text-dim)',
            }}>
              {project.name}
            </span>
            {/* Category badge */}
            <span style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 9,
              color: catColor,
              background: `${catColor}18`,
              border: `1px solid ${catColor}44`,
              padding: '2px 7px',
              borderRadius: 3,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}>
              {project.category}
            </span>
          </div>
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <span style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 10,
              color: 'var(--text-dim)',
            }}>
              {project.week}
            </span>
            <span style={{ color: 'var(--border)', fontSize: 10 }}>·</span>
            <span style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 10,
              color: 'var(--text-dim)',
            }}>
              {project.language}
            </span>
          </div>
        </div>

        {/* Expand arrow */}
        <span
          onClick={() => setOpen(o => !o)}
          style={{
            fontFamily: 'monospace',
            fontSize: 16,
            color: open ? '#04CCFD' : 'var(--text-dim)',
            transform: open ? 'rotate(45deg)' : 'none',
            transition: 'all 0.15s',
            userSelect: 'none',
          }}
        >
          +
        </span>
      </div>

      {/* ── Expanded content ── */}
      {open && (
        <div style={{
          borderTop: '1px solid rgba(4,204,253,0.12)',
          padding: '16px 16px 18px',
        }}>
          {/* Description */}
          <p style={{
            fontSize: 13,
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            margin: '0 0 16px',
          }}>
            {project.description}
          </p>

          {/* Features + Success Criteria side by side on wide, stacked on narrow */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: 16,
            marginBottom: project.repoUrl ? 16 : 0,
          }}>
            {/* Features */}
            <div>
              <p style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 10,
                color: 'var(--text-dim)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>
                Features
              </p>
              {project.features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 4, height: 4,
                    background: '#04CCFD',
                    borderRadius: '50%',
                    marginTop: 7, flexShrink: 0, opacity: 0.6,
                  }} />
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Success Criteria */}
            <div>
              <p style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 10,
                color: 'var(--text-dim)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>
                Success Criteria
              </p>
              {project.successCriteria.map((sc, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 6, alignItems: 'flex-start' }}>
                  <div style={{
                    width: 4, height: 4,
                    background: '#34d399',
                    borderRadius: '50%',
                    marginTop: 7, flexShrink: 0, opacity: 0.7,
                  }} />
                  <span style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>{sc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Repo link — shown once repoUrl is set in data */}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 4,
                fontFamily: 'Courier New, monospace',
                fontSize: 11,
                color: '#04CCFD',
                textDecoration: 'none',
                border: '1px solid rgba(4,204,253,0.3)',
                borderRadius: 4,
                padding: '5px 12px',
                transition: 'all 0.15s',
              }}
            >
              ↗ View on GitHub
            </a>
          )}
        </div>
      )}
    </div>
  );
}
