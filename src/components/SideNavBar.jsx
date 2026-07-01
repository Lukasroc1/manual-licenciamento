import React from 'react';

const SideNavBar = ({ currentPage, setCurrentPage, isOpen, onClose }) => {
  const menuItems = [
    { id: 'introducao', label: '1. Introdução e Definições', icon: 'menu_book' },
    { id: 'impactos', label: '2. Avaliação de Impacto', icon: 'eco' },
    { id: 'processo', label: '3. Processo de Licenciamento', icon: 'account_tree' },
    { id: 'trifasico', label: '4. Fluxograma Trifásico', icon: 'schema' },
    { id: 'simplificado', label: '5. Fluxograma Simplificado (LAS)', icon: 'schema' },
    { id: 'conformidade', label: '6. Conformidade e Práticas', icon: 'fact_check' }
  ];

  const sidebarContent = (
    <div className="sidebar-inner" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <div className="sidebar-header" style={{ padding: '24px', borderBottom: '1px solid var(--clay-gray)', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>menu_book</span>
        <div>
          <h2 style={{ fontSize: '18px', margin: 0, fontWeight: 700, fontFamily: 'var(--font-headline)', color: 'var(--primary)' }}>Manual Digital</h2>
          <span style={{ fontSize: '11px', color: 'var(--on-surface-variant)' }}>Abatedouros de Pequeno Porte</span>
        </div>
      </div>
      
      <nav style={{ flex: 1, padding: '16px 8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {menuItems.map(item => {
          const isActive = currentPage === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setCurrentPage(item.id);
                if (onClose) onClose();
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 16px',
                borderRadius: 'var(--border-radius-lg)',
                border: 'none',
                width: '100%',
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: isActive ? '700' : '500',
                transition: 'all 0.2s ease',
                backgroundColor: isActive ? 'rgba(218, 215, 205, 0.3)' : 'transparent',
                color: isActive ? 'var(--primary)' : 'var(--on-surface-variant)',
                borderLeft: isActive ? '4px solid var(--secondary)' : '4px solid transparent',
                paddingLeft: isActive ? '12px' : '16px',
              }}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '20px', fill: isActive ? '1' : '0' }}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer" style={{ padding: '20px', borderTop: '1px solid var(--clay-gray)', fontSize: '11px', color: 'var(--on-surface-variant)', textAlign: 'center' }}>
        <span>IAT / Paraná • Engenharia Ambiental</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="desktop-only" style={{
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
        width: '256px',
        backgroundColor: 'var(--paper-white)',
        borderRight: '1px solid var(--clay-gray)',
        zIndex: 40,
        height: '100vh'
      }}>
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div className="mobile-only" onClick={onClose} style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.4)',
          zIndex: 45,
          backdropFilter: 'blur(2px)',
          transition: 'opacity 0.3s ease'
        }} />
      )}

      {/* Mobile Drawer */}
      <aside className="mobile-only" style={{
        position: 'fixed',
        left: isOpen ? 0 : '-260px',
        top: 0,
        bottom: 0,
        width: '256px',
        backgroundColor: 'var(--paper-white)',
        borderRight: '1px solid var(--clay-gray)',
        zIndex: 50,
        transition: 'left 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        height: '100vh'
      }}>
        {sidebarContent}
      </aside>
    </>
  );
};

export default SideNavBar;
