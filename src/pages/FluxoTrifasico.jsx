import React, { useState } from 'react';

const FluxoTrifasico = () => {
  const [activePhase, setActivePhase] = useState('lp'); // 'lp', 'li', 'lo', 'done'
  const [simStatus, setSimStatus] = useState('idle'); // 'idle', 'checking', 'approved', 'rejected'
  const [rejectedMessage, setRejectedMessage] = useState('');

  const runSimulation = (approved) => {
    setSimStatus('checking');
    setTimeout(() => {
      if (approved) {
        setSimStatus('approved');
        setTimeout(() => {
          if (activePhase === 'lp') {
            setActivePhase('li');
          } else if (activePhase === 'li') {
            setActivePhase('lo');
          } else if (activePhase === 'lo') {
            setActivePhase('done');
          }
          setSimStatus('idle');
        }, 1200);
      } else {
        setSimStatus('rejected');
        if (activePhase === 'lp') {
          setRejectedMessage('Anuência Municipal desatualizada ou com zoneamento inadequado para abatedouros.');
        } else if (activePhase === 'li') {
          setRejectedMessage('Subdimensionamento do reator anaeróbio do STEL no projeto hidrossanitário.');
        } else if (activePhase === 'lo') {
          setRejectedMessage('Laudo microbiológico indicando coliformes totais acima do limite aceitável na saída do tratamento.');
        }
      }
    }, 1000);
  };

  const resetSimulation = () => {
    setActivePhase('lp');
    setSimStatus('idle');
    setRejectedMessage('');
  };

  const renderChecklist = (phase) => {
    if (phase === 'lp') {
      return (
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>description</span>
            <span>Requerimento de Licenciamento Ambiental (RLA) preenchido.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>verified</span>
            <span>Certidão de Anuência Prévia do Município (Uso do Solo).</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>article</span>
            <span>Matrícula atualizada do imóvel (máx. 90 dias).</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>map</span>
            <span>Mapa de localização do imóvel com hidrografia (QGIS).</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>news</span>
            <span>Comprovante de Publicação de Súmula de Requerimento de LP.</span>
          </li>
        </ul>
      );
    }
    if (phase === 'li') {
      return (
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>architecture</span>
            <span>Projeto Completo do Sistema de Tratamento de Efluentes (STEL).</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>assignment</span>
            <span>Plano de Controle Ambiental (PCA) com memorial descritivo.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>delete_sweep</span>
            <span>Plano de Gerenciamento de Resíduos Sólidos (PGRS).</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>contract</span>
            <span>Anotação de Responsabilidade Técnica (ART) dos projetos.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>water_drop</span>
            <span>Outorga Prévia ou Dispensa de Recursos Hídricos.</span>
          </li>
        </ul>
      );
    }
    if (phase === 'lo') {
      return (
        <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>content_copy</span>
            <span>Cópia da Licença de Instalação (LI) e conformidade de condicionantes.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>biotech</span>
            <span>Laudos analíticos físico-químicos e microbiológicos do STEL.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>gavel</span>
            <span>Portaria de Outorga de Direito de Uso da Água Definitiva.</span>
          </li>
          <li style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--on-surface-variant)' }}>
            <span className="material-symbols-outlined text-primary" style={{ fontSize: '18px', marginTop: '2px' }}>add_a_photo</span>
            <span>Relatório fotográfico das instalações industriais concluídas.</span>
          </li>
        </ul>
      );
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-stack-md)' }}>
      {/* Title */}
      <section style={{ borderBottom: '1px solid var(--clay-gray)', paddingBottom: '20px' }}>
        <h2 style={{ fontSize: '28px', color: 'var(--earth-black)', margin: '0 0 12px 0', fontFamily: 'var(--font-headline)', fontWeight: 700 }}>
          Fluxograma: Licenciamento Trifásico
        </h2>
        <p style={{ color: 'var(--on-surface-variant)', fontSize: '16px', maxWidth: '800px', margin: 0, lineHeight: '1.6' }}>
          O licenciamento ambiental trifásico é o procedimento administrativo padrão para empreendimentos de potencial impacto. Siga o fluxo abaixo para entender as exigências e os marcos decisórios de cada etapa.
        </p>
      </section>

      {/* Simulator Control Panel */}
      <section className="card-academic" style={{ backgroundColor: 'rgba(51, 69, 55, 0.05)', display: 'flex', flexDirection: 'column', gap: '16px', border: '1px dashed var(--primary)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <h4 style={{ fontSize: '16px', margin: '0 0 4px 0', color: 'var(--primary)' }}>
              Simulador Interativo de Tramitação SGA
            </h4>
            <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0 }}>
              Simule a análise documental do IAT para cada fase do processo de licenciamento trifásico.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {activePhase !== 'done' ? (
              <>
                <button 
                  onClick={() => runSimulation(true)} 
                  disabled={simStatus === 'checking' || simStatus === 'approved'}
                  className="btn btn-primary"
                  style={{ padding: '8px 16px', fontSize: '12px' }}
                >
                  Simular Aprovação
                </button>
                <button 
                  onClick={() => runSimulation(false)} 
                  disabled={simStatus === 'checking' || simStatus === 'approved'}
                  className="btn btn-secondary"
                  style={{ padding: '8px 16px', fontSize: '12px', border: '1px solid var(--error)', color: 'var(--error)' }}
                >
                  Gerar Pendência
                </button>
              </>
            ) : (
              <button onClick={resetSimulation} className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '12px' }}>
                Reiniciar Simulação
              </button>
            )}
          </div>
        </div>

        {/* Status indicator */}
        {simStatus === 'checking' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--primary)', fontWeight: 600 }}>
            <span className="material-symbols-outlined animate-spin" style={{ animation: 'spin 1s linear infinite' }}>autorenew</span>
            <span>Técnico do IAT analisando a pasta digital...</span>
          </div>
        )}
        {simStatus === 'approved' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--success)', fontWeight: 600 }}>
            <span className="material-symbols-outlined">check_circle</span>
            <span>Parabéns! Documentação deferida. Avançando de fase...</span>
          </div>
        )}
        {simStatus === 'rejected' && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--error)', fontWeight: 600 }}>
            <span className="material-symbols-outlined">cancel</span>
            <span>Ofício de Pendência Emitido: {rejectedMessage}</span>
          </div>
        )}
      </section>

      {/* The Visual Flowchart */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative', margin: '24px 0' }}>
        {/* Phase 1: LP */}
        <div className="grid-12" style={{ width: '100%', alignItems: 'center', opacity: activePhase === 'lp' ? 1 : 0.6, transition: 'opacity 0.3s ease' }}>
          <div className="card-academic" style={{ 
            gridColumn: 'span 7', 
            borderColor: activePhase === 'lp' ? 'var(--primary)' : 'var(--clay-gray)',
            borderWidth: activePhase === 'lp' ? '2px' : '1px',
            backgroundColor: activePhase === 'lp' ? 'var(--paper-white)' : 'rgba(255,255,255,0.7)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', borderBottom: '1px solid var(--clay-gray)', paddingBottom: '12px' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: 'var(--border-radius-full)', 
                backgroundColor: activePhase === 'lp' ? 'var(--primary)' : 'var(--clay-gray)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700
              }}>1</div>
              <h3 style={{ fontSize: '18px', margin: 0, color: 'var(--primary)' }}>Licença Prévia (LP)</h3>
            </div>
            {renderChecklist('lp')}
          </div>

          {/* Connection column */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 16px' }}>
            {activePhase === 'lp' && simStatus === 'rejected' ? (
              <div className="animate-fade-in" style={{ 
                border: '2px dashed var(--error)', 
                borderRadius: 'var(--border-radius-lg)', 
                padding: '16px', 
                backgroundColor: 'var(--error-container)', 
                color: 'var(--on-error-container)',
                fontSize: '12px',
                width: '100%'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, marginBottom: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>warning</span>
                  <span>REVISAR LP (PENDÊNCIA)</span>
                </div>
                <p style={{ margin: '0 0 8px 0', lineHeight: '1.4' }}>{rejectedMessage}</p>
                <button 
                  onClick={() => setSimStatus('idle')} 
                  style={{ border: 'none', background: 'var(--error)', color: 'white', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}
                >
                  Corrigir e Reenviar
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', transform: 'rotate(45deg)', border: '1px solid var(--clay-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ transform: 'rotate(-45deg)', fontSize: '11px', fontWeight: 700, color: 'var(--primary)', textAlign: 'center' }}>Aprovado?</div>
                </div>
                <div style={{ height: '30px', width: '2px', backgroundColor: 'var(--clay-gray)', margin: '4px 0' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)' }}>SIM</span>
              </div>
            )}
          </div>
        </div>

        {/* Vertical arrow */}
        <div style={{ height: '24px', width: '2px', backgroundColor: 'var(--clay-gray)', margin: '16px 0' }} />

        {/* Phase 2: LI */}
        <div className="grid-12" style={{ width: '100%', alignItems: 'center', opacity: activePhase === 'li' ? 1 : 0.6, transition: 'opacity 0.3s ease' }}>
          <div className="card-academic" style={{ 
            gridColumn: 'span 7', 
            borderColor: activePhase === 'li' ? 'var(--primary)' : 'var(--clay-gray)',
            borderWidth: activePhase === 'li' ? '2px' : '1px',
            backgroundColor: activePhase === 'li' ? 'var(--paper-white)' : 'rgba(255,255,255,0.7)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', borderBottom: '1px solid var(--clay-gray)', paddingBottom: '12px' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: 'var(--border-radius-full)', 
                backgroundColor: activePhase === 'li' ? 'var(--primary)' : 'var(--clay-gray)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700
              }}>2</div>
              <h3 style={{ fontSize: '18px', margin: 0, color: 'var(--primary)' }}>Licença de Instalação (LI)</h3>
            </div>
            {renderChecklist('li')}
          </div>

          {/* Connection column */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 16px' }}>
            {activePhase === 'li' && simStatus === 'rejected' ? (
              <div className="animate-fade-in" style={{ 
                border: '2px dashed var(--error)', 
                borderRadius: 'var(--border-radius-lg)', 
                padding: '16px', 
                backgroundColor: 'var(--error-container)', 
                color: 'var(--on-error-container)',
                fontSize: '12px',
                width: '100%'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, marginBottom: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>warning</span>
                  <span>REVISAR LI (PENDÊNCIA)</span>
                </div>
                <p style={{ margin: '0 0 8px 0', lineHeight: '1.4' }}>{rejectedMessage}</p>
                <button 
                  onClick={() => setSimStatus('idle')} 
                  style={{ border: 'none', background: 'var(--error)', color: 'white', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}
                >
                  Corrigir e Reenviar
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', transform: 'rotate(45deg)', border: '1px solid var(--clay-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ transform: 'rotate(-45deg)', fontSize: '11px', fontWeight: 700, color: 'var(--primary)', textAlign: 'center' }}>Aprovado?</div>
                </div>
                <div style={{ height: '30px', width: '2px', backgroundColor: 'var(--clay-gray)', margin: '4px 0' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)' }}>SIM</span>
              </div>
            )}
          </div>
        </div>

        {/* Vertical arrow */}
        <div style={{ height: '24px', width: '2px', backgroundColor: 'var(--clay-gray)', margin: '16px 0' }} />

        {/* Phase 3: LO */}
        <div className="grid-12" style={{ width: '100%', alignItems: 'center', opacity: activePhase === 'lo' ? 1 : 0.6, transition: 'opacity 0.3s ease' }}>
          <div className="card-academic" style={{ 
            gridColumn: 'span 7', 
            borderColor: activePhase === 'lo' ? 'var(--primary)' : 'var(--clay-gray)',
            borderWidth: activePhase === 'lo' ? '2px' : '1px',
            backgroundColor: activePhase === 'lo' ? 'var(--paper-white)' : 'rgba(255,255,255,0.7)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', borderBottom: '1px solid var(--clay-gray)', paddingBottom: '12px' }}>
              <div style={{ 
                width: '32px', 
                height: '32px', 
                borderRadius: 'var(--border-radius-full)', 
                backgroundColor: activePhase === 'lo' ? 'var(--primary)' : 'var(--clay-gray)',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700
              }}>3</div>
              <h3 style={{ fontSize: '18px', margin: 0, color: 'var(--primary)' }}>Licença de Operação (LO)</h3>
            </div>
            {renderChecklist('lo')}
          </div>

          {/* Connection column */}
          <div style={{ gridColumn: 'span 5', display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '0 16px' }}>
            {activePhase === 'lo' && simStatus === 'rejected' ? (
              <div className="animate-fade-in" style={{ 
                border: '2px dashed var(--error)', 
                borderRadius: 'var(--border-radius-lg)', 
                padding: '16px', 
                backgroundColor: 'var(--error-container)', 
                color: 'var(--on-error-container)',
                fontSize: '12px',
                width: '100%'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, marginBottom: '6px' }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>warning</span>
                  <span>REVISAR LO (PENDÊNCIA)</span>
                </div>
                <p style={{ margin: '0 0 8px 0', lineHeight: '1.4' }}>{rejectedMessage}</p>
                <button 
                  onClick={() => setSimStatus('idle')} 
                  style={{ border: 'none', background: 'var(--error)', color: 'white', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', fontWeight: 600 }}
                >
                  Corrigir e Reenviar
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '80px', height: '80px', transform: 'rotate(45deg)', border: '1px solid var(--clay-gray)', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ transform: 'rotate(-45deg)', fontSize: '11px', fontWeight: 700, color: 'var(--primary)', textAlign: 'center' }}>Aprovado?</div>
                </div>
                <div style={{ height: '30px', width: '2px', backgroundColor: 'var(--clay-gray)', margin: '4px 0' }} />
                <span style={{ fontSize: '11px', fontWeight: 700, color: 'var(--primary)' }}>SIM</span>
              </div>
            )}
          </div>
        </div>

        {/* Vertical arrow */}
        <div style={{ height: '24px', width: '2px', backgroundColor: 'var(--clay-gray)', margin: '16px 0' }} />

        {/* Final State */}
        <div style={{ 
          backgroundColor: activePhase === 'done' ? 'var(--primary)' : 'var(--clay-gray)', 
          color: 'white', 
          padding: '16px 32px', 
          borderRadius: 'var(--border-radius-full)', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '12px', 
          boxShadow: 'var(--shadow-lg)',
          transform: activePhase === 'done' ? 'scale(1.05)' : 'none',
          transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        }}>
          <span className="material-symbols-outlined" style={{ fontSize: '24px', fill: '1' }}>verified</span>
          <span style={{ fontWeight: 700, letterSpacing: '0.05em' }}>OPERAÇÃO AUTORIZADA</span>
        </div>
      </div>
      
      {/* Alert notes */}
      <div className="card-academic" style={{ borderLeft: '4px solid var(--secondary)', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
        <span className="material-symbols-outlined text-secondary" style={{ fontSize: '24px' }}>lightbulb</span>
        <div>
          <h4 style={{ fontSize: '14px', margin: '0 0 6px 0', color: 'var(--primary)' }}>Obrigatoriedade de Publicidade</h4>
          <p style={{ fontSize: '13px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.5' }}>
            A legislação federal e estadual exige que todo requerimento e concessão de licença ambiental (LP, LI e LO) seja publicado em Diário Oficial e jornal de circulação local em até <strong>30 dias</strong> de sua ocorrência, sob pena de suspensão imediata da validade do ato.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FluxoTrifasico;
