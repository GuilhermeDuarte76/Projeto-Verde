// Constantes da aplicação
export const APP_CONFIG = {
  name: 'Site Verde Responsivo',
  version: '1.0.0',
  description: 'Plataforma sustentável para gestão inteligente'
}

export const COLORS = {
  VERDE_MUSGO: '#556B2F',
  VERDE_FOLHA: '#228B22',
  BRANCO_GELO: '#F8F8FF'
}

export const ROUTES = {
  LOGIN: '/login',
  HOME: '/home',
  PROFILE: '/profile',
  SETTINGS: '/settings'
}

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    VALIDATE: '/auth/validate'
  },
  USER: {
    PROFILE: '/user/profile',
    PASSWORD: '/user/password'
  }
}

export const STORAGE_KEYS = {
  USER: 'currentUser',
  TOKEN: 'authToken',
  PREFERENCES: 'userPreferences'
}

export const MESSAGES = {
  LOGIN: {
    SUCCESS: 'Login realizado com sucesso!',
    ERROR: 'Erro no login. Verifique suas credenciais.',
    REQUIRED_FIELDS: 'Por favor, preencha todos os campos.'
  },
  LOGOUT: {
    SUCCESS: 'Logout realizado com sucesso!'
  },
  ERRORS: {
    NETWORK: 'Erro de conexão. Tente novamente.',
    UNAUTHORIZED: 'Sessão expirada. Faça login novamente.',
    SERVER: 'Erro interno do servidor.'
  }
}