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
            Guia do Empreendedor
          </span>
          <h2 style={{ fontSize: '32px', color: 'var(--paper-white)', margin: '0 0 8px 0', fontFamily: 'var(--font-headline)', fontWeight: 700 }}>
            Manual para Microempresários
          </h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', fontSize: '16px', maxWidth: '700px', margin: 0 }}>
            O passo a passo descomplicado para planejar, licenciar e operar seu pequeno abatedouro em conformidade com as regras do IAT no Paraná.
          </p>
        </div>
      </section>

      {/* Bento Grid */}
      <div className="grid-12">
        {/* Definition Card (7 cols on large, 12 on small) */}
        <div className="card-academic" style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '16px', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '28px' }}>store</span>
            <h3 style={{ fontSize: '20px', margin: 0, color: 'var(--primary)' }}>
              Regularizar Seu Negócio: O Melhor Caminho para Crescer
            </h3>
          </div>
          <div style={{ color: 'var(--on-surface-variant)', fontSize: '15px', lineHeight: '1.6', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p>
              Se você planeja montar ou formalizar um pequeno abatedouro, a regularização ambiental é a base para a segurança do seu investimento. Estar em dia com as licenças do IAT protege sua empresa contra multas pesadas ou ordens de fechamento, e valoriza a sua marca perante o consumidor.
            </p>
            <p>
              Para apoiar o desenvolvimento regional, o estado do Paraná adota procedimentos simplificados para estabelecimentos de menor escala. Este guia foi construído para traduzir a burocracia jurídica em ações fáceis de entender, permitindo que você planeje a sua estrutura técnica com clareza e eficiência.
            </p>
            <div className="callout" style={{ margin: 0, fontSize: '14px', fontStyle: 'italic' }}>
              "Estar regularizado abre portas para vender em supermercados, conseguir o selo de inspeção sanitária (SIM/SUSAF) e obter financiamento com taxas mais baixas em bancos públicos."
            </div>
          </div>
        </div>

        {/* Criteria & Limits Card (5 cols on large, 12 on small) */}
        <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', gap: 'var(--spacing-gutter)' }}>
          <div className="card-academic" style={{ backgroundColor: 'var(--primary)', color: 'var(--paper-white)', border: 'none' }}>
            <h3 style={{ fontSize: '17px', color: 'var(--paper-white)', marginBottom: '12px' }}>
              Você se enquadra na Categoria Simplificada?
            </h3>
            <p style={{ fontSize: '12px', color: 'rgba(255, 255, 255, 0.8)', margin: '0 0 16px 0', lineHeight: '1.4' }}>
              Para ter direito ao licenciamento simplificado (LAS - etapa única rápida), seu planejamento de abate e estrutura física deve respeitar os seguintes limites máximos:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--border-radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>pets</span>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Bovinos / Equinos</span>
                </div>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>Até 30 cab/mês</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--border-radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>food_bank</span>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Suínos / Ovinos</span>
                </div>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>Até 60 cab/mês</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 'var(--border-radius-md)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>egg</span>
                  <span style={{ fontSize: '14px', fontWeight: 600 }}>Aves / Coelhos</span>
                </div>
                <span style={{ fontWeight: 700, fontSize: '14px' }}>Até 3000 aves/mês</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', backgroundColor: 'var(--secondary)', borderRadius: 'var(--border-radius-md)', marginTop: '4px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>square_foot</span>
                  <span style={{ fontSize: '14px', fontWeight: 700 }}>Área Construída Máx.</span>
                </div>
                <span style={{ fontWeight: 800, fontSize: '14px' }}>Até 500m²</span>
              </div>
            </div>
          </div>

          <div className="card-academic" style={{ borderLeft: '4px solid var(--secondary)', display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '16px' }}>
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '24px' }}>lightbulb</span>
            <div>
              <h4 style={{ fontSize: '13px', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--secondary)' }}>Atenção ao Limite</h4>
              <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.4' }}>
                Caso o seu negócio passe de qualquer uma destas métricas, o IAT exigirá o licenciamento ambiental trifásico padrão, com análises de impacto mais complexas e demoradas.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Descriptive Content Table */}
      <section className="card-academic" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ padding: '20px 24px', backgroundColor: 'rgba(218, 215, 205, 0.2)', borderBottom: '1px solid var(--clay-gray)' }}>
          <h3 style={{ fontSize: '18px', margin: 0, color: 'var(--primary)' }}>Termos do Licenciamento de Forma Simples</h3>
        </div>
        <div style={{ overflowX: 'auto' }}>
          <table className="table-academic" style={{ margin: 0 }}>
            <thead>
              <tr>
                <th>Termo</th>
                <th>O que significa na prática para a sua empresa</th>
                <th>Onde diz isso na lei</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ fontWeight: 700, color: 'var(--primary)' }}>Animais de Açougue</td>
                <td>Bovinos, suínos, ovelhas, cabras, coelhos e aves que você está autorizado a processar no abatedouro para consumo humano.</td>
                <td style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '13px' }}>RIISPOA Art. 12</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 700, color: 'var(--primary)' }}>Área Construída</td>
                <td>A soma das áreas cobertas onde haverá processamento ou atividades industriais. Áreas abertas de pastagem ou circulação não contam neste cálculo de 500m².</td>
                <td style={{ color: 'var(--secondary)', fontWeight: 600, fontSize: '13px' }}>Norma Técnica 01/24</td>
              </tr>
              <tr>
                <td style={{ fontWeight: 700, color: 'var(--primary)' }}>Impacto Local</td>
                <td>Atividades onde qualquer barulho, cheiro ou efluente gerado afeta apenas a vizinhança imediata da empresa, sem impacto regional amplo.</td>
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
