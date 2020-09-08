import React, {Fragment, useEffect, useState} from 'react'
import Logo from './components/Logo'
import Menulists from './components/Menulists'
import Search from './components/Search'
import {scroll} from '../../utils/animation/navbar/scroll'

function Navbars(props) {

  const [menu, setMenu] = useState('close')
  const [search, setSearch] = useState('close')

  useEffect(()=>{
    window.addEventListener('scroll', scroll)
  })

  function click(el, val) {
    if(el === 'menu'){
      val === 'close' ? setMenu('open') : setMenu('close')
      search === 'open' ? setSearch('close') : null
    } else {
      val === 'close' ? setSearch('open') : setSearch('close')
      menu === 'open' ? setMenu('close') : null
    }
  }

  return (
    <Fragment>
      <nav className='content-center top-nav'>
        <Logo />
        <Menulists 
          isOpen={menu}
          menuBarClick={(val)=>click('menu', val)} />
        <Search 
          width={props.width}
          onSearchPage={props.onSearchPage}
          click={(val)=>{props.click(val)}}
          isOpen={search}
          searchBarClick={(val)=>click('search', val)} />
      </nav>
    </Fragment>
  )
}

export default Navbars
