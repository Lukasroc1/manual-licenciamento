import React from 'react';

const Impactos = () => {
  const impacts = [
    {
      id: 'water',
      title: 'Recursos Hídricos',
      status: 'Crítico',
      chipClass: 'chip-critico',
      icon: 'water_drop',
      iconBg: '#eff6ff',
      iconColor: '#2563eb',
      description: 'Elevado consumo de água para higienização e descarte de efluentes com alta carga orgânica (sangue, gordura e dejetos).',
      mitigations: [
        'Instalação de sistemas de tratamento de efluentes (Biodigestores, decantadores ou lagoas).',
        'Monitoramento periódico da qualidade do efluente e DBO (Demanda Bioquímica de Oxigênio).',
        'Reuso de água para fins não potáveis e limpeza externa de pátios.'
      ]
    },
    {
      id: 'soil',
      title: 'Solo e Subsolo',
      status: 'Moderado',
      chipClass: 'chip-moderado',
      icon: 'landslide',
      iconBg: '#fff7ed',
      iconColor: '#ea580c',
      description: 'Contaminação por infiltração de resíduos sólidos e líquidos em áreas de compostagem ou armazenamento inadequado de carcaças.',
      mitigations: [
        'Impermeabilização total do piso industrial e canaletas de drenagem de águas residuárias.',
        'Construção de composteiras técnicas cobertas e protegidas contra intempéries.',
        'Implementação de Plano de Gerenciamento de Resíduos Sólidos (PGRS).'
      ]
    },
    {
      id: 'air',
      title: 'Qualidade do Ar',
      status: 'Monitorável',
      chipClass: 'chip-monitoravel',
      icon: 'air',
      iconBg: '#f9fafb',
      iconColor: '#4b5563',
      description: 'Emissão de odores desagradáveis decorrentes da decomposição de matéria orgânica e eventuais emissões gasosas de caldeiras.',
      mitigations: [
        'Instalação de cortinas ou barreiras vegetais densas no perímetro do abatedouro.',
        'Limpeza e higienização diária rigorosa das áreas de abate e currais.',
        'Manutenção preventiva periódica de queimadores, chaminés e filtros.'
      ]
    },
    {
      id: 'socio',
      title: 'Socioeconômico',
      status: 'Positivo',
      chipClass: 'chip-positivo',
      icon: 'groups',
      iconBg: '#faf5ff',
      iconColor: '#9333ea',
      description: 'Geração de empregos diretos e indiretos, fortalecimento da economia agrícola local e regularização higiênico-sanitária de carnes.',
      mitigations: [
        'Capacitação técnica e treinamento de boas práticas para mão de obra local.',
        'Integração com cadeias produtivas agroindustriais regionais.',
        'Melhoria da segurança alimentar da comunidade local.'
      ],
      isPositive: true
    }
  ];

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--spacing-stack-md)' }}>
      {/* Title Header */}
      <section style={{ borderBottom: '1px solid var(--clay-gray)', paddingBottom: '20px' }}>
        <h2 style={{ fontSize: '28px', color: 'var(--earth-black)', margin: '0 0 12px 0', fontFamily: 'var(--font-headline)', fontWeight: 700 }}>
          Principais Impactos Ambientais Associados
        </h2>
        <p style={{ color: 'var(--on-surface-variant)', fontSize: '16px', maxWidth: '800px', margin: 0, lineHeight: '1.6' }}>
          A operação de abatedouros, mesmo em pequena escala, interage diretamente com o meio ambiente local. Identificar e mitigar estes impactos é o pilar central para a obtenção e manutenção da sua licença ambiental.
        </p>
      </section>

      {/* Impact Matrix Grid */}
      <div className="grid-12" style={{ gap: '24px' }}>
        {impacts.map(impact => (
          <article 
            key={impact.id} 
            className="card-academic"
            style={{ 
              gridColumn: 'span 6', 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px', 
              padding: '28px',
              height: '100%'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  borderRadius: 'var(--border-radius-full)', 
                  backgroundColor: impact.iconBg, 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: impact.iconColor 
                }}>
                  <span className="material-symbols-outlined" style={{ fontSize: '32px' }}>{impact.icon}</span>
                </div>
                <h3 style={{ fontSize: '18px', margin: 0, color: 'var(--primary)' }}>{impact.title}</h3>
              </div>
              <span className={`chip ${impact.chipClass}`}>{impact.status}</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', flex: 1 }}>
              <div>
                <span style={{ fontSize: '11px', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase', color: 'var(--secondary)', display: 'block', marginBottom: '4px' }}>
                  Impactos Principais
                </span>
                <p style={{ fontSize: '14px', color: 'var(--on-surface-variant)', margin: 0, lineHeight: '1.5' }}>
                  {impact.description}
                </p>
              </div>

              <div style={{ 
                backgroundColor: 'rgba(218, 215, 205, 0.15)', 
                padding: '16px', 
                borderRadius: 'var(--border-radius-md)', 
                borderLeft: '4px solid var(--secondary)',
                marginTop: 'auto'
              }}>
                <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--secondary)', display: 'block', marginBottom: '8px' }}>
                  {impact.isPositive ? 'Medidas de Fomento' : 'Medidas de Mitigação'}
                </span>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '13px', color: 'var(--on-surface)', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {impact.mitigations.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Visual Call-out Section */}
      <section className="card-academic" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        gap: '32px', 
        padding: '32px',
        borderLeft: '4px solid var(--primary)',
        backgroundColor: 'rgba(51, 69, 55, 0.03)',
        flexDirection: 'row',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <h4 style={{ fontSize: '20px', color: 'var(--primary)', marginBottom: '8px' }}>Diretrizes Locacionais Importantes</h4>
          <p style={{ color: 'var(--on-surface-variant)', fontSize: '15px', lineHeight: '1.6', margin: '0 0 20px 0' }}>
            A escolha racional do local é o primeiro passo para reduzir significativamente os impactos ambientais e os custos com tratamento de resíduos. Recomenda-se evitar a instalação próxima a corpos d'água, nascentes e áreas residenciais consolidadas, observando as diretrizes de zoneamento municipal.
          </p>
          <a 
            href="https://www.iat.pr.gov.br/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            <span className="material-symbols-outlined">map</span>
            <span>Ver Zoneamento Ambiental no IAT</span>
          </a>
        </div>
        <div style={{ 
          width: '320px', 
          height: '180px', 
          borderRadius: 'var(--border-radius-lg)', 
          overflow: 'hidden',
          border: '1px solid var(--clay-gray)',
          flexShrink: 0
        }}>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZ0__mstaSpcRyblfV1iAIHRRBqdumsyXnBW9OXz2qGlCIqeA42Oc73LI_mitsiUQtqpS33uKKdFWbBGnAKnUWNGm171Yzke5b5baLM9uWxGUqi568PnMiBW8Yb8a8wU_C683RuCKWhTGQUnAGlWFVedlfNmS4Cv0TBBv4BVm4gaEDXnfmM4kuteKPO5-acQVJyb8wb64BIWNDTJY8vmZuOxxJePl1st7_DXOQo7D4ZTjL0PzgEfA9xQ" 
            alt="Visão de Instalação Sustentável" 
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </section>
    </div>
  );
};

export default Impactos;
