// src/components/Onboarding.tsx
// First-run experience — captures the user's intended start date.
// Shows once. After submitting, App renders the main roadmap.

import { useState } from 'react';

interface OnboardingProps {
  onComplete: (startDate: string) => void;
}

export default function Onboarding({ onComplete }: OnboardingProps) {
  const todayISO = new Date().toISOString().split('T')[0];
  const [date, setDate] = useState(todayISO);
  const [hovered, setHovered] = useState(false);

  function handleSubmit() {
    if (date) onComplete(date);
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'var(--bg-base)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px',
    }}>
      <div style={{
        width: '100%',
        maxWidth: 520,
      }}>

        {/* Wordmark */}
        <div style={{ marginBottom: 48 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
            <div style={{
              width: 8,
              height: 8,
              background: '#04CCFD',
              borderRadius: '50%',
              boxShadow: '0 0 10px #04CCFD',
            }} />
            <span style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 11,
              color: '#04CCFD',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
            }}>
              AI Developer Roadmap
            </span>
          </div>
          <p style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 10,
            color: 'var(--text-dim)',
            letterSpacing: '0.15em',
            marginLeft: 18,
          }}>
            6 Phases · 24 Weeks · 10 Projects
          </p>
        </div>

        {/* Card */}
        <div style={{
          background: 'var(--bg-surface)',
          border: '1px solid var(--border)',
          borderTop: '2px solid #04CCFD',
          borderRadius: 8,
          padding: '36px 32px 32px',
        }}>
          <h1 style={{
            fontFamily: 'Georgia, serif',
            fontSize: 26,
            fontWeight: 700,
            color: '#FFFFFF',
            margin: '0 0 12px',
            lineHeight: 1.3,
            letterSpacing: '-0.02em',
          }}>
            When would you like to<br />start this journey?
          </h1>

          <p style={{
            fontSize: 13,
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            margin: '0 0 32px',
          }}>
            Your start date anchors everything — every week, every task, every deadline 
            cascades from this single date. You can start today or schedule a future date.
          </p>

          {/* Date picker */}
          <div style={{ marginBottom: 28 }}>
            <label style={{
              display: 'block',
              fontFamily: 'Courier New, monospace',
              fontSize: 10,
              color: '#04CCFD',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginBottom: 10,
            }}>
              Start Date
            </label>

            <input
              type="date"
              value={date}
              min={todayISO}
              onChange={e => setDate(e.target.value)}
              style={{
                width: '100%',
                background: 'var(--bg-base)',
                border: '1px solid #04CCFD44',
                borderRadius: 6,
                padding: '12px 14px',
                fontFamily: 'Courier New, monospace',
                fontSize: 15,
                color: '#FFFFFF',
                outline: 'none',
                cursor: 'pointer',
                boxSizing: 'border-box',
                colorScheme: 'dark',
              }}
            />
          </div>

          {/* Quick options */}
          <div style={{ display: 'flex', gap: 8, marginBottom: 32, flexWrap: 'wrap' }}>
            {[
              { label: 'Today', days: 0 },
              { label: 'Next Monday', days: daysUntilNextMonday() },
              { label: 'Next Month', days: daysUntilNextMonth() },
            ].map(({ label, days }) => {
              const d = new Date();
              d.setDate(d.getDate() + days);
              const iso = d.toISOString().split('T')[0];
              const active = date === iso;
              return (
                <button
                  key={label}
                  onClick={() => setDate(iso)}
                  style={{
                    fontFamily: 'Courier New, monospace',
                    fontSize: 11,
                    color: active ? '#02132F' : 'var(--text-muted)',
                    background: active ? '#04CCFD' : 'var(--bg-base)',
                    border: `1px solid ${active ? '#04CCFD' : 'var(--border)'}`,
                    borderRadius: 4,
                    padding: '6px 14px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                    letterSpacing: '0.05em',
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* What cascades from this */}
          <div style={{
            background: 'rgba(4,204,253,0.05)',
            border: '1px solid rgba(4,204,253,0.15)',
            borderRadius: 6,
            padding: '14px 16px',
            marginBottom: 28,
          }}>
            <p style={{
              fontFamily: 'Courier New, monospace',
              fontSize: 10,
              color: '#04CCFD',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: 8,
            }}>
              What your start date unlocks
            </p>
            {[
              'Your current week is calculated automatically',
              '"This Week" tab shows exactly what to do right now',
              'All 24 weeks get real calendar dates',
              'Your Phase 6 target date is set automatically',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 5, alignItems: 'flex-start' }}>
                <span style={{ color: '#04CCFD', fontSize: 10, marginTop: 2 }}>✓</span>
                <span style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6 }}>{item}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={handleSubmit}
            disabled={!date}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              width: '100%',
              padding: '14px',
              background: hovered ? '#00b8e0' : '#04CCFD',
              border: 'none',
              borderRadius: 6,
              fontFamily: 'Courier New, monospace',
              fontSize: 13,
              fontWeight: 700,
              color: '#02132F',
              cursor: date ? 'pointer' : 'not-allowed',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              transition: 'background 0.15s',
              opacity: date ? 1 : 0.5,
            }}
          >
            Begin the Journey →
          </button>
        </div>

        {/* Footer note */}
        <p style={{
          textAlign: 'center',
          fontSize: 11,
          color: 'var(--text-dim)',
          marginTop: 20,
          fontFamily: 'Courier New, monospace',
        }}>
          Your start date is saved locally — it never leaves your device.
        </p>
      </div>
    </div>
  );
}

function daysUntilNextMonday(): number {
  const day = new Date().getDay(); // 0 Sun … 6 Sat
  return day === 1 ? 7 : (8 - day) % 7;
}

function daysUntilNextMonth(): number {
  const now = new Date();
  const next = new Date(now.getFullYear(), now.getMonth() + 1, 1);
  return Math.round((next.getTime() - now.getTime()) / 86_400_000);
}
