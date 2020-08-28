import React from 'react'
import {addComma} from '../../../utils/common/common'
import Link from 'next/link'

function Header(props) {
  return (
    <div className="content-center movie-header">
      <h1 className="name-label">{props.title}</h1>
      <Link href='/'>
        <span>{`${addComma(props.total)} Movies`}</span>
      </Link>
    </div>
  )
}

export default Header
