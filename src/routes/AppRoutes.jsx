import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import LoginPage from '../pages/LoginPage'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'
import AnalyticsPage from '../pages/AnalyticsPage'
import TeamPage from '../pages/TeamPage'
import ProfilePage from '../pages/ProfilePage'
import SettingsPage from '../pages/SettingsPage'
import HelpPage from '../pages/HelpPage'
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
        path="/projects" 
        element={
          <ProtectedRoute>
            <ProjectsPage />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/analytics" 
        element={
          <ProtectedRoute>
            <AnalyticsPage />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/team" 
        element={
          <ProtectedRoute>
            <TeamPage />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/settings" 
        element={
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        } 
      />

      <Route 
        path="/help" 
        element={
          <ProtectedRoute>
            <HelpPage />
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
