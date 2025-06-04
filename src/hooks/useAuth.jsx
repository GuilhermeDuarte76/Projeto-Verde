import React, { createContext, useContext, useState, useEffect } from 'react'
import { message } from 'antd'

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Verifica se existe usuário salvo no localStorage
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser))
      } catch (error) {
        console.error('Erro ao recuperar usuário:', error)
        localStorage.removeItem('currentUser')
      }
    }
    setLoading(false)
  }, [])

  const login = async (credentials) => {
    try {
      // Simula uma requisição de login
      if (credentials.username && credentials.password) {
        const userData = {
          id: 1,
          name: credentials.username,
          email: `${credentials.username}@empresa.com`,
          loginTime: new Date().toISOString()
        }
        
        setUser(userData)
        localStorage.setItem('currentUser', JSON.stringify(userData))
        message.success('Login realizado com sucesso!')
        return { success: true }
      } else {
        throw new Error('Credenciais inválidas')
      }
    } catch (error) {
      message.error('Erro no login: ' + error.message)
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('currentUser')
    message.success('Logout realizado com sucesso!')
  }

  const value = {
    user,
    login,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve ser usado dentro de AuthProvider')
  }
  return context
}