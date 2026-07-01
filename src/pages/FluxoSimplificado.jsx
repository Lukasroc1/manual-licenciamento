import React, { useState } from 'react';

const FluxoSimplificado = () => {
  const [selectedStep, setSelectedStep] = useState(1);

  const stepsDetails = {
    1: {
      title: '01. Levantamento de Dados Base',
      description: 'Esta etapa consiste na coleta de todos os documentos de posse da terra e autorizações preliminares. É fundamental obter a Matrícula atualizada do imóvel no Registro de Imóveis, certificar que a propriedade possui Cadastro Ambiental Rural (CAR) ativo e solicitar formalmente à Prefeitura a Anuência de Uso do Solo, declarando que a atividade de abate é compatível com o plano diretor municipal.',
      tip: 'Verifique se a descrição da atividade na Anuência Municipal bate exatamente com a tipologia que será cadastrada no IAT.'
    },
    2: {
      title: '02. Mapas e Geoprocessamento',
      description: 'Elaboração de mapas cartográficos com coordenadas georreferenciadas (SAD69 ou SIRGAS2000). Deve conter a delimitação precisa da área do empreendimento, indicação de todas as Áreas de Preservação Permanente (APP) - como margens de córregos, nascentes e remanescentes florestais - respeitando os distanciamentos legais mínimos.',
      tip: 'O uso de softwares gratuitos como o QGIS é o padrão para elaboração destes mapas técnicos.'
    },
    3: {
      title: '03. Projetos de Engenharia e Controle',
      description: 'Contratação de engenheiro habilitado para desenvolver o dimensionamento do Sistema de Tratamento de Efluentes Líquidos (STEL), composto geralmente por caixa separadora de gordura, peneira estática, reator anaeróbio (biodigestor) e sumidouro/valas de infiltração. Também elabora-se o Plano de Gerenciamento de Resíduos Sólidos (PGRS) para destinar ossos, vísceras e esterco.',
      tip: 'Exija sempre a emissão de Anotação de Responsabilidade Técnica (ART) do projetista.'
    },
    4: {
      title: '04. Recursos Hídricos (Outorga)',
      description: 'Como o processamento de abate e a higienização exigem grande volume hídrico, é obrigatório regularizar a captação. Se for rede pública, anexa-se a fatura de água. Se for captação subterrânea (poço) ou superficial (rio), deve-se protocolar no IAT o pedido de Outorga de Direito de Uso ou a Declaração de Uso Insignificante (vazões inferiores a 10m³/dia).',
      tip: 'A outorga prévia é um pré-requisito indispensável que trava a emissão da licença se não estiver protocolada.'
    },
    5: {
      title: '05. Login e Acesso ao SGA',
      description: 'Entrada oficial na plataforma digital SGA do IAT. O requerente (proprietário) ou o seu procurador legal (consultor) acessa o sistema utilizando login único do Gov.br ou certificação digital padrão ICP-Brasil.',
      tip: 'Caso utilize um consultor técnico, deve-se cadastrar uma procuração eletrônica específica dentro do sistema SGA.'
    },
    6: {
      title: '06. Preenchimento do RLA',
      description: 'Preenchimento do Requerimento de Licenciamento Ambiental na plataforma. Neste formulário online, declaram-se dados sobre capacidade máxima de abate diário, área física construída total, quantidade de funcionários e consumo estimado de energia/água. O sistema enquadrará automaticamente o porte.',
      tip: 'Selecione a tipologia exata correspondente a "Abatedouro de Pequeno Porte" para não travar o rito simplificado.'
    },
    7: {
      title: '07. Upload de Documentos Técnicos',
      description: 'Fase de carregamento digital dos anexos exigidos. Todos os documentos levantados nas etapas 1 a 4 devem ser convertidos em arquivos digitais PDF individuais e carregados nos campos correspondentes do sistema SGA.',
      tip: 'Nomeie os arquivos de forma clara (ex: "Anuencia_Municipal.pdf") para facilitar e agilizar a triagem do analista do IAT.'
    },
    8: {
      title: '08. Pagamento da Taxa Ambiental',
      description: 'Após concluir o upload, o sistema SGA gera automaticamente a Guia de Recolhimento da taxa de licenciamento (calculada com base no Fator de Conversão de Atualização - FCA). O processo digital só é efetivamente protocolado e enviado para a fila de análise após a compensação bancária deste boleto.',
      tip: 'O pagamento via Pix ou canais rápidos acelera a compensação automática dentro do sistema.'
    },
    9: {
      title: '09. Triagem e Análise Técnica',
      description: 'Os técnicos do Escritório Regional do IAT correspondente avaliam se o checklist documental está completo. Estando tudo correto, inicia-se a análise técnica dos dimensionamentos do sistema de efluentes (STEL) e plantas físicas apresentadas.',
      tip: 'O prazo de análise pode variar de acordo com a demanda regional do escritório do IAT.'
    },
    10: {
      title: '10. Resposta a Ofícios de Pendência',
      description: 'Caso o analista do IAT encontre falhas nos projetos ou falta de assinaturas, ele emite um "Ofício de Pendência". O empreendedor tem um prazo legal determinado (geralmente 30 dias) para protocolar as correções ou complementações no sistema.',
      tip: 'O não atendimento às pendências no prazo acarreta o arquivamento definitivo do processo com perda da taxa paga.'
    },
    11: {
      title: '11. Emissão da LAS',
      description: 'Com a aprovação documental e técnica, o Diretor do IAT assina digitalmente a Licença Ambiental Simplificada (LAS). O documento fica disponível para download no portal SGA. A partir deste momento, o abatedouro está legalmente autorizado a construir as obras e iniciar as operações, devendo cumprir as condicionantes emitidas.',
      tip: 'Imprima a licença e mantenha-a fixada em local visível no estabelecimento para efeitos de fiscalização.'
    }
  };

  const getStepClass = (stepNum) => {
    return selectedStep === stepNum ? 'rgba(218, 215, 205, 0.3)' : 'var(--paper-white)';
  };

  const getStepBorder = (stepNum) => {
    return selectedStep === stepNum ? '2px solid var(--primary)' : '1px solid var(--clay-gray)';
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-stack-md)' }}>
      {/* Page Header */}
      <section style={{ borderBottom: '1px solid var(--clay-gray)', paddingBottom: '20px' }}>
        <span className="chip chip-moderado" style={{ marginBottom: '8px' }}>Rito Simplificado</span>
        <h2 style={{ fontSize: '28px', color: 'var(--earth-black)', margin: '0 0 12px 0', fontFamily: 'var(--font-headline)', fontWeight: 700 }}>
          Fluxograma: Licenciamento Simplificado (LAS)
        </h2>
        <p style={{ color: 'var(--on-surface-variant)', fontSize: '16px', maxWidth: '800px', margin: 0, lineHeight: '1.6' }}>
          A LAS é destinada a empreendimentos de pequeno porte com baixo potencial poluidor. Ela aglutina as fases de instalação e operação em um único ato administrativo. Clique nos passos abaixo para ver os detalhes operacionais.
        </p>
      </section>

      {/* Main Grid: Interactive Steps vs Info Panel */}
      <div className="grid-12">
        {/* Left: Flow Steps (Phase 1, 2, 3) */}
        <div style={{ gridColumn: 'span 7', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {/* Phase 1 */}
          <div>
            <h4 style={{ fontSize: '16px', color: 'var(--primary)', borderBottom: '1px solid var(--clay-gray)', paddingBottom: '8px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="material-symbols-outlined">engineering</span>
              Fase 1: Planejamento e Engenharia (Pré-Sistema)
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[1, 2, 3, 4].map(num => (
                <div 
                  key={num}
                  onClick={() => setSelectedStep(num)}
                  style={{
                    backgroundColor: getStepClass(num),
                    border: getStepBorder(num),
                    borderRadius: 'var(--border-radius-lg)',
                    padding: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: selectedStep === num ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    transform: selectedStep === num ? 'translateY(-2px)' : 'none'
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--secondary)', display: 'block', marginBottom: '4px' }}>
                    Passo 0{num}
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)' }}>
                    {num === 1 && 'Levantamento de Dados'}
                    {num === 2 && 'Mapas e Geo'}
                    {num === 3 && 'Projetos Técnicos'}
                    {num === 4 && 'Recursos Hídricos'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 2 */}
          <div>
            <h4 style={{ fontSize: '16px', color: 'var(--secondary)', borderBottom: '1px solid var(--clay-gray)', paddingBottom: '8px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="material-symbols-outlined">cloud_upload</span>
              Fase 2: Protocolo SGA (Digital)
            </h4>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[5, 6, 7, 8].map(num => (
                <div 
                  key={num}
                  onClick={() => setSelectedStep(num)}
                  style={{
                    backgroundColor: getStepClass(num),
                    border: getStepBorder(num),
                    borderRadius: 'var(--border-radius-lg)',
                    padding: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: selectedStep === num ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    transform: selectedStep === num ? 'translateY(-2px)' : 'none'
                  }}
                >
                  <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--secondary)', display: 'block', marginBottom: '4px' }}>
                    Passo 0{num}
                  </span>
                  <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)' }}>
                    {num === 5 && 'Login e Acesso'}
                    {num === 6 && 'Preenchimento RLA'}
                    {num === 7 && 'Upload de Anexos'}
                    {num === 8 && 'Pagamento da Taxa'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Phase 3 */}
          <div>
            <h4 style={{ fontSize: '16px', color: 'var(--tertiary)', borderBottom: '1px solid var(--clay-gray)', paddingBottom: '8px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="material-symbols-outlined">verified_user</span>
              Fase 3: Triagem, Ajustes e Emissão
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[9, 10, 11].map(num => (
                <div 
                  key={num}
                  onClick={() => setSelectedStep(num)}
                  style={{
                    backgroundColor: getStepClass(num),
                    border: getStepBorder(num),
                    borderRadius: 'var(--border-radius-lg)',
                    padding: '16px',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    boxShadow: selectedStep === num ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    transform: selectedStep === num ? 'translateY(-2px)' : 'none',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--secondary)', display: 'block', marginBottom: '2px' }}>
                      {num === 11 ? 'Passo 11 (Fim)' : `Passo 0${num}`}
                    </span>
                    <span style={{ fontSize: '14px', fontWeight: 600, color: 'var(--primary)' }}>
                      {num === 9 && 'Análise Técnica do IAT'}
                      {num === 10 && 'Resposta a Pendências'}
                      {num === 11 && 'Obtenção e Emissão da LAS'}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-primary" style={{ fontSize: '20px' }}>
                    {num === 11 ? 'check_circle' : 'arrow_forward'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Tactile Info Panel */}
        <div style={{ gridColumn: 'span 5' }}>
          <div className="card-academic" style={{ 
            borderColor: 'var(--secondary)', 
            borderWidth: '2px', 
            position: 'sticky', 
            top: '84px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            backgroundColor: 'var(--paper-white)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderBottom: '1px solid var(--clay-gray)', paddingBottom: '12px' }}>
              <span className="material-symbols-outlined text-secondary" style={{ fontSize: '28px' }}>sticky_note_2</span>
              <h3 style={{ fontSize: '16px', margin: 0, color: 'var(--primary)' }}>
                Ficha Detalhada do Passo
              </h3>
            </div>
            
            <div>
              <h4 style={{ fontSize: '18px', color: 'var(--primary)', marginBottom: '8px' }}>
                {stepsDetails[selectedStep].title}
              </h4>
              <p style={{ fontSize: '14px', color: 'var(--on-surface)', lineHeight: '1.6', margin: 0 }}>
                {stepsDetails[selectedStep].description}
              </p>
            </div>

            <div style={{ 
              backgroundColor: 'rgba(253, 195, 154, 0.2)', 
              borderLeft: '4px solid var(--secondary)', 
              borderRadius: '0 var(--border-radius-md) var(--border-radius-md) 0',
              padding: '12px 16px',
              marginTop: '8px'
            }}>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#794e2e', display: 'block', marginBottom: '2px', textTransform: 'uppercase' }}>
                Dica de Sucesso
              </span>
              <p style={{ fontSize: '12px', color: 'var(--on-surface-variant)', margin: 0, fontStyle: 'italic', lineHeight: '1.4' }}>
                "{stepsDetails[selectedStep].tip}"
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Callout Graphic */}
      <section className="card-academic" style={{ padding: 0, overflow: 'hidden', position: 'relative', height: '180px', display: 'flex', alignItems: 'center' }}>
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'linear-gradient(90deg, rgba(51, 69, 55, 0.9) 0%, rgba(128, 85, 51, 0.7) 100%)', 
          zIndex: 2 
        }} />
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz9cbKNY6r5-uAYmepcppQRbsMmXbzgkLxwqUF8BTzvMTP5BtCViC71_WQMJU95F3oMY4ayQnmaLB7u97EeHPfGtwLO90xxTyFRhjgG3qU07OQNs0LW1mc59Y2mIkcq2Sj3vZX_8zNJtfwugKk_3QjNxHhsE35dYWdHCeYNFIxsONJKDDuIalRDkkQPcB3LL5fsll2OV2JFE077nOL8AdjFVs1jOE_xqRlBB5wifjB0AX9BbaLHERc9g" 
          alt="Paisagem Agroindustrial Sustentável"
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', zIndex: 1 }}
        />
        <div style={{ padding: '0 32px', zIndex: 10, color: 'white', maxWidth: '600px' }}>
          <h4 style={{ fontSize: '18px', color: 'white', marginBottom: '6px' }}>Segurança Operacional e Jurídica</h4>
          <p style={{ fontSize: '13px', margin: 0, color: 'rgba(255,255,255,0.9)', lineHeight: '1.4' }}>
            Operar um abatedouro sem licença válida no Paraná é considerado crime ambiental sujeito a multas pecuniárias diárias graves e interdição cautelar imediata do local pela fiscalização.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FluxoSimplificado;
