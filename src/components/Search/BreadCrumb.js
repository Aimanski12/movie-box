import React from 'react'

function BreadCrumb(props) {

  return (
    <div className='breadcrumb-wrapper'>
      <div className={`content-center breadcrumb-cont 
        ${props.page === 0 ? 'active' : ''}`}
        onClick={()=>props.click(0)}>
        <span className='s-keywords'>Movies (<i>2,010</i>)</span>
      </div>
      <div className={`content-center breadcrumb-cont 
        ${props.page === 1 ? 'active' : ''}`}
        onClick={()=>props.click(1)}>
        <span className='s-keywords'>TV Show (<i>2,820</i>)</span>
      </div>
      <div className={`content-center breadcrumb-cont 
        ${props.page === 2 ? 'active' : ''}`}
        onClick={()=>props.click(2)}>
        <span  className='s-keywords'>People (<i>1,535</i>)</span>
      </div>
    </div>
  )
}

export default BreadCrumb
