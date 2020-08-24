import React from 'react'
import Link from 'next/link'

export default function Logo() {
  return (
    <div className=" content-center logo">
      <Link href='/' as=''>
        <a>
          <img src="/logo.png" alt="movie box logo"/>
        </a>
      </Link>
    </div>
  )
}
