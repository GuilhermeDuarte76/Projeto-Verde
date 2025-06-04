import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import ProtectedRoute from './ProtectedRoute'

export const AppRoutes = () => {
  const { user } = useAuth()

  return (
    <Routes>
      <Route 
        path="/login" 
        element={user ? <Navigate to="/home" replace /> : <LoginPage />} 
      />
      
      <Route 
        path="/home" 
        element={
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        } 
      />
      
      <Route 
        path="/" 
        element={<Navigate to={user ? "/home" : "/login"} replace />} 
      />
      
      <Route 
        path="*" 
        element={<Navigate to={user ? "/home" : "/login"} replace />} 
      />
    </Routes>
  )
}