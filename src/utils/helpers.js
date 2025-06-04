// Funções utilitárias
export const formatters = {
  // Formatar data
  formatDate: (date, locale = 'pt-BR') => {
    return new Date(date).toLocaleDateString(locale)
  },

  // Formatar hora
  formatTime: (date, locale = 'pt-BR') => {
    return new Date(date).toLocaleTimeString(locale)
  },

  // Formatar número
  formatNumber: (number, decimals = 0) => {
    return new Intl.NumberFormat('pt-BR', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    }).format(number)
  },

  // Formatar moeda
  formatCurrency: (value, currency = 'BRL') => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: currency
    }).format(value)
  }
}

export const validators = {
  // Validar email
  isValidEmail: (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  },

  // Validar senha forte
  isStrongPassword: (password) => {
    const minLength = password.length >= 8
    const hasUpper = /[A-Z]/.test(password)
    const hasLower = /[a-z]/.test(password)
    const hasNumber = /\d/.test(password)
    const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    
    return minLength && hasUpper && hasLower && hasNumber && hasSpecial
  },

  // Validar CPF (Brasil)
  isValidCPF: (cpf) => {
    cpf = cpf.replace(/[^\d]+/g, '')
    if (cpf.length !== 11 || !!cpf.match(/(\d)\1{10}/)) return false
    
    const digits = cpf.split('').map(el => +el)
    const rest = (count) => {
      return (
        ((digits.slice(0, count - 12)
          .reduce((soma, el, index) => (soma + el * (count - index)), 0) * 10) % 11) % 10
      )
    }
    
    return rest(10) === digits[9] && rest(11) === digits[10]
  }
}

export const storage = {
  // Salvar no localStorage
  set: (key, value) => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      console.error('Erro ao salvar no localStorage:', error)
      return false
    }
  },

  // Recuperar do localStorage
  get: (key, defaultValue = null) => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : defaultValue
    } catch (error) {
      console.error('Erro ao recuperar do localStorage:', error)
      return defaultValue
    }
  },

  // Remover do localStorage
  remove: (key) => {
    try {
      localStorage.removeItem(key)
      return true
    } catch (error) {
      console.error('Erro ao remover do localStorage:', error)
      return false
    }
  },

  // Limpar localStorage
  clear: () => {
    try {
      localStorage.clear()
      return true
    } catch (error) {
      console.error('Erro ao limpar localStorage:', error)
      return false
    }
  }
}

export const debounce = (func, wait) => {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

export const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}