import React from 'react'
import Menubar from '../../Svgs/Svgs/Menubar'
import CloseSvg from '../../Svgs/Svgs/Closesvg'
import Menulistbar from './Menulistbar'
import {showlist} from '../../../utils/animation/navbar/showSubmenu'

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
        <Menulistbar />
      </nav>
    </div>
  )
}

export default Menulists
