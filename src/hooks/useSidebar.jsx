import { createContext, useContext, useState } from 'react'

const SidebarContext = createContext()

export const SidebarProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [collapsed, setCollapsed] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  const openSidebar = () => {
    setIsOpen(true)
  }

  const toggleCollapsed = () => {
    setCollapsed(!collapsed)
  }

  const value = {
    isOpen,
    collapsed,
    toggleSidebar,
    closeSidebar,
    openSidebar,
    toggleCollapsed
  }

  return (
    <SidebarContext.Provider value={value}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebar = () => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar deve ser usado dentro de SidebarProvider')
  }
  return context
}
