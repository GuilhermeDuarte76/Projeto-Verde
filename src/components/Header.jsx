import React from 'react'
import { Button, Avatar, Dropdown } from 'antd'
import { 
  LogoutOutlined, 
  UserOutlined, 
  SettingOutlined,
  MenuOutlined,
  MenuFoldOutlined
} from '@ant-design/icons'
import { useAuth } from '../hooks/useAuth'
import { useSidebar } from '../hooks/useSidebar'
import { useWindowSize } from '../hooks/useWindowSize'

const Header = () => {
  const { user, logout } = useAuth()
  const { isOpen, toggleSidebar } = useSidebar()
  const { isMobile } = useWindowSize()

  const menuItems = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Perfil',
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: 'Configurações',
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Sair',
      onClick: logout,
      danger: true,
    },
  ]

  return (
    <header className="header">
      <div className="header-content">
        {/* Botão do Menu - Lado Esquerdo */}
        <div className="header-left">
          <Button
            type="text"
            icon={isOpen && !isMobile ? <MenuFoldOutlined /> : <MenuOutlined />}
            onClick={toggleSidebar}
            className="menu-toggle-btn"
            size="large"
          />
          
          {/* Logo para mobile quando sidebar fechada */}
          {(isMobile || !isOpen) && (
            <div className="header-logo-mobile">
              <span className="logo-icon">🌱</span>
              <span className="logo-text">Site Verde</span>
            </div>
          )}
        </div>
        
        {/* Seção do Usuário - Lado Direito */}
        {user && (
          <div className="user-section">
            <span className="welcome-text">
              Olá, <strong>{user.name}</strong>!
            </span>
            
            <Dropdown
              menu={{ items: menuItems }}
              placement="bottomRight"
              arrow
            >
              <Avatar 
                style={{ 
                  backgroundColor: 'var(--verde-folha)',
                  cursor: 'pointer',
                  marginLeft: '1rem'
                }}
                icon={<UserOutlined />}
              />
            </Dropdown>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
