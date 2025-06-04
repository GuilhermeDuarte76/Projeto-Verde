import React, { useState, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Spin, message } from 'antd'
import { AppRoutes } from './routes/AppRoutes'
import { AuthProvider } from './hooks/useAuth'
import MainLayout from './components/MainLayout'
import './scrollReveal.js'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simula carregamento inicial da aplicação
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
        <p style={{ marginTop: '1rem', color: 'var(--verde-musgo)' }}>
          Carregando aplicação...
        </p>
      </div>
    )
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <div className="app-container">
          <AppRoutes />
        </div>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
