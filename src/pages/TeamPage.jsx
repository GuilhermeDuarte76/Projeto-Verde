import React from 'react';
import { Typography, Card } from 'antd';
// Importe useScrollReveal se quiser animações
// import { useScrollReveal } from '../hooks/useScrollReveal';

const { Title, Paragraph } = Typography;

const TeamPage = () => {
  // useScrollReveal('.team-card', { delay: 100 });

  return (
    <Card bordered={false} className="team-card">
      <Title level={1} className="page-title">
        👥 Gerenciar Equipe
      </Title>
      <Paragraph className="page-description">
        Visualize e gerencie os membros da sua equipe.
      </Paragraph>
      <div style={{ marginTop: '2rem' }}>
        <Paragraph>
          Esta é a página de Gerenciamento de Equipe. A lista de membros e ferramentas de gestão serão adicionadas aqui.
        </Paragraph>
      </div>
    </Card>
  );
};

export default TeamPage;
