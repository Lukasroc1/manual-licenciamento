import React, { useState } from 'react';
import TopAppBar from './components/TopAppBar';
import SideNavBar from './components/SideNavBar';
import Introducao from './pages/Introducao';
import Impactos from './pages/Impactos';
import ProcessoLicenciamento from './pages/ProcessoLicenciamento';
import FluxoTrifasico from './pages/FluxoTrifasico';
import FluxoSimplificado from './pages/FluxoSimplificado';
import ConformidadePraticas from './pages/ConformidadePraticas';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('introducao');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'introducao':
        return <Introducao />;
      case 'impactos':
        return <Impactos />;
      case 'processo':
        return <ProcessoLicenciamento onPageChange={setCurrentPage} />;
      case 'trifasico':
        return <FluxoTrifasico />;
      case 'simplificado':
        return <FluxoSimplificado />;
      case 'conformidade':
        return <ConformidadePraticas />;
      default:
        return <Introducao />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--background)' }}>
      {/* Header bar */}
      <TopAppBar onMenuToggle={toggleMobileMenu} />

      {/* Sidebar navigation */}
      <SideNavBar 
        currentPage={currentPage} 
        setCurrentPage={setCurrentPage} 
        isOpen={mobileMenuOpen}
        onClose={closeMobileMenu}
      />

      {/* Main page wrapper */}
      <div style={{
        paddingTop: '64px',
        paddingLeft: '0px',
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        transition: 'padding-left 0.3s ease'
      }} className="main-content-layout">
        <main style={{
          flex: 1,
          padding: '24px 16px',
          width: '100%',
          maxWidth: '1120px',
          margin: '0 auto',
        }}>
          {renderPage()}
        </main>

        {/* Footer */}
        <footer style={{
          backgroundColor: 'var(--paper-white)',
          borderTop: '1px solid var(--clay-gray)',
          padding: '24px 16px',
          marginTop: '48px',
          width: '100%'
        }}>
          <div style={{
            maxWidth: '1120px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            fontSize: '13px',
            color: 'var(--on-surface-variant)'
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
              <strong style={{ color: 'var(--primary)' }}>Manual Técnico de Licenciamento Ambiental</strong>
              <span>Atividade: Abatedouros de Animais de Pequeno Porte (Paraná)</span>
            </div>
            <div>
              <span>© {new Date().getFullYear()} Guia de Licenciamento. Desenvolvido para fins acadêmicos.</span>
            </div>
          </div>
        </footer>
      </div>

      {/* Mobile Bottom Quick Navigation bar */}
      <nav className="mobile-only" style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        height: '56px',
        backgroundColor: 'var(--paper-white)',
        borderTop: '1px solid var(--clay-gray)',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        zIndex: 35,
        boxShadow: '0 -2px 10px rgba(0,0,0,0.05)'
      }}>
        <button 
          onClick={() => setCurrentPage('introducao')}
          style={{
            border: 'none',
            background: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: currentPage === 'introducao' ? 'var(--primary)' : 'var(--on-surface-variant)',
            fontSize: '10px',
            fontWeight: currentPage === 'introducao' ? '700' : '500',
            cursor: 'pointer'
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>menu_book</span>
          <span>Início</span>
        </button>
        <button 
          onClick={() => setCurrentPage('processo')}
          style={{
            border: 'none',
            background: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: currentPage === 'processo' ? 'var(--primary)' : 'var(--on-surface-variant)',
            fontSize: '10px',
            fontWeight: currentPage === 'processo' ? '700' : '500',
            cursor: 'pointer'
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>account_tree</span>
          <span>Processos</span>
        </button>
        <button 
          onClick={() => setCurrentPage('conformidade')}
          style={{
            border: 'none',
            background: 'none',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            color: currentPage === 'conformidade' ? 'var(--primary)' : 'var(--on-surface-variant)',
            fontSize: '10px',
            fontWeight: currentPage === 'conformidade' ? '700' : '500',
            cursor: 'pointer'
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>fact_check</span>
          <span>Práticas</span>
        </button>
      </nav>

      {/* Styles adjustment for desktop layout margin */}
      <style>{`
        @media (min-width: 769px) {
          .main-content-layout {
            padding-left: 256px !important;
          }
        }
        @media (max-width: 768px) {
          main {
            padding-bottom: 80px !important; /* bottom bar clearance */
          }
        }
      `}</style>
    </div>
  );
}

export default App;
