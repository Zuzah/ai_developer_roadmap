// src/components/StayingCurrent.tsx — theme-aware

import { cadenceBlocks, compoundRule, adhdPrinciples } from '../data/staying-current';

export default function StayingCurrent() {
  return (
    <div>
      {/* Intro */}
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderLeft: '2px solid var(--accent)',
        borderRadius: 6,
        padding: '16px 20px',
        marginBottom: 24,
        boxShadow: 'var(--shadow-sm)',
      }}>
        <p style={{
          fontFamily: 'Courier New, monospace',
          fontSize: 11,
          color: 'var(--accent)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: 8,
        }}>
          Maintenance Schedule
        </p>
        <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
          The half-life of AI knowledge is approximately{' '}
          <strong style={{ color: 'var(--text-primary)' }}>3–6 months</strong>.
          You cannot study once and stay current. This is the operating cadence
          of an Applied AI Engineer — not a study plan, a maintenance schedule.
        </p>
      </div>

      {/* Cadence blocks */}
      <div style={{ marginBottom: 28 }}>
        {cadenceBlocks.map((block, bi) => (
          <div key={bi} style={{
            background: 'var(--bg-surface)',
            border: '1px solid var(--border)',
            borderRadius: 8,
            overflow: 'hidden',
            marginBottom: 10,
            boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{
              background: 'var(--bg-raised)',
              borderBottom: '1px solid var(--border)',
              padding: '10px 18px',
            }}>
              <span style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 11,
                color: 'var(--accent)',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
              }}>
                {block.cadence}
              </span>
            </div>
            <div style={{ padding: '14px 18px' }}>
              {block.items.map((item, ii) => (
                <div key={ii} style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'flex-start',
                  marginBottom: ii < block.items.length - 1 ? 11 : 0,
                }}>
                  <div style={{
                    width: 5, height: 5,
                    background: 'var(--accent)',
                    borderRadius: '50%',
                    marginTop: 7,
                    flexShrink: 0,
                    opacity: 0.7,
                  }} />
                  <p style={{ margin: 0, fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.75 }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Compound Rule */}
      <div style={{
        background: 'var(--accent-faint)',
        border: '1px solid var(--accent-border)',
        borderRadius: 8,
        padding: '20px 24px',
        marginBottom: 28,
      }}>
        <p style={{
          fontFamily: 'Courier New, monospace',
          fontSize: 11,
          color: 'var(--accent)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          {compoundRule.title}
        </p>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.8, margin: 0 }}>
          {compoundRule.body}
        </p>
      </div>

      {/* ADHD Principles */}
      <div>
        <p style={{
          fontFamily: 'Courier New, monospace',
          fontSize: 10,
          color: 'var(--text-dim)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          ADHD-Friendly Principles — Built Into This Roadmap
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 8,
        }}>
          {adhdPrinciples.map((p, i) => (
            <div key={i} style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border)',
              borderRadius: 6,
              padding: '14px 16px',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <p style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 11,
                color: 'var(--accent)',
                marginBottom: 6,
                letterSpacing: '0.05em',
              }}>
                ✓ {p.principle}
              </p>
              <p style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.7, margin: 0 }}>
                {p.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
