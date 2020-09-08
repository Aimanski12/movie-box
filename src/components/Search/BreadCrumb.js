import React from 'react'
import {addComma} from '../../utils/common/common'

function BreadCrumb(props) {
  const m = props.data.movies.total_results
  const t = props.data.tvshows.total_results
  const p = props.data.people.total_results
  
  return (
    <div className='breadcrumb-wrapper'>
      <div className={`content-center breadcrumb-cont 
        ${props.page === 0 ? 'active' : ''}`}
        onClick={()=>props.click(0)}>
        <span className='s-keywords'>Movies (<i>{addComma(m)}</i>)</span>
      </div>
      <div className={`content-center breadcrumb-cont 
        ${props.page === 1 ? 'active' : ''}`}
        onClick={()=>props.click(1)}>
        <span className='s-keywords'>TV Show (<i>{addComma(t)}</i>)</span>
      </div>
      <div className={`content-center breadcrumb-cont 
        ${props.page === 2 ? 'active' : ''}`}
        onClick={()=>props.click(2)}>
        <span  className='s-keywords'>People (<i>{addComma(p)}</i>)</span>
      </div>
    </div>
  )
}

export default BreadCrumb
