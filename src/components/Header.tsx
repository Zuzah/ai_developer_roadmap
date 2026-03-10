// src/components/Header.tsx — theme-aware + toggle

interface HeaderProps {
  activeTab: string;
  onTabChange: (tab: any) => void;
  theme: 'dark' | 'light';
  onThemeToggle: () => void;
}

const TABS = [
  { id: 'this-week',       label: 'This Week' },
  { id: 'roadmap',         label: 'Roadmap' },
  { id: 'staying-current', label: 'Staying Current' },
  { id: 'gap-analysis',    label: 'Gap Analysis' },
];

export default function Header({ activeTab, onTabChange, theme, onThemeToggle }: HeaderProps) {
  const isDark = theme === 'dark';

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'var(--header-bg)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)',
    }}>
      <div style={{
        maxWidth: 960,
        margin: '0 auto',
        padding: '0 32px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 16,
        height: 56,
      }}>

        {/* Wordmark */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
          <div style={{
            width: 7, height: 7,
            background: 'var(--accent)',
            borderRadius: '50%',
            boxShadow: 'var(--accent-glow)',
          }} />
          <span style={{
            fontFamily: 'Courier New, monospace',
            fontSize: 11,
            color: 'var(--text-primary)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            opacity: 0.9,
          }}>
            AI Developer Roadmap
          </span>
        </div>

        {/* Right side: tabs + toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
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
                    color: active ? 'var(--accent)' : 'var(--text-dim)',
                    background: active ? 'var(--accent-faint)' : 'transparent',
                    border: 'none',
                    borderRadius: 4,
                    padding: '6px 11px',
                    cursor: 'pointer',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tab.label}
                </button>
              );
            })}
          </nav>

          {/* Theme toggle */}
          <button
            onClick={onThemeToggle}
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            style={{
              width: 32,
              height: 32,
              borderRadius: 6,
              border: '1px solid var(--border)',
              background: 'var(--bg-raised)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 15,
              flexShrink: 0,
              marginLeft: 4,
            }}
          >
            {isDark ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
}
