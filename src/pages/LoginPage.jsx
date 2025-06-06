import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Card, Typography, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useAuth } from '../hooks/useAuth'
import { useScrollReveal } from '../hooks/useScrollReveal'

// Importe os estilos específicos da página de login
import '../styles/login.css'; // Importa os estilos incluindo o gradiente do wrapper

const { Title, Text } = Typography

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  useScrollReveal('.login-card', { delay: 200 })

  const handleSubmit = async (values) => {
    setLoading(true)
    setTimeout(async () => {
      const result = await login(values)
      setLoading(false)
    }, 1000)
  }

  return (
    // Este wrapper agora tem o background gradiente e centraliza o conteúdo
    <div className="login-page-wrapper">
      {/* Container para a animação de background */}
      <div className="login-background-animation">
        {/* A tag img carrega o SVG */}
        <img
          src="/animations/background-agro.svg" // Verifique este caminho se moveu a pasta
          alt="Background Agrícola Animado"
          className="background-svg"
        />
      </div>

      {/* O container do card de login existente */}
      {/* Este card tem o fundo branco e está acima do background */}
      <div className="login-container">
        <Card className="login-card">
          <div className="login-header">
            <Title level={2} className="login-title">
              🌱 Acesso ao Sistema
            </Title>
          </div>

          <Form
            name="login"
            layout="vertical"
            onFinish={handleSubmit}
            autoComplete="off"
            size="large"
          >
            <Form.Item
              label="Usuário"
              name="username"
              rules={[
                { required: true, message: 'Por favor, insira seu usuário!' },
                { min: 3, message: 'Usuário deve ter pelo menos 3 caracteres' }
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder="Digite seu usuário"
              />
            </Form.Item>

            <Form.Item
              label="Senha"
              name="password"
              rules={[
                { required: true, message: 'Por favor, insira sua senha!' },
                { min: 6, message: 'Senha deve ter pelo menos 6 caracteres' }
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Digite sua senha"
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                loading={loading}
                block
                size="large"
              >
                {loading ? 'Entrando...' : 'Entrar'}
              </Button>
            </Form.Item>
          </Form>

          <div className="login-demo">
            <Text type="secondary">
              <strong>Credenciais de teste:</strong><br/>
              Usuário: <code>admin</code><br/>
              Senha: <code>123456</code>
            </Text>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default LoginPage
