import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Card, Typography, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useAuth } from '../hooks/useAuth'
import { useScrollReveal } from '../hooks/useScrollReveal'

const { Title, Text } = Typography

const LoginPage = () => {
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()

  useScrollReveal('.login-card', { delay: 200 })

  const handleSubmit = async (values) => {
    setLoading(true)
    
    // Simula delay de rede
    setTimeout(async () => {
      const result = await login(values)
      setLoading(false)
    }, 1000)
  }

  return (
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
  )
}

export default LoginPage