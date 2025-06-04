import React from 'react';
import { Typography, Card } from 'antd';
// Importe useScrollReveal se quiser animações
// import { useScrollReveal } from '../hooks/useScrollReveal';

const { Title, Paragraph } = Typography;

const SettingsPage = () => {
  // useScrollReveal('.settings-card', { delay: 100 });

  return (
    <Card bordered={false} className="settings-card">
      <Title level={1} className="page-title">
        ⚙️ Configurações do Sistema
      </Title>
      <Paragraph className="page-description">
        Ajuste as configurações gerais da aplicação.
      </Paragraph>
      <div style={{ marginTop: '2rem' }}>
        <Paragraph>
          Esta é a página de Configurações do Sistema. Opções de configuração serão adicionadas aqui.
        </Paragraph>
      </div>
    </Card>
  );
};

export default SettingsPage;
