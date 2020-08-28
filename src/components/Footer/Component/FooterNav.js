import React, {useContext} from 'react'
import menus from '../../../utils/common/footernav.json'
import Link from 'next/link'
import {AppsData} from '../../../utils/context/appDataContext'

function FooterNav() {
  const {page} = useContext(AppsData)
  let navs = menus.routes.map((menu, i) => {
    return (
      <span key={i}>
        <Link href={menu.href}>
          <a className={page.active === menu.name ? 'active' : null}>{menu.name}</a>
        </Link>
      </span>
    )
  })

  return (
    <nav className='content-center footer-nav'>
      {navs}
    </nav>
  )
}

export default FooterNav
