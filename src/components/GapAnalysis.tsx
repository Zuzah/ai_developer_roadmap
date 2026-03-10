// src/components/GapAnalysis.tsx
// Renders the "Gap Analysis" tab — verdict on the LinkedIn post, per-claim cards,
// and the senior engineer advantage section.

import { postSummary, gapClaims, seniorEngineerAdvantage } from '../data/gap-analysis';

const VERDICT_COLORS: Record<string, string> = {
  'True':               '#34d399',
  'Mostly True':        '#04CCFD',
  'True & Underrated':  '#04CCFD',
  'Contextually True':  '#a78bfa',
  'True for Now':       '#fb923c',
};

export default function GapAnalysis() {
  return (
    <div>
      {/* ── Overall verdict ── */}
      <div style={{
        background: 'var(--bg-surface)',
        border: '1px solid var(--border)',
        borderRadius: 8,
        padding: '20px 24px',
        marginBottom: 20,
      }}>
        <p style={{
          fontFamily: 'Courier New, monospace',
          fontSize: 10,
          color: '#04CCFD',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          Verdict on the LinkedIn Post
        </p>
        <p style={{
          fontSize: 15,
          fontWeight: 600,
          color: '#FFFFFF',
          lineHeight: 1.5,
          margin: '0 0 10px',
        }}>
          {postSummary.verdict}
        </p>
        <p style={{
          fontSize: 13,
          color: 'var(--text-muted)',
          lineHeight: 1.8,
          margin: 0,
        }}>
          {postSummary.detail}
        </p>
      </div>

      {/* ── Per-claim analysis ── */}
      <div style={{ marginBottom: 24 }}>
        <p style={{
          fontFamily: 'Courier New, monospace',
          fontSize: 10,
          color: 'var(--text-dim)',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 12,
        }}>
          Claim-by-Claim Analysis
        </p>

        {gapClaims.map(claim => {
          const color = VERDICT_COLORS[claim.verdict] ?? '#04CCFD';
          return (
            <div key={claim.id} style={{
              background: 'var(--bg-surface)',
              border: `1px solid ${color}22`,
              borderLeft: `3px solid ${color}`,
              borderRadius: 6,
              padding: '16px 20px',
              marginBottom: 10,
            }}>
              {/* Claim + verdict badge */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 12,
                marginBottom: 10,
                flexWrap: 'wrap',
              }}>
                <p style={{
                  fontSize: 13,
                  color: '#FFFFFF',
                  fontStyle: 'italic',
                  margin: 0,
                  flex: 1,
                  lineHeight: 1.5,
                }}>
                  "{claim.claim}"
                </p>
                <span style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: 9,
                  color,
                  background: `${color}18`,
                  border: `1px solid ${color}44`,
                  padding: '3px 9px',
                  borderRadius: 3,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  fontWeight: 700,
                  flexShrink: 0,
                }}>
                  {claim.verdict}
                </span>
              </div>

              {/* Analysis */}
              <p style={{
                fontSize: 12,
                color: 'var(--text-muted)',
                lineHeight: 1.75,
                margin: 0,
              }}>
                {claim.analysis}
              </p>
            </div>
          );
        })}
      </div>

      {/* ── Senior engineer advantage ── */}
      <div style={{
        background: 'rgba(4,204,253,0.05)',
        border: '1px solid rgba(4,204,253,0.2)',
        borderRadius: 8,
        padding: '20px 24px',
      }}>
        <p style={{
          fontFamily: 'Courier New, monospace',
          fontSize: 10,
          color: '#04CCFD',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: 14,
        }}>
          {seniorEngineerAdvantage.title}
        </p>

        {seniorEngineerAdvantage.points.map((point, i) => (
          <div key={i} style={{
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start',
            marginBottom: i < seniorEngineerAdvantage.points.length - 1 ? 12 : 0,
          }}>
            <div style={{
              width: 20,
              height: 20,
              borderRadius: '50%',
              background: 'rgba(4,204,253,0.12)',
              border: '1px solid rgba(4,204,253,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              marginTop: 1,
            }}>
              <span style={{
                fontFamily: 'Courier New, monospace',
                fontSize: 10,
                color: '#04CCFD',
                fontWeight: 700,
              }}>
                {i + 1}
              </span>
            </div>
            <p style={{
              margin: 0,
              fontSize: 13,
              color: 'var(--text-muted)',
              lineHeight: 1.75,
            }}>
              {point}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
