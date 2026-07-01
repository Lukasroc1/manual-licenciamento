import React, { useState } from 'react';

const ProcessoLicenciamento = ({ onPageChange }) => {
  const [activeTab, setActiveTab] = useState('las');

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-stack-md)' }}>
      {/* Page Header */}
      <section style={{ borderBottom: '1px solid var(--clay-gray)', paddingBottom: '20px' }}>
        <h2 style={{ fontSize: '28px', color: 'var(--earth-black)', margin: '0 0 12px 0', fontFamily: 'var(--font-headline)', fontWeight: 700 }}>
          Processo de Licenciamento
        </h2>
        <p style={{ color: 'var(--on-surface-variant)', fontSize: '16px', maxWidth: '800px', margin: 0, lineHeight: '1.6' }}>
          Entenda o fluxo regulatório necessário para a regularização ambiental da sua atividade. Todo o processo no estado do Paraná é obrigatoriamente tramitado via sistema digital <strong>SGA/IAT</strong>.
        </p>
      </section>

      {/* Tabs */}
      <section style={{ display: 'flex', borderBottom: '1px solid var(--clay-gray)', gap: '8px', overflowX: 'auto', paddingBottom: '2px' }}>
        <button 
          onClick={() => setActiveTab('las')}
          style={{
            padding: '16px 28px',
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: activeTab === 'las' ? '3px solid var(--secondary)' : '3px solid transparent',
            color: activeTab === 'las' ? 'var(--primary)' : 'var(--on-surface-variant)',
            fontWeight: activeTab === 'las' ? 700 : 500,
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            outline: 'none'
          }}
        >
          Licenciamento Simplificado (LAS)
        </button>
        <button 
          onClick={() => setActiveTab('trifasico')}
          style={{
            padding: '16px 28px',
            backgroundColor: 'transparent',
            border: 'none',
            borderBottom: activeTab === 'trifasico' ? '3px solid var(--secondary)' : '3px solid transparent',
            color: activeTab === 'trifasico' ? 'var(--primary)' : 'var(--on-surface-variant)',
            fontWeight: activeTab === 'trifasico' ? 700 : 500,
            fontFamily: 'var(--font-body)',
            fontSize: '15px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            outline: 'none'
          }}
        >
          Licenciamento Trifásico (LP, LI, LO)
        </button>
      </section>

      {/* Main Flow Content & Sidebar */}
      <div className="grid-12">
        {/* Left Column: Flow Steps */}
        <div style={{ gridColumn: 'span 8' }}>
          {activeTab === 'las' ? (
            <div className="card-academic" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--clay-gray)', paddingBottom: '16px' }}>
                <h3 style={{ fontSize: '20px', margin: 0, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="material-symbols-outlined">bolt</span>
                  Fluxo Simplificado (LAS)
                </h3>
                <button 
                  onClick={() => onPageChange('simplificado')}
                  className="btn btn-secondary" 
                  style={{ padding: '6px 16px', fontSize: '13px' }}
                >
                  Ver Fluxograma Detalhado
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
                {/* Steps with Timeline */}
                <div style={{ display: 'flex', gap: '20px', position: 'relative', paddingBottom: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: 'var(--border-radius-full)', backgroundColor: 'var(--primary)', color: 'var(--paper-white)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', zIndex: 2 }}>1</div>
                    <div style={{ width: '2px', flex: 1, backgroundColor: 'var(--clay-gray)', marginTop: '8px', zIndex: 1 }} />
                  </div>
                  <div style={{ paddingBottom: '12px' }}>
                    <h4 style={{ fontSize: '16px', margin: '4px 0 8px 0', color: 'var(--primary)' }}>Solicitação no SGA/IAT</h4>
                    <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.5' }}>
                      Início do processo digital. O consultor ou empreendedor acessa o sistema SGA, cadastra o imóvel e vincula a atividade de abate sob a categoria simplificada.
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', position: 'relative', paddingBottom: '24px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: 'var(--border-radius-full)', border: '2px solid var(--secondary)', backgroundColor: 'var(--paper-white)', color: 'var(--secondary)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', zIndex: 2 }}>2</div>
                    <div style={{ width: '2px', flex: 1, backgroundColor: 'var(--clay-gray)', marginTop: '8px', zIndex: 1 }} />
                  </div>
                  <div style={{ paddingBottom: '12px' }}>
                    <h4 style={{ fontSize: '16px', margin: '4px 0 8px 0', color: 'var(--primary)' }}>Anexação de Projetos e Anuências</h4>
                    <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.5' }}>
                      Envio em formato PDF das certidões obrigatórias, como a Anuência Prévia de Uso do Solo da Prefeitura e a Outorga/Dispensa de Recursos Hídricos, além do projeto do Sistema de Tratamento de Efluentes Líquidos (STEL).
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '20px', position: 'relative' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: 'var(--border-radius-full)', border: '2px solid var(--clay-gray)', backgroundColor: 'var(--paper-white)', color: 'var(--on-surface-variant)', display: 'flex', alignItems: 'center', justifySelf: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '14px', zIndex: 2 }}>3</div>
                  </div>
                  <div>
                    <h4 style={{ fontSize: '16px', margin: '4px 0 8px 0', color: 'var(--primary)' }}>Análise e Emissão em Etapa Única</h4>
                    <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.5' }}>
                      Após análise dos documentos e projetos pelo IAT, se não houver pendências, é emitida a Licença Ambiental Simplificada (LAS). Ela autoriza a localização, a instalação das instalações físicas e o início imediato das operações.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="card-academic" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--clay-gray)', paddingBottom: '16px' }}>
                <h3 style={{ fontSize: '20px', margin: 0, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span className="material-symbols-outlined">account_tree</span>
                  Fluxograma Trifásico Completo
                </h3>
                <button 
                  onClick={() => onPageChange('trifasico')}
                  className="btn btn-secondary" 
                  style={{ padding: '6px 16px', fontSize: '13px' }}
                >
                  Ver Fluxograma Detalhado
                </button>
              </div>

              {/* Trifasico steps summaries */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '16px', padding: '16px', border: '1px solid var(--clay-gray)', borderRadius: 'var(--border-radius-lg)', backgroundColor: 'rgba(218, 215, 205, 0.1)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--border-radius-full)', backgroundColor: 'var(--primary)', color: 'var(--paper-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>LP</div>
                  <div>
                    <h4 style={{ fontSize: '16px', margin: '0 0 6px 0', color: 'var(--primary)' }}>1. Licença Prévia (LP)</h4>
                    <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0 }}>
                      Atesta a viabilidade locacional da atividade e aprova a concepção inicial. Exige estudos ambientais simples (como Relatório Ambiental Prévio) e certidão municipal de uso do solo. <strong>Obra não permitida nesta fase.</strong>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', padding: '16px', border: '1px solid var(--clay-gray)', borderRadius: 'var(--border-radius-lg)', backgroundColor: 'rgba(218, 215, 205, 0.1)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--border-radius-full)', backgroundColor: 'var(--secondary)', color: 'var(--paper-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>LI</div>
                  <div>
                    <h4 style={{ fontSize: '16px', margin: '0 0 6px 0', color: 'var(--primary)' }}>2. Licença de Instalação (LI)</h4>
                    <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0 }}>
                      Autoriza a implantação física do abatedouro e a construção das estruturas industriais e ambientais. Exige o projeto completo de engenharia hidráulico-sanitária (STEL) e plano de controle ambiental. <strong>Abate proibido nesta fase.</strong>
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '16px', padding: '16px', border: '1px solid var(--clay-gray)', borderRadius: 'var(--border-radius-lg)', backgroundColor: 'rgba(218, 215, 205, 0.1)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: 'var(--border-radius-full)', backgroundColor: 'var(--tertiary)', color: 'var(--paper-white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, flexShrink: 0 }}>LO</div>
                  <div>
                    <h4 style={{ fontSize: '16px', margin: '0 0 6px 0', color: 'var(--primary)' }}>3. Licença de Operação (LO)</h4>
                    <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0 }}>
                      Autoriza o início oficial das operações de abate comercial e industrialização. Exige a apresentação de laudos técnicos de funcionamento dos sistemas de tratamento, outorga de água consolidada e vistoria física final por técnicos do IAT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Support Info / Sidebar cards */}
        <div style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          {/* SGA Access Card */}
          <div className="card-academic" style={{ borderLeft: '4px solid var(--secondary)', position: 'relative', overflow: 'hidden' }}>
            <span className="material-symbols-outlined" style={{ position: 'absolute', right: '12px', top: '12px', fontSize: '64px', opacity: 0.08 }}>computer</span>
            <span style={{ fontSize: '11px', fontWeight: 600, color: 'var(--secondary)', textTransform: 'uppercase', trackingSpace: '0.05em' }}>Sistema Obrigatório</span>
            <h4 style={{ fontSize: '18px', margin: '4px 0 8px 0', color: 'var(--primary)' }}>SGA / IAT</h4>
            <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: '0 0 12px 0', lineHeight: '1.4' }}>
              Todas as etapas do licenciamento no estado do Paraná são digitais e tramitam através do portal do Sistema de Gestão Ambiental.
            </p>
            <a 
              href="https://www.sga.pr.gov.br/" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ fontSize: '13px', fontWeight: 700, color: 'var(--primary)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              Acessar Portal SGA-IAT
              <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>open_in_new</span>
            </a>
          </div>

          {/* Key Documents Card */}
          <div className="card-academic" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '12px 16px', backgroundColor: 'var(--background)', borderBottom: '1px solid var(--clay-gray)' }}>
              <h5 style={{ fontSize: '13px', margin: 0, display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
                <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>description</span>
                Documentos Chave
              </h5>
            </div>
            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ backgroundColor: 'var(--sage-light)', padding: '6px', borderRadius: 'var(--border-radius-md)', height: 'fit-content', color: 'var(--primary)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>location_city</span>
                </div>
                <div>
                  <h6 style={{ fontSize: '13px', margin: '0 0 2px 0', color: 'var(--primary)' }}>Anuência Municipal</h6>
                  <p style={{ fontSize: '11px', color: 'var(--on-surface-variant)', margin: 0 }}>Garante que a Prefeitura concorda com o uso do solo.</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <div style={{ backgroundColor: 'var(--sage-light)', padding: '6px', borderRadius: 'var(--border-radius-md)', height: 'fit-content', color: 'var(--primary)' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>water_drop</span>
                </div>
                <div>
                  <h6 style={{ fontSize: '13px', margin: '0 0 2px 0', color: 'var(--primary)' }}>Outorga de Água</h6>
                  <p style={{ fontSize: '11px', color: 'var(--on-surface-variant)', margin: 0 }}>Concede direito de captação e descarte hídrico.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Tip Card */}
          <div className="card-academic" style={{ borderLeft: '4px solid var(--secondary)', backgroundColor: 'rgba(218,215,205,0.1)', display: 'flex', gap: '10px', alignItems: 'flex-start', padding: '16px' }}>
            <span className="material-symbols-outlined text-secondary" style={{ fontSize: '20px' }}>lightbulb</span>
            <div>
              <h5 style={{ fontSize: '13px', margin: '0 0 4px 0', color: 'var(--primary)', fontWeight: 700 }}>Dica Profissional</h5>
              <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.4' }}>
                Inicie o processo de obtenção de Outorga ou Dispensa de Água de forma paralela ao licenciamento ambiental para evitar atrasos burocráticos.
              </p>
            </div>
          </div>

          {/* LO Renewal Alert */}
          <div className="card-academic" style={{ padding: '16px', backgroundColor: 'rgba(51, 69, 55, 0.03)' }}>
            <h5 style={{ fontSize: '13px', margin: '0 0 6px 0', color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>history</span>
              Renovação de LO
            </h5>
            <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.4' }}>
              O protocolo de renovação da LO deve ser feito com no mínimo <strong>120 dias</strong> de antecedência ao vencimento para garantir a prorrogação automática da licença atual.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Context Section */}
      <section style={{ borderTop: '1px solid var(--clay-gray)', paddingTop: '32px', marginTop: '16px' }}>
        <div className="grid-12" style={{ alignItems: 'center', gap: '32px' }}>
          <div style={{ gridColumn: 'span 6' }}>
            <div style={{ position: 'relative', borderRadius: 'var(--border-radius-xl)', overflow: 'hidden', aspectRatio: '16/9', boxShadow: 'var(--shadow-md)' }}>
              <img 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-oriw_7BNIxs-_1xP6ocZEs9iHLpsZGZmr4ntQhx_Sh4q7GzpCUmEDzQ67zToAG8R96scRfAK0xt9RxGy440tBllu9Mnpr8NRuDq27wWRwlp50bKbtLX4N0iuwA1Wan3QbQH6iohKYzNto23vlvirdu4zg1s61DNpxCYST2uWQp-lEBz-tKuVwrqAQAKTHCfdrOexKau9c5yoP9nBNfUyUgi7ASPPDrs7QwbLyyWuHiRj1cJFa9gvLQ" 
                alt="Instalação de Tratamento de Efluentes Rural" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                right: 0, 
                padding: '12px', 
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))', 
                color: '#fff', 
                fontSize: '11px', 
                fontStyle: 'italic',
                textAlign: 'center'
              }}>
                Exemplo de planta agroindustrial com sistema de controle integrado.
              </div>
            </div>
          </div>
          
          <div style={{ gridColumn: 'span 6' }}>
            <h4 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '12px' }}>Ritos Processuais Diferenciados</h4>
            <p style={{ color: 'var(--on-surface-variant)', fontSize: '15px', lineHeight: '1.6', margin: '0 0 16px 0' }}>
              A definição do rito de licenciamento (Simplificado ou Trifásico) depende de regulamentações estaduais específicas do CEMA (Conselho Estadual do Meio Ambiente do Paraná), que analisam o potencial poluidor e a capacidade produtiva.
            </p>
            <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px', color: 'var(--on-surface)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li>
                <strong>LAS (Simplificado):</strong> Para estabelecimentos que se enquadram rigorosamente nos limites de pequeno porte e operam em regiões com baixo impacto cumulativo.
              </li>
              <li>
                <strong>Trifásico:</strong> Para atividades que excedam os parâmetros de capacidade ou área máxima, ou que se localizem em bacias hidrográficas críticas.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProcessoLicenciamento;
