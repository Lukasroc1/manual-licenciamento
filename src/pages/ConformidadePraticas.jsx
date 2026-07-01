import React, { useState } from 'react';

const ConformidadePraticas = () => {
  const [activeAccordion, setActiveAccordion] = useState(0); // 0, 1, 2 or null

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-stack-md)' }}>
      {/* Page Header */}
      <section style={{ borderBottom: '1px solid var(--clay-gray)', paddingBottom: '20px' }}>
        <h2 style={{ fontSize: '28px', color: 'var(--earth-black)', margin: '0 0 12px 0', fontFamily: 'var(--font-headline)', fontWeight: 700 }}>
          Dicas de Interface e Boas Práticas
        </h2>
        <p style={{ color: 'var(--on-surface-variant)', fontSize: '16px', maxWidth: '800px', margin: 0, lineHeight: '1.6' }}>
          A conformidade ambiental vai além da obtenção de documentos nas fases iniciais. Trata-se de uma postura operacional contínua que assegura a sustentabilidade do negócio e reduz riscos de sanções.
        </p>
      </section>

      {/* Main Grid */}
      <div className="grid-12">
        {/* Left Column: Intro and Accordions */}
        <div style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Intro Card */}
          <div className="card-academic" style={{ borderLeft: '4px solid var(--primary)', backgroundColor: 'rgba(51, 69, 55, 0.03)' }}>
            <p style={{ fontSize: '15px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.6' }}>
              Manter o abatedouro operando de forma legal exige controle de rotinas de higienização, calibração de instrumentos, manutenção preventiva e análises laboratoriais recorrentes. Veja abaixo os pontos de atenção crítica.
            </p>
          </div>

          {/* Accordion Section */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <h3 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="material-symbols-outlined">lightbulb</span>
              Pontos de Atenção Crítica
            </h3>

            {/* Accordion 1 */}
            <div style={{ 
              border: '1px solid var(--clay-gray)', 
              borderRadius: 'var(--border-radius-lg)', 
              backgroundColor: 'var(--paper-white)',
              overflow: 'hidden'
            }}>
              <button 
                onClick={() => toggleAccordion(0)}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: activeAccordion === 0 ? 'rgba(218, 215, 205, 0.15)' : 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--error)', fontSize: '20px' }}>warning</span>
                  <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--earth-black)', fontFamily: 'var(--font-headline)' }}>
                    Atenção às Condicionantes
                  </span>
                </div>
                <span className="material-symbols-outlined" style={{ 
                  transition: 'transform 0.3s ease', 
                  transform: activeAccordion === 0 ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: 'var(--on-surface-variant)'
                }}>
                  expand_more
                </span>
              </button>
              
              <div style={{ 
                maxHeight: activeAccordion === 0 ? '500px' : '0px', 
                overflow: 'hidden', 
                transition: 'all 0.3s ease-out',
                padding: activeAccordion === 0 ? '20px' : '0 20px'
              }}>
                <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
                  As licenças ambientais não são definitivas ou estáticas. Elas contêm obrigações periódicas (condicionantes) que devem ser seguidas à risca.
                </p>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: 'var(--on-surface-variant)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <li>O descumprimento de uma única condicionante pode acarretar na cassação imediata da sua licença.</li>
                  <li>Mantenha planilhas de monitoramento com prazos para o envio dos relatórios de conformidade.</li>
                  <li>Inspeções periódicas de órgãos como o IAT verificam o cumprimento físico dessas condições no abatedouro.</li>
                </ul>
              </div>
            </div>

            {/* Accordion 2 */}
            <div style={{ 
              border: '1px solid var(--clay-gray)', 
              borderRadius: 'var(--border-radius-lg)', 
              backgroundColor: 'var(--paper-white)',
              overflow: 'hidden'
            }}>
              <button 
                onClick={() => toggleAccordion(1)}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: activeAccordion === 1 ? 'rgba(218, 215, 205, 0.15)' : 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--tertiary)', fontSize: '20px' }}>account_balance</span>
                  <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--earth-black)', fontFamily: 'var(--font-headline)' }}>
                    Integração com Outros Órgãos (ADAPAR, SIM)
                  </span>
                </div>
                <span className="material-symbols-outlined" style={{ 
                  transition: 'transform 0.3s ease', 
                  transform: activeAccordion === 1 ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: 'var(--on-surface-variant)'
                }}>
                  expand_more
                </span>
              </button>
              
              <div style={{ 
                maxHeight: activeAccordion === 1 ? '500px' : '0px', 
                overflow: 'hidden', 
                transition: 'all 0.3s ease-out',
                padding: activeAccordion === 1 ? '20px' : '0 20px'
              }}>
                <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)', margin: '0 0 12px 0', lineHeight: '1.5' }}>
                  O licenciamento no IAT resolve as obrigações de impacto ecológico, mas a operação comercial e higiênica necessita de inspeção sanitária complementar.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '12px' }}>
                  <div style={{ padding: '12px', backgroundColor: 'var(--background)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--clay-gray)' }}>
                    <strong style={{ fontSize: '13px', color: 'var(--primary)', display: 'block', marginBottom: '4px' }}>ADAPAR</strong>
                    <span style={{ fontSize: '11px', color: 'var(--on-surface-variant)', lineHeight: '1.4' }}>Foco no trânsito de animais vivos (GTA) e controle preventivo de zoonoses no estado do Paraná.</span>
                  </div>
                  <div style={{ padding: '12px', backgroundColor: 'var(--background)', borderRadius: 'var(--border-radius-md)', border: '1px solid var(--clay-gray)' }}>
                    <strong style={{ fontSize: '13px', color: 'var(--primary)', display: 'block', marginBottom: '4px' }}>SIM / SUSAF</strong>
                    <span style={{ fontSize: '11px', color: 'var(--on-surface-variant)', lineHeight: '1.4' }}>Serviço de Inspeção Municipal. Avalia a qualidade sanitária, carimbos de inspeção e rotulagem das carnes.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Accordion 3 */}
            <div style={{ 
              border: '1px solid var(--clay-gray)', 
              borderRadius: 'var(--border-radius-lg)', 
              backgroundColor: 'var(--paper-white)',
              overflow: 'hidden'
            }}>
              <button 
                onClick={() => toggleAccordion(2)}
                style={{
                  width: '100%',
                  padding: '16px 20px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: activeAccordion === 2 ? 'rgba(218, 215, 205, 0.15)' : 'transparent',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer',
                  outline: 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span className="material-symbols-outlined" style={{ color: 'var(--secondary)', fontSize: '20px' }}>visibility</span>
                  <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--earth-black)', fontFamily: 'var(--font-headline)' }}>
                    Transparência e Responsabilidade Social
                  </span>
                </div>
                <span className="material-symbols-outlined" style={{ 
                  transition: 'transform 0.3s ease', 
                  transform: activeAccordion === 2 ? 'rotate(180deg)' : 'rotate(0deg)',
                  color: 'var(--on-surface-variant)'
                }}>
                  expand_more
                </span>
              </button>
              
              <div style={{ 
                maxHeight: activeAccordion === 2 ? '500px' : '0px', 
                overflow: 'hidden', 
                transition: 'all 0.3s ease-out',
                padding: activeAccordion === 2 ? '20px' : '0 20px'
              }}>
                <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.5' }}>
                  Mantenha a pasta de licenças físicas e laudos analíticos acessíveis e organizados na administração do abatedouro. Isso agiliza as visitas de rotina dos fiscais do IAT e da vigilância sanitária, e demonstra a seriedade técnica do empreendimento perante a comunidade e compradores.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Core Details */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div className="card-academic" style={{ borderLeft: '4px solid var(--primary)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>verified_user</span>
                <h4 style={{ fontSize: '16px', margin: 0 }}>Importância da ART</h4>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.5' }}>
                Toda planta física industrial, planta do sistema de efluentes ou manejo deve obrigatoriamente possuir <strong>Anotação de Responsabilidade Técnica (ART)</strong> emitida pelo conselho de classe do profissional executor (CREA / CRMV). É o respaldo do seu abatedouro.
              </p>
            </div>

            <div className="card-academic" style={{ borderLeft: '4px solid var(--secondary)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--secondary)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>water_drop</span>
                <h4 style={{ fontSize: '16px', margin: 0 }}>Análise da Água</h4>
              </div>
              <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.5' }}>
                A água de abastecimento industrial do abatedouro (principalmente de poços artesianos) deve passar por análises trimestrais em laboratório credenciado, medindo parâmetros microbiológicos e químicos (nitrito, ferro, cloro livre) para garantir a potabilidade da carne abatida.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Practical Tip & Visual */}
        <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* Tip Callout */}
          <div className="card-academic" style={{ borderLeft: '4px solid var(--secondary)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--secondary)' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>tips_and_updates</span>
              <span style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Dica Prática</span>
            </div>
            <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', fontStyle: 'italic', margin: 0, lineHeight: '1.4' }}>
              "Use um software simples ou até mesmo uma planilha para controlar o estoque de produtos químicos de limpeza e os vencimentos das licenças. A organização evita paradas inesperadas na produção e multas fiscais."
            </p>
          </div>

          {/* Quality Control Image Card */}
          <div className="card-academic" style={{ padding: 0, overflow: 'hidden', border: '1px solid var(--clay-gray)' }}>
            <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1gsPfygWWjo5IdSNxsDPw3ZCrxWUJ98XWtwWqv6WGe8UDtcZcaOt9zL9do8sY2aBK2GhZraWIpuyNB9souT2NQmzbfLNubyD2V-X62sp6f9p8Tmla5K5wVyEVWzDk-kn5X3vjVnQU2ObDnrddPlKYCHVy27aI0b73LxNsvm9O0R7Te09041p9xG65wwnSgauFUGZJE9IvKa2sDYNov_DaupemJE6aZ5ZbzeQ9ZO2k8XtyJlWLZlFb9A" 
                alt="Controle de Qualidade em Laboratório" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                padding: '16px 20px', 
                background: 'linear-gradient(transparent, rgba(0,0,0,0.85))',
                color: 'white',
                fontWeight: 600,
                fontSize: '13px'
              }}>
                Controle de Qualidade & Conformidade
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConformidadePraticas;
