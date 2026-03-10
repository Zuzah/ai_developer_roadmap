// src/components/Header.tsx — Iteration 6
// 4 tabs: This Week / Roadmap / Staying Current / Gap Analysis

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: any) => void;
}

const TABS = [
  { id: 'this-week',       label: 'This Week' },
  { id: 'roadmap',         label: 'Roadmap' },
  { id: 'staying-current', label: 'Staying Current' },
  { id: 'gap-analysis',    label: 'Gap Analysis' },
];

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'rgba(2,19,47,0.92)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
    }}>
      <div style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 24,
        height: 56,
      }}>

        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 7, height: 7,
            background: '#04CCFD',
            borderRadius: '50%',
            boxShadow: '0 0 8px #04CCFD',
          }} />
          <span style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 11,
            color: '#FFFFFF',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}>
            AI Developer Roadmap
          </span>
        </div>

        {/* Tab nav */}
        <nav style={{ display: 'flex', gap: 2 }}>
          {TABS.map(tab => {
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                style={{
                  fontFamily: 'Courier New, monospace',
                  fontSize: 11,
                  color: active ? '#04CCFD' : 'var(--text-dim)',
                  background: active ? 'rgba(4,204,253,0.08)' : 'transparent',
                  border: 'none',
                  borderRadius: 4,
                  padding: '6px 12px',
                  cursor: 'pointer',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  transition: 'all 0.15s',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
