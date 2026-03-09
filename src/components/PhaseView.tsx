// src/components/PhaseView.tsx
// Full detail view for the active phase.
// Renders: phase header, goal, skills accordion, projects, resources.
// Progress props are passed through to SkillCard and ProjectCard — wired in Iteration 6.

import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';
import type { Phase, ProgressState } from '../types';

interface PhaseViewProps {
  phase: Phase;
  progress: ProgressState;
  onSkillToggle: (id: string) => void;
  onProjectToggle: (id: string) => void;
}

export default function PhaseView({
  phase,
  progress,
  onSkillToggle,
  onProjectToggle,
}: PhaseViewProps) {
  return (
    <div style={{
      background: 'var(--bg-surface)',
      border: '1px solid var(--border)',
      borderTop: '2px solid #04CCFD',
      borderRadius: '0 0 8px 8px',
    }}>
      {/* ── Phase header ── */}
      <div style={{
        padding: '24px 28px 20px',
        borderBottom: '1px solid var(--border)',
      }}>
        <p style={{
          fontFamily: 'Courier New, monospace',
          fontSize: 11,
          color: '#04CCFD',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 10,
        }}>
          {phase.label} · {phase.weeks} · {phase.hoursPerWeek}
        </p>

        <h2 style={{
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          fontWeight: 700,
          color: '#FFFFFF',
          margin: '0 0 8px',
          letterSpacing: '-0.01em',
        }}>
          {phase.title}
        </h2>

        <p style={{
          fontSize: 14,
          color: '#04CCFD',
          fontStyle: 'italic',
          margin: '0 0 14px',
        }}>
          "{phase.tagline}"
        </p>

        {/* Goal pill */}
        <div style={{
          display: 'inline-block',
          background: 'rgba(4,204,253,0.08)',
          border: '1px solid rgba(4,204,253,0.2)',
          borderRadius: 4,
          padding: '6px 12px',
          marginBottom: 14,
        }}>
          <span style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 10,
            color: '#04CCFD',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginRight: 8,
          }}>
            Goal
          </span>
          <span style={{ fontSize: 12, color: 'var(--text-muted)' }}>
            {phase.goal}
          </span>
        </div>

        <p style={{
          fontSize: 13,
          color: 'var(--text-muted)',
          lineHeight: 1.8,
          margin: 0,
          maxWidth: 700,
        }}>
          {phase.why}
        </p>
      </div>

      {/* ── Skills ── */}
      <div style={{ padding: '22px 28px', borderBottom: '1px solid var(--border)' }}>
        <p style={{
          fontFamily: 'Courier New, monospace',
          fontSize: 10,
          color: 'var(--text-dim)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          Skills to Build
        </p>

        {phase.skills.map(skill => (
          <SkillCard
            key={skill.id}
            skill={skill}
            completed={progress.completedSkills[skill.id] ?? false}
            onToggle={onSkillToggle}
          />
        ))}
      </div>

      {/* ── Projects ── */}
      <div style={{ padding: '22px 28px', borderBottom: '1px solid var(--border)' }}>
        <p style={{
          fontFamily: 'Courier New, monospace',
          fontSize: 10,
          color: 'var(--text-dim)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          Projects — Build These
        </p>

        {phase.projects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={i + 1}
            completed={progress.completedProjects[project.id] ?? false}
            onToggle={onProjectToggle}
          />
        ))}
      </div>

      {/* ── Resources ── */}
      <div style={{ padding: '18px 28px 22px' }}>
        <p style={{
          fontFamily: 'Courier New, monospace',
          fontSize: 10,
          color: 'var(--text-dim)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          Resources
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {phase.resources.map(resource => (
            <a
              key={resource.url}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 11,
                color: 'var(--text-muted)',
                background: 'var(--bg-base)',
                border: '1px solid var(--border)',
                borderRadius: 4,
                padding: '6px 12px',
                textDecoration: 'none',
                transition: 'all 0.15s',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#04CCFD';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(4,204,253,0.4)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)';
                (e.currentTarget as HTMLAnchorElement).style.borderColor = 'var(--border)';
              }}
            >
              ↗ {resource.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
