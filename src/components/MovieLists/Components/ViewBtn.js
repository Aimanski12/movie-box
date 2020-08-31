import React from 'react'
import Link from 'next/link'

function ViewBtn(props) {
  return (
    <div className='view-btn'>  
      <Link href={props.hlink} as={props.aslink}>
        <a className='content-center link-btn'>{`View All ${props.title}`}</a>
      </Link>          
    </div>
  )
}

export default ViewBtn
