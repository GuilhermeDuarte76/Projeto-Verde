import React from 'react';
import { Typography, Card } from 'antd';
// Importe useScrollReveal se quiser animações
// import { useScrollReveal } from '../hooks/useScrollReveal';

const { Title, Paragraph } = Typography;

const ProfilePage = () => {
  // useScrollReveal('.profile-card', { delay: 100 });

  return (
    <Card bordered={false} className="profile-card">
      <Title level={1} className="page-title">
        👤 Meu Perfil
      </Title>
      <Paragraph className="page-description">
        Visualize e atualize suas informações de perfil.
      </Paragraph>
      <div style={{ marginTop: '2rem' }}>
        <Paragraph>
          Esta é a página de Perfil do Usuário. Formulários para editar informações e senha serão implementados aqui.
        </Paragraph>
      </div>
    </Card>
  );
};

export default ProfilePage;
