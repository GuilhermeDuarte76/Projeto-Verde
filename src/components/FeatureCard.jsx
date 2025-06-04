import React from 'react'
import { Card } from 'antd'

const FeatureCard = ({ icon, title, description, onClick }) => {
  return (
    <Card 
      className="feature-card"
      hoverable
      onClick={onClick}
      bordered={false}
    >
      <div className="feature-content">
        <div className="feature-icon">{icon}</div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </div>
    </Card>
  )
}

export default FeatureCard