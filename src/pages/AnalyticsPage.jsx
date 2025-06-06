import React from 'react';
import { Typography, Card } from 'antd';
// Importe useScrollReveal se quiser animações
// import { useScrollReveal } from '../hooks/useScrollReveal';

const { Title, Paragraph } = Typography;

const AnalyticsPage = () => {
  // useScrollReveal('.analytics-card', { delay: 100 });

  return (
    <Card bordered={false} className="analytics-card">
      <Title level={1} className="page-title">
        📊 Relatórios e Análises
      </Title>
      <Paragraph className="page-description">
        Visualize dados e métricas importantes sobre o sistema.
      </Paragraph>
      <div style={{ marginTop: '2rem' }}>
        <iframe
          width="100%"
          height="600"
          src="https://app.powerbi.com/view?"
          frameborder="0"
          allowFullScreen="true"
          >
        </iframe>
      </div>
    </Card>
  );
};

export default AnalyticsPage;
