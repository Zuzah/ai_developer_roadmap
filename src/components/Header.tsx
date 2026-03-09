// src/components/Header.tsx
// Top branding strip + tab navigation bar.
// Tabs: Roadmap | Staying Current | Gap Analysis

type Tab = 'roadmap' | 'staying-current' | 'gap-analysis';

interface HeaderProps {
  activeTab: Tab;
  onTabChange: (tab: Tab) => void;
}

const TABS: { id: Tab; label: string }[] = [
  { id: 'roadmap',         label: 'Roadmap' },
  { id: 'staying-current', label: 'Staying Current' },
  { id: 'gap-analysis',    label: 'Gap Analysis' },
];

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      background: 'linear-gradient(180deg, #031a3d 0%, var(--bg-base) 100%)',
      position: 'sticky',
      top: 0,
      zIndex: 50,
    }}>
      {/* ── Branding row ── */}
      <div style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '28px 32px 0',
      }}>
        <p style={{
          fontFamily: 'Courier New, monospace',
          fontSize: 11,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#04CCFD',
          marginBottom: 10,
        }}>
          Applied AI Engineering · 24-Week Roadmap
        </p>

        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
          <div>
            <h1 style={{
              fontSize: 'clamp(20px, 3.5vw, 32px)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#FFFFFF',
              margin: 0,
            }}>
              From Full-Stack Engineer{' '}
              <span style={{ color: '#04CCFD' }}>to Applied AI Engineer</span>
            </h1>
            <p style={{
              marginTop: 8,
              fontFamily: 'Courier New, monospace',
              fontSize: 12,
              color: 'var(--text-muted)',
              lineHeight: 1.5,
            }}>
              6 phases · 11 projects · Python / TypeScript / Go · Build &gt; Learn
            </p>
          </div>

          {/* Stats strip */}
          <div style={{ display: 'flex', gap: 20, flexShrink: 0 }}>
            {[
              ['24', 'weeks'],
              ['11', 'projects'],
              ['240+', 'hours'],
            ].map(([val, label]) => (
              <div key={label} style={{ textAlign: 'right' }}>
                <div style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: 20,
                  fontWeight: 700,
                  color: '#04CCFD',
                  lineHeight: 1,
                }}>{val}</div>
                <div style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: 10,
                  color: 'var(--text-dim)',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  marginTop: 3,
                }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tab bar ── */}
      <div style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '16px 32px 0',
        display: 'flex',
        gap: 2,
      }}>
        {TABS.map(tab => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              style={{
                background: isActive ? '#04CCFD' : 'transparent',
                color: isActive ? '#02132F' : 'var(--text-muted)',
                border: '1px solid',
                borderColor: isActive ? '#04CCFD' : 'var(--border)',
                borderBottom: 'none',
                padding: '7px 20px',
                borderRadius: '4px 4px 0 0',
                fontSize: 12,
                fontFamily: 'Courier New, monospace',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                fontWeight: isActive ? 700 : 400,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
    </header>
  );
}
