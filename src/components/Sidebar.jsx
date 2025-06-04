import React, { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { Drawer, Menu, Typography, Divider, Avatar } from 'antd'
import { CloseOutlined } from '@ant-design/icons'
import { useSidebar } from '../hooks/useSidebar'
import { useWindowSize } from '../hooks/useWindowSize'
import { useAuth } from '../hooks/useAuth'
import { navigationRoutes, isActiveRoute } from '../routes'
import { useScrollReveal } from '../hooks/useScrollReveal'

const { Title, Text } = Typography

const Sidebar = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const { isOpen, closeSidebar } = useSidebar()
  const { isMobile } = useWindowSize()
  const { user } = useAuth()

  // ScrollReveal para animações
  useScrollReveal('.sidebar-header', { delay: 100, origin: 'left' })
  useScrollReveal('.sidebar-menu', { delay: 200, origin: 'left' })
  useScrollReveal('.sidebar-footer', { delay: 300, origin: 'left' })

  const handleMenuClick = ({ key }) => {
    const route = navigationRoutes.find(r => r.key === key)
    if (route) {
      navigate(route.path)
      if (isMobile) {
        closeSidebar()
      }
    }
  }

  const menuItems = navigationRoutes.map(route => ({
    key: route.key,
    icon: route.icon,
    label: (
      <div className="menu-item-content">
        <span className="menu-label">{route.label}</span>
        <Text type="secondary" className="menu-description">
          {route.description}
        </Text>
      </div>
    )
  }))

  const selectedKeys = navigationRoutes
    .filter(route => isActiveRoute(location.pathname, route.path))
    .map(route => route.key)

  const sidebarContent = (
    <div className="sidebar-content">
      {/* Header da Sidebar */}
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="sidebar-logo-icon">🌱</span>
          <Title level={4} className="sidebar-logo-text">
            Site Verde
          </Title>
        </div>
        
        {isMobile && (
          <CloseOutlined 
            className="sidebar-close-btn"
            onClick={closeSidebar}
          />
        )}
      </div>

      <Divider style={{ margin: '1rem 0' }} />

      {/* Informações do Usuário */}
      {user && (
        <div className="sidebar-user-info">
          <Avatar 
            size={48}
            style={{ backgroundColor: 'var(--verde-folha)' }}
            className="sidebar-avatar"
          >
            {user.name?.charAt(0).toUpperCase()}
          </Avatar>
          <div className="sidebar-user-details">
            <Text strong className="sidebar-user-name">
              {user.name}
            </Text>
            <Text type="secondary" className="sidebar-user-email">
              {user.email}
            </Text>
          </div>
        </div>
      )}

      <Divider style={{ margin: '1.5rem 0' }} />

      {/* Menu de Navegação */}
      <div className="sidebar-menu">
        <Text type="secondary" className="sidebar-section-title">
          NAVEGAÇÃO
        </Text>
        
        <Menu
          mode="inline"
          selectedKeys={selectedKeys}
          items={menuItems}
          onClick={handleMenuClick}
          className="sidebar-navigation-menu"
          style={{ border: 'none' }}
        />
      </div>

      {/* Footer da Sidebar */}
      <div className="sidebar-footer">
        <Text type="secondary" className="sidebar-version">
          Versão 1.0.0
        </Text>
        <Text type="secondary" className="sidebar-copyright">
          © 2025 Site Verde
        </Text>
      </div>
    </div>
  )

  if (isMobile) {
    return (
      <Drawer
        title={null}
        placement="left"
        width={320}
        onClose={closeSidebar}
        open={isOpen}
        bodyStyle={{ padding: 0 }}
        headerStyle={{ display: 'none' }}
        className="sidebar-drawer"
      >
        {sidebarContent}
      </Drawer>
    )
  }

  return (
    <div className={`sidebar-desktop ${isOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      {sidebarContent}
    </div>
  )
}

export default Sidebar
