import React from 'react'
import Link from 'next/link'
import Menubar from '../../Svgs/Svgs/Menubar'
import CloseSvg from '../../Svgs/Svgs/Closesvg'
import {enter, leave, showlist} from '../../../utils/animation/navbar/showSubmenu'

function Menulists(props) {

  function click(){
    showlist('list')
    props.menuBarClick(props.isOpen)
  }

  let btn = props.isOpen === 'close' ? <Menubar /> : <CloseSvg />

  return (
    <div className="menu">
      <div className="burger">
        <div className="content-center burger-wrapper">
          <span onClick={click}> {btn} </span>
        </div>
      </div>
      <nav className="nav-menu">
        <ul className='main-list'>
          <li>
            <a className='active' href="/">Home</a>
          </li>
          <li>
            <Link href='/'>
              <a>TV Shows</a>
            </Link>
          </li>
          <li>
            <a href="/">Trending</a>
          </li>
          <li
            onMouseEnter={enter}
            onMouseLeave={leave}>
            <a href="/">Discover</a>
            <ul className='sub-list'>
              <li>
                <a href="/">Popular</a>
              </li>
              <li>
                <a href="/">Top Rated</a>
              </li>
              <li>
                <a href="/">Upcoming</a>
              </li>
            </ul>
          </li>
          <li className='hide'>
            <a href="/">Popular</a>
          </li>
          <li className='hide'>
            <a href="/">Top Rated</a>
          </li>
          <li className='hide'>
            <a href="/">Upcoming</a>
          </li>
          <li>
            <a href="/">People</a>
          </li>
          <li>
            <a href="/">Genre</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Menulists
