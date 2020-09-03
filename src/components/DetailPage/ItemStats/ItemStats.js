import React from 'react'
import Star from '../../Svgs/Svgs/Star'

function ItemStats() {
  return (
    <div className="content-center item-stats">
      <div className="item-stats-wrapper">

        <div className="content-center person-header">
          <h1 className="name-label">Movie Stats</h1>
        </div>
        
        <div className="stat-wrapper">
          <span className="stat-header">Budget</span>
          <span className="stat-desc">$ 25,000,000</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Revenue</span>
          <span className="stat-desc">$ 28,341,469</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Rating</span>
          <span className="stat-desc">8.7 <Star /></span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Total Votes</span>
          <span className="stat-desc">17,032</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Genre</span>
          <span className="stat-desc">Crime &nbsp; Drama &nbsp; Comedy</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Language/s</span>
          <span className="stat-desc">EN &nbsp; SP &nbsp; IT</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Runtime</span>
          <span className="stat-desc">2h 22min</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Released</span>
          <span className="stat-desc">2020</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Producers</span>
          <span className="stat-desc">Castle Rock Entertainment</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Production Countries</span>
          <span className="stat-desc">US, GB</span>
        </div>
        

      </div>
    </div>
  )
}

export default ItemStats
