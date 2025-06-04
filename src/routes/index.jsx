import {
  HomeOutlined,
  UserOutlined,
  SettingOutlined,
  DashboardOutlined,
  TeamOutlined,
  FileTextOutlined,
  BarChartOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons'

export const navigationRoutes = [
  {
    key: 'home',
    path: '/home',
    label: 'Dashboard',
    icon: <DashboardOutlined />,
    description: 'Painel principal com estatísticas'
  },
  {
    key: 'projects',
    path: '/projects',
    label: 'Projetos',
    icon: <FileTextOutlined />,
    description: 'Gerenciar projetos sustentáveis'
  },
  {
    key: 'analytics',
    path: '/analytics',
    label: 'Relatórios',
    icon: <BarChartOutlined />,
    description: 'Análises e métricas'
  },
  {
    key: 'team',
    path: '/team',
    label: 'Equipe',
    icon: <TeamOutlined />,
    description: 'Gerenciar membros da equipe'
  },
  {
    key: 'profile',
    path: '/profile',
    label: 'Perfil',
    icon: <UserOutlined />,
    description: 'Configurações do usuário'
  },
  {
    key: 'settings',
    path: '/settings',
    label: 'Configurações',
    icon: <SettingOutlined />,
    description: 'Configurações do sistema'
  },
  {
    key: 'help',
    path: '/help',
    label: 'Ajuda',
    icon: <QuestionCircleOutlined />,
    description: 'Suporte e documentação'
  }
]

// Função para buscar rota pelo path
export const getRouteByPath = (path) => {
  return navigationRoutes.find(route => route.path === path)
}

// Função para verificar se a rota é ativa
export const isActiveRoute = (currentPath, routePath) => {
  return currentPath === routePath
}
