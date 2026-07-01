import React from 'react';

const Sobre = () => {
  const academicDetails = [
    { label: 'Autor', value: 'Lucas Leite da Rocha', icon: 'person' },
    { label: 'RA', value: '2301415', icon: 'badge' },
    { label: 'Universidade', value: 'Universidade Tecnológica Federal do Paraná (UTFPR)', icon: 'school' },
    { label: 'Campus', value: 'Medianeira', icon: 'location_on' },
    { label: 'Disciplina', value: 'Avaliação de Impacto Ambiental', icon: 'science' },
    { label: 'Versão do Software', value: 'v1.0.0 (Vite / React Client)', icon: 'code' }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-stack-md)', maxWidth: '800px', margin: '0 auto' }}>
      
      {/* Software Title Header */}
      <section style={{ borderBottom: '1px solid var(--clay-gray)', paddingBottom: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', color: 'var(--earth-black)', margin: '0 0 8px 0', fontFamily: 'var(--font-headline)', fontWeight: 700 }}>
          Sobre o Software
        </h2>
        <p style={{ color: 'var(--on-surface-variant)', fontSize: '15px', margin: 0 }}>
          Informações de autoria, disciplina acadêmica e especificações técnicas da aplicação.
        </p>
      </section>

      {/* Software "About Box" Container */}
      <div className="card-academic" style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '24px', 
        padding: '32px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Soft Decorative Watermark Logo */}
        <span className="material-symbols-outlined text-primary" style={{ 
          position: 'absolute', 
          right: '-20px', 
          bottom: '-20px', 
          fontSize: '180px', 
          opacity: 0.05,
          pointerEvents: 'none'
        }}>
          settings
        </span>

        {/* Header inside the Box (Software Identity) */}
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center', borderBottom: '1px solid var(--clay-gray)', paddingBottom: '20px' }}>
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: 'var(--border-radius-xl)',
            backgroundColor: 'var(--primary)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            boxShadow: 'var(--shadow-md)'
          }}>
            <span className="material-symbols-outlined" style={{ fontSize: '36px' }}>eco</span>
          </div>
          <div>
            <h3 style={{ fontSize: '22px', color: 'var(--primary)', margin: 0, fontWeight: 700 }}>
              Manual de Licenciamento Ambiental
            </h3>
            <span style={{ fontSize: '13px', color: 'var(--secondary)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
              Abatedouros de Animais de Pequeno Porte
            </span>
          </div>
        </div>

        {/* Academic & Author Specification Grid (Classic Software Details) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {academicDetails.map((detail, idx) => (
            <div 
              key={idx}
              style={{
                display: 'grid',
                gridTemplateColumns: '150px 1fr',
                padding: '10px 14px',
                border: '1px solid var(--clay-gray)',
                borderRadius: 'var(--border-radius-md)',
                backgroundColor: 'var(--background)',
                alignItems: 'center',
                gap: '16px'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>{detail.icon}</span>
                <span style={{ fontSize: '13px', fontWeight: 700 }}>{detail.label}</span>
              </div>
              <div style={{ fontSize: '14px', color: 'var(--on-surface)', fontWeight: 500 }}>
                {detail.value}
              </div>
            </div>
          ))}
        </div>

        {/* Systems Diagnostic / Description Footer inside About Box */}
        <div style={{
          marginTop: '8px',
          padding: '16px',
          backgroundColor: 'rgba(218, 215, 205, 0.25)',
          borderRadius: 'var(--border-radius-lg)',
          fontSize: '13px',
          color: 'var(--on-surface-variant)',
          lineHeight: '1.5'
        }}>
          <strong style={{ color: 'var(--primary)', display: 'block', marginBottom: '4px' }}>Finalidade Didática:</strong>
          Este manual interativo foi desenvolvido como requisito avaliativo prático para a disciplina de <strong>Avaliação de Impacto Ambiental</strong> do curso de Engenharia da UTFPR - Campus Medianeira. O intuito é condensar e simplificar os ritos regulatórios do IAT para pequenos produtores do setor frigorífico de suínos, bovinos e aves.
        </div>

        {/* System action buttons */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '8px', borderTop: '1px solid var(--clay-gray)', paddingTop: '20px' }}>
          <a 
            href="https://github.com/Lukasroc1/manual-licenciamento" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary"
            style={{ padding: '8px 18px', fontSize: '12px' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>code</span>
            Código Fonte
          </a>
          <a 
            href="https://lukasroc1.github.io/manual-licenciamento/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
            style={{ padding: '8px 18px', fontSize: '12px' }}
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>open_in_new</span>
            Acessar Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
