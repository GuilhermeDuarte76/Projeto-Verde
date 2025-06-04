import React, { useEffect } from 'react'
import { Row, Col, Typography } from 'antd'
import Header from '../components/Header'
import WelcomeSection from '../components/WelcomeSection'
import StatsCard from '../components/StatsCard'
import FeatureCard from '../components/FeatureCard'
import { useScrollReveal } from '../hooks/useScrollReveal'

const { Title } = Typography

const HomePage = () => {
  // Configurações de animação
  useScrollReveal('.welcome-section', { delay: 100 })
  useScrollReveal('.stats-card', { delay: 200, interval: 100 })
  useScrollReveal('.features-section', { delay: 300 })
  useScrollReveal('.feature-card', { delay: 400, interval: 100 })

  const statsData = [
    { 
      number: '2.547', 
      label: 'Usuários Ativos',
      icon: '👥'
    },
    { 
      number: '98.5%', 
      label: 'Uptime do Sistema',
      icon: '⚡'
    },
    { 
      number: '1.234', 
      label: 'Projetos Concluídos',
      icon: '✅'
    },
    { 
      number: '24/7', 
      label: 'Suporte Disponível',
      icon: '🛟'
    }
  ]

  const featuresData = [
    {
      icon: '🚀',
      title: 'Performance Otimizada',
      description: 'Sistema desenvolvido com as melhores práticas para máxima velocidade e eficiência.'
    },
    {
      icon: '🔒',
      title: 'Segurança Avançada',
      description: 'Proteção de dados com criptografia de ponta e autenticação segura.'
    },
    {
      icon: '📱',
      title: 'Design Responsivo',
      description: 'Interface adaptada para todos os dispositivos, do desktop ao mobile.'
    },
    {
      icon: '🌍',
      title: 'Escalabilidade Global',
      description: 'Arquitetura preparada para crescer junto com seu negócio.'
    }
  ]

  return (
    <>      
      <div className="main-content">
        <WelcomeSection />

        {/* Seção de Estatísticas */}
        <Row gutter={[24, 24]} style={{ marginTop: '2rem' }}>
          {statsData.map((stat, index) => (
            <Col xs={24} sm={12} lg={6} key={index}>
              <StatsCard 
                number={stat.number}
                label={stat.label}
                icon={stat.icon}
              />
            </Col>
          ))}
        </Row>

        {/* Seção de Funcionalidades */}
        <div className="features-section" style={{ marginTop: '3rem' }}>
          <Title level={2} className="features-title">
            🌟 Principais Funcionalidades
          </Title>
          
          <Row gutter={[24, 24]} style={{ marginTop: '2rem' }}>
            {featuresData.map((feature, index) => (
              <Col xs={24} md={12} lg={6} key={index}>
                <FeatureCard 
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </>
  )
}

export default HomePage