import React from 'react'
import Link from 'next/link'

export default function Logo() {
  return (
    <div className=" content-center logo">
      <a href='/'>
        <img src="/image/logo.png" alt="movie box logo"/>
      </a>
    </div>
  )
}
