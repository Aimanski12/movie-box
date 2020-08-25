import React from 'react'
import Link from 'next/link'

function LinkButton() {
  return (
    <Link href='/'>
      <a className='content-center link-btn'>View Movie</a>
    </Link>
  )
}

export default LinkButton
