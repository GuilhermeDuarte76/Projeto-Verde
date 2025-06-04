import React from 'react'
import { Card, Typography } from 'antd'
import { useAuth } from '../hooks/useAuth'

const { Title, Paragraph } = Typography

const WelcomeSection = () => {
  const { user } = useAuth()

  return (
    <Card className="welcome-section" bordered={false}>
      <Title level={1} className="welcome-title">
        Bem-vindo ao Sistema, {user?.name}! 👋
      </Title>
      
      <Title level={3} className="welcome-subtitle">
        Sua plataforma sustentável para gestão inteligente
      </Title>
      
      <Paragraph className="welcome-description">
        Acesse todas as funcionalidades do sistema através do painel abaixo. 
        Desenvolvido com tecnologias modernas como React, Ant Design e ScrollReveal 
        para proporcionar a melhor experiência de usuário.
      </Paragraph>
    </Card>
  )
}

export default WelcomeSection