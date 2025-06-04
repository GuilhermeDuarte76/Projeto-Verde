import React from 'react'
import { Button, Avatar, Dropdown } from 'antd'
import { LogoutOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons'
import { useAuth } from '../hooks/useAuth'

const Header = () => {
  const { user, logout } = useAuth()

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
        <div className="logo">
          <span className="logo-icon">🌱</span>
          <span className="logo-text">Site Verde</span>
        </div>
        
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