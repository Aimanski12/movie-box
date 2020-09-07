import React from 'react'
import {getGender, getDeathday, filterAKA} from '../../utils/common/person'

function ItemStats(props) {
  let data = props.data
  return (
    <div className="content-center item-stats">
      <div className="item-stats-wrapper">

        <div className="content-center person-header" >
          <h1 className="name-label">Person Stats</h1>
        </div>
        
        <div className="stat-wrapper">
          <span className="stat-header">Complete Name</span>
          <span className="stat-desc">{
              data.name ? data.name : 'Not given'
          }</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Gender</span>
          <span className="stat-desc">{
            data.gender ? getGender(data.gender) : 'Not Given'}</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Birthday</span>
          <span className="stat-desc">{
            data.birthday ? data.birthday : 'Not Given'
          }</span>
        </div>
        
        {getDeathday(data.deathday)}

        <div className="stat-wrapper">
          <span className="stat-header">Place of Birth</span>
          <span className="stat-desc">{
            data.place_of_birth ? data.place_of_birth : 'Not given'
          }</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Popularity Rating</span>
          <span className="stat-desc">{
            data.popularity ? data.popularity : 'Not given'
          }</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Known For</span>
          <span className="stat-desc">{
            data.known_for_department ? data.known_for_department : 'Not given'
          }</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Also-known-as</span>
          { data.also_known_as ? filterAKA(data.also_known_as) : 
              <span className="stat-desc">Not given</span> }
        </div>

      </div>
    </div>
  )
}

export default ItemStats
