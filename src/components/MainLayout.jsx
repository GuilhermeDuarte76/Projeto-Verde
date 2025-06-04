import React from 'react'
import { Layout } from 'antd'
import Header from './Header'
import Sidebar from './Sidebar'
import { SidebarProvider } from '../hooks/useSidebar'
import { useWindowSize } from '../hooks/useWindowSize'

const { Content } = Layout

const MainLayout = ({ children }) => {
  const { isMobile } = useWindowSize()

  return (
    <SidebarProvider>
      <Layout className="main-layout">
        <Header />
        
        <Layout className="content-layout">
          <Sidebar />
          
          <Content className={`main-content-wrapper ${isMobile ? 'mobile' : 'desktop'}`}>
            <div className="main-content">
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </SidebarProvider>
  )
}

export default MainLayout
