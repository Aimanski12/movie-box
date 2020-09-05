import React from 'react'
import {addComma} from '../../../utils/common/common'
import Link from 'next/link'

function Header(props) {
  return (
    <div className="content-center movie-header">
      <h1 className="name-label">{props.title}</h1>
      {props.total ? 
        <Link href={props.hlink} as={props.aslink}>
          <span>{`${addComma(props.total)} Movies`}</span>
        </Link> : null }
    </div>
  )
}

export default Header
