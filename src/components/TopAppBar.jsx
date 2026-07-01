import React from 'react';

const TopAppBar = ({ onMenuToggle }) => {
  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '64px',
      backgroundColor: 'var(--paper-white)',
      borderBottom: '1px solid var(--clay-gray)',
      zIndex: 30,
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: '1120px',
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button 
            className="mobile-only btn-icon" 
            onClick={onMenuToggle}
            aria-label="Abrir menu"
            style={{ padding: '4px' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>menu</span>
          </button>
          
          <h1 style={{ 
            fontSize: '20px', 
            fontWeight: 700, 
            margin: 0, 
            color: 'var(--primary)',
            fontFamily: 'var(--font-headline)',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}>
            Manual de Licenciamento Ambiental
          </h1>
        </div>

        <div className="desktop-only" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ 
            fontSize: '13px', 
            fontWeight: 600, 
            color: 'var(--on-surface-variant)',
            backgroundColor: 'var(--background)',
            padding: '6px 16px',
            borderRadius: 'var(--border-radius-full)',
            border: '1px solid var(--clay-gray)'
          }}>
            Lucas Leite da Rocha
          </span>
        </div>
      </div>
    </header>
  );
};

export default TopAppBar;
