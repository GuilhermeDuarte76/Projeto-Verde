import React from 'react'
import { Card, Row, Col, Button, Typography, Table, Tag } from 'antd'
import { PlusOutlined, FileTextOutlined } from '@ant-design/icons'
import { useScrollReveal } from '../hooks/useScrollReveal'

const { Title, Paragraph } = Typography

const ProjectsPage = () => {
  useScrollReveal('.projects-header', { delay: 100 })
  useScrollReveal('.projects-stats', { delay: 200 })
  useScrollReveal('.projects-table', { delay: 300 })

  const projectsData = [
    {
      key: '1',
      name: 'Reflorestamento Urbano',
      status: 'Em Andamento',
      progress: 75,
      team: 8,
      deadline: '2025-08-15'
    },
    {
      key: '2',
      name: 'Energia Solar Comunitária',
      status: 'Planejamento',
      progress: 25,
      team: 5,
      deadline: '2025-12-01'
    },
    {
      key: '3',
      name: 'Reciclagem Inteligente',
      status: 'Concluído',
      progress: 100,
      team: 12,
      deadline: '2025-03-30'
    }
  ]

  const columns = [
    {
      title: 'Projeto',
      dataIndex: 'name',
      key: 'name',
      render: (text) => (
        <div>
          <FileTextOutlined style={{ marginRight: 8, color: 'var(--verde-folha)' }} />
          {text}
        </div>
      )
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => {
        const color = status === 'Concluído' ? 'green' : 
                    status === 'Em Andamento' ? 'blue' : 'orange'
        return <Tag color={color}>{status}</Tag>
      }
    },
    {
      title: 'Progresso',
      dataIndex: 'progress',
      key: 'progress',
      render: (progress) => `${progress}%`
    },
    {
      title: 'Equipe',
      dataIndex: 'team',
      key: 'team',
      render: (team) => `${team} membros`
    },
    {
      title: 'Prazo',
      dataIndex: 'deadline',
      key: 'deadline'
    }
  ]

  return (
    <>
      {/* Header da Página */}
      <div className="projects-header">
        <Card bordered={false} className="page-header-card">
          <div className="page-header-content">
            <div>
              <Title level={1} className="page-title">
                🌱 Projetos Sustentáveis
              </Title>
              <Paragraph className="page-description">
                Gerencie todos os seus projetos ambientais e de sustentabilidade
              </Paragraph>
            </div>
            <Button 
              type="primary" 
              icon={<PlusOutlined />}
              size="large"
              className="page-action-btn"
            >
              Novo Projeto
            </Button>
          </div>
        </Card>
      </div>

      {/* Estatísticas */}
      <div className="projects-stats">
        <Row gutter={[24, 24]} style={{ marginTop: '2rem' }}>
          <Col xs={24} sm={8}>
            <Card className="stats-card">
              <div className="stats-content">
                <div className="stats-icon">📊</div>
                <div className="stats-info">
                  <div className="stats-number">12</div>
                  <div className="stats-label">Total de Projetos</div>
                </div>
              </div>
            </Card>
          </Col>
          
          <Col xs={24} sm={8}>
            <Card className="stats-card">
              <div className="stats-content">
                <div className="stats-icon">⚡</div>
                <div className="stats-info">
                  <div className="stats-number">8</div>
                  <div className="stats-label">Em Andamento</div>
                </div>
              </div>
            </Card>
          </Col>
          
          <Col xs={24} sm={8}>
            <Card className="stats-card">
              <div className="stats-content">
                <div className="stats-icon">✅</div>
                <div className="stats-info">
                  <div className="stats-number">4</div>
                  <div className="stats-label">Concluídos</div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Tabela de Projetos */}
      <div className="projects-table">
        <Card 
          title="Lista de Projetos"
          bordered={false}
          style={{ marginTop: '2rem' }}
        >
          <Table 
            columns={columns}
            dataSource={projectsData}
            pagination={{ pageSize: 10 }}
            scroll={{ x: 800 }}
          />
        </Card>
      </div>
    </>
  )
}

export default ProjectsPage
