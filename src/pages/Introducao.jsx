import React from 'react';

const Introducao = () => {
  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-stack-md)' }}>
      {/* Hero Banner */}
      <section style={{
        position: 'relative',
        borderRadius: 'var(--border-radius-xl)',
        overflow: 'hidden',
        height: '280px',
        boxShadow: 'var(--shadow-sm)',
        display: 'flex',
        alignItems: 'flex-end',
        backgroundImage: 'linear-gradient(rgba(51, 69, 55, 0.45) 0%, rgba(44, 44, 44, 0.85) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBTPViRhwZtcTkF8y-Rr3V1i2hpzQS5gNMfLhE1famv6r2ktviNsydFdZ3CEfZjifruTvhvMQBjj18GSUV34dNK-v81b0FJVsDDH-aRyf4JOhw6oO7b63BG02L_EPGw1-xM1GYKT9M6qZD-zu-dSUSFMEnmdia63no_GSzZOK5d4tytdOO_hJWs_sKGS1N9Xa87I5CBPuA9MM5mkgVdbIIDOL8Ufep4JrwzwN3VbMCSR6Uqf1_18kBJ9Q")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div style={{ padding: '32px', zIndex: 10, width: '100%' }}>
          <span style={{
            backgroundColor: 'var(--secondary-container)',
            color: 'var(--on-secondary-container)',
            padding: '4px 12px',
            borderRadius: 'var(--border-radius-full)',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            display: 'inline-block',
            marginBottom: '12px'
          }}>
            Capítulo 01
          </span>
          <h2 style={{ fontSize: '32px', color: 'var(--paper-white)', margin: '0 0 8px 0', fontFamily: 'var(--font-headline)', fontWeight: 700 }}>
            1. Introdução e Definição
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px', maxWidth: '700px', margin: 0 }}>
            Estabelecendo as bases legais e conceituais para o licenciamento de abatedouros de pequeno porte.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <div className="grid-12">
        {/* Definition Card (7 cols on large, 12 on small) */}
        <div className="card-academic" style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>info</span>
            <h3 style={{ fontSize: '20px', margin: 0, color: 'var(--primary)' }}>
              O que é um Abatedouro de Pequeno Porte?
            </h3>
          </div>
          <div style={{ color: 'var(--on-surface-variant)', fontSize: '15px', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p>
              Considera-se <strong>Abatedouro de Pequeno Porte</strong> o estabelecimento destinado ao abate de animais de açougue, com instalações simplificadas e voltadas ao atendimento de demandas locais e regionais, observando rigorosos critérios de higiene e impacto ambiental.
            </p>
            <p>
              Este manual visa orientar o empreendedor sobre o processo de regularização no estado do Paraná (conforme diretrizes do IAT), garantindo que a atividade econômica prospere em conformidade com as exigências dos órgãos de fiscalização sanitária e ambiental.
            </p>
            <div className="callout" style={{ margin: 0, fontSize: '14px', fontStyle: 'italic' }}>
              "A simplificação do processo não exclui a necessidade de rigor técnico; ela foca na escala da operação para adequar as exigências à realidade do pequeno produtor."
            </div>
          </div>
        </div>

        {/* Criteria & Limits Card (5 cols on large, 12 on small) */}
        <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-gutter)' }}>
          <div className="card-academic" style={{ backgroundColor: 'var(--primary)', color: 'var(--paper-white)', border: 'none' }}>
            <h3 style={{ fontSize: '18px', color: 'var(--paper-white)', marginBottom: '16px' }}>
              Critérios de Enquadramento
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--border-radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>pets</span>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Bovinos / Equinos</span>
                </div>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>30 cab/mês</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--border-radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>food_bank</span>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Suínos / Ovinos</span>
                </div>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>60 cab/mês</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--border-radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>egg</span>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Aves / Coelhos</span>
                </div>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>3000 aves/mês</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--secondary)', borderRadius: 'var(--border-radius-md)', marginTop: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>square_foot</span>
                  <span style={{ fontSize: '14px', fontWeight: 700 }}>Área Construída Máx.</span>
                </div>
                <span style={{ fontWeight: 800, fontSize: '14px' }}>500m²</span>
              </div>
            </div>
          </div>

          <div className="card-academic" style={{ borderLeft: '4px solid var(--secondary)', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '16px' }}>
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '24px' }}>lightbulb</span>
            <div>
              <h4 style={{ fontSize: '13px', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--secondary)' }}>Atenção ao Limite</h4>
              <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.4' }}>
                O não cumprimento de qualquer um destes limites (capacidade ou área) desenquadra o estabelecimento da categoria "Pequeno Porte", exigindo licenciamento convencional mais complexo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Descriptive Content Table */}
      <section className="card-academic" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', backgroundColor: 'rgba(218, 215, 205, 0.2)', borderBottom: '1px solid var(--clay-gray)' }}>
          <h3 style={{ fontSize: '18px', margin: 0, color: 'var(--primary)' }}>Resumo das Definições Legais</h3>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="table-academic" style={{ margin: 0 }}>
            <thead>
              <tr>
                <th>Termo</th>
                <th>Significado no Contexto do Manual</th>
                <th>Referência</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 700, color: 'var(--primary)' }}>Animais de Açougue</td>
                <td>Bovídeos, equídeos, suídeos, ovinos, caprinos, coelhos e aves domésticas destinadas ao consumo humano.</td>
                <td style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '13px' }}>RIISPOA Art. 12</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 700, color: 'var(--primary)' }}>Área Construída</td>
                <td>Soma das áreas cobertas de todos os pavimentos do estabelecimento destinadas ao processo industrial ou anexo.</td>
                <td style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '13px' }}>Norma Técnica 01/24</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 700, color: 'var(--primary)' }}>Impacto Local</td>
                <td>Atividade econômica cujo impacto ambiental direto se restringe aos limites territoriais do município.</td>
                <td style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '13px' }}>CONAMA 237/97</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Introducao;
