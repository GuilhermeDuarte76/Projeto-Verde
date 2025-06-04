import React from 'react';
import { Typography, Card } from 'antd';
// Importe useScrollReveal se quiser animações
// import { useScrollReveal } from '../hooks/useScrollReveal';

const { Title, Paragraph } = Typography;

const HelpPage = () => {
  // useScrollReveal('.help-card', { delay: 100 });

  return (
    <Card bordered={false} className="help-card">
      <Title level={1} className="page-title">
        ❓ Ajuda e Suporte
      </Title>
      <Paragraph className="page-description">
        Encontre respostas para suas perguntas e obtenha suporte.
      </Paragraph>
      <div style={{ marginTop: '2rem' }}>
        <Paragraph>
          Esta é a página de Ajuda e Suporte. Documentação, FAQs e formulários de contato serão incluídos aqui.
        </Paragraph>
      </div>
    </Card>
  );
};

export default HelpPage;
