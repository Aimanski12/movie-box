import React from 'react'
import {addComma} from '../../utils/common/common'

function Header(props) {
  
  function total(val){
    let total = val.movies.total_results + val.people.total_results + val.tvshows.total_results
    
    return addComma(total)
  }


  return (
    <div className="content-center movie-header">
      <h1 className="name-label">Results: 
        <i> {total(props.data)} item/s</i></h1>
      <span className='s-keywords'>keywords: 
        <i> {props.query}</i></span>
    </div>
  )
}

export default Header
