import React from 'react'
import Star from '../../Svgs/Svgs/Star'
import {addComma, filterYear} from '../../../utils/common/common'
import {getFigure, formatText, getRuntime, prodCountries, producers} from '../../../utils/common/movieid'

function ItemStats(props) {
  let data = props.data

  return (
    <div className="content-center item-stats">
      <div className="item-stats-wrapper">

        <div className="content-center person-header" >
          <h1 className="name-label">Movie Stats</h1>
        </div>
        
        <div className="stat-wrapper">
          <span className="stat-header">Budget</span>
          <span className="stat-desc">{getFigure(data.budget)}</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Revenue</span>
          <span className="stat-desc">{getFigure(data.revenue)}</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Rating</span>
          <span className="stat-desc">{data.vote_average} <Star /></span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Total Votes</span>
          <span className="stat-desc">{addComma(data.vote_count)}</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Genre</span>
          <span className="stat-desc">{formatText(data.genres)}</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Language/s</span>
          <span className="stat-desc">{
            data.spoken_languages ? formatText(data.spoken_languages) :
              data.original_language ? (data.original_language).toUpperCase() : 'N/A'
          }</span>
        </div>

        {data.runtime ? (
        <div className="stat-wrapper">
          <span className="stat-header">Runtime</span>
          <span className="stat-desc">{getRuntime(data.runtime)}</span>
        </div>
        ) : null}

        <div className="stat-wrapper">
          <span className="stat-header">Released</span>
          <span className="stat-desc">{
            data.release_date ? filterYear(data.release_date) : 
              data.first_air_date ? filterYear(data.first_air_date) : 'N/A'}</span>
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Producers</span>
          {producers(data.production_companies)}
        </div>

        <div className="stat-wrapper">
          <span className="stat-header">Production Countries</span>
          {prodCountries(data.production_countries, data.origin_country)}
        </div>
        

      </div>
    </div>
  )
}

export default ItemStats
