import api from './authService'

export const userService = {
  // Buscar perfil do usuário
  async getProfile() {
    try {
      const response = await api.get('/user/profile')
      return response.data
    } catch (error) {
      throw new Error('Erro ao buscar perfil do usuário')
    }
  },

  // Atualizar perfil do usuário
  async updateProfile(userData) {
    try {
      const response = await api.put('/user/profile', userData)
      return response.data
    } catch (error) {
      throw new Error('Erro ao atualizar perfil')
    }
  },

  // Alterar senha
  async changePassword(passwordData) {
    try {
      const response = await api.put('/user/password', passwordData)
      return response.data
    } catch (error) {
      throw new Error('Erro ao alterar senha')
    }
  },

  // Buscar estatísticas do dashboard
  async getDashboardStats() {
    try {
      // Simulação de dados para desenvolvimento
      await new Promise(resolve => setTimeout(resolve, 500))
      
      return {
        users: '2.547',
        uptime: '98.5%',
        projects: '1.234',
        support: '24/7'
      }
    } catch (error) {
      throw new Error('Erro ao buscar estatísticas')
    }
  }
}