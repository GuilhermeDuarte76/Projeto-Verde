import React from 'react'
import { Card } from 'antd'

const StatsCard = ({ number, label, icon, color = 'var(--verde-folha)' }) => {
  return (
    <Card 
      className="stats-card"
      bordered={false}
      style={{ borderLeft: `4px solid ${color}` }}
      hoverable
    >
      <div className="stats-content">
        {icon && <div className="stats-icon">{icon}</div>}
        <div className="stats-info">
          <div className="stats-number">{number}</div>
          <div className="stats-label">{label}</div>
        </div>
      </div>
    </Card>
  )
}

export default StatsCard