export const themeConfig = {
  token: {
    // Cores principais
    colorPrimary: '#228B22', // Verde Folha
    colorSuccess: '#228B22',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    
    // Cores de fundo
    colorBgContainer: '#F8F8FF', // Branco Gelo
    colorBgElevated: '#ffffff',
    colorBgLayout: '#f5f5f5',
    
    // Tipografia
    fontFamily: '-apple-system, "Segoe UI", Roboto, sans-serif',
    fontSize: 14,
    fontSizeHeading1: 38,
    fontSizeHeading2: 30,
    fontSizeHeading3: 24,
    
    // Bordas e raios
    borderRadius: 8,
    borderRadiusLG: 12,
    borderRadiusSM: 6,
    
    // Sombras
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    boxShadowSecondary: '0 4px 12px rgba(0, 0, 0, 0.08)',
    
    // Espaçamentos
    padding: 16,
    paddingLG: 24,
    paddingSM: 12,
    
    // Alturas de componentes
    controlHeight: 42,
    controlHeightLG: 48,
    controlHeightSM: 36,
  },
  
  components: {
    Button: {
      fontWeight: 500,
      borderRadius: 8,
    },
    
    Input: {
      borderRadius: 8,
      fontSize: 14,
    },
    
    Card: {
      borderRadiusLG: 12,
      boxShadowTertiary: '0 4px 12px rgba(0, 0, 0, 0.05)',
    },
    
    Typography: {
      titleMarginBottom: '0.5em',
      titleMarginTop: '1.2em',
    }
  }
}