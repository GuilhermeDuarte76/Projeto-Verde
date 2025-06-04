import axios from 'axios'

// Configuração base do Axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  }
})

// Interceptor para adicionar token nas requisições
api.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}')
    if (user.token) {
      config.headers.Authorization = `Bearer ${user.token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Interceptor para tratar respostas
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('currentUser')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export const authService = {
  // Simula login
  async login(credentials) {
    try {
      // Em produção, fazer requisição real
      // const response = await api.post('/auth/login', credentials)
      
      // Simulação para desenvolvimento
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (credentials.username === 'admin' && credentials.password === '123456') {
        return {
          success: true,
          user: {
            id: 1,
            name: credentials.username,
            email: `${credentials.username}@empresa.com`,
            token: 'fake-jwt-token'
          }
        }
      } else {
        throw new Error('Credenciais inválidas')
      }
    } catch (error) {
      throw new Error(error.message || 'Erro no servidor')
    }
  },

  // Simula logout
  async logout() {
    try {
      // await api.post('/auth/logout')
      return { success: true }
    } catch (error) {
      return { success: false, error: error.message }
    }
  },

  // Verifica se o token ainda é válido
  async validateToken() {
    try {
      // const response = await api.get('/auth/validate')
      // return response.data
      return { valid: true }
    } catch (error) {
      return { valid: false }
    }
  }
}

export default api