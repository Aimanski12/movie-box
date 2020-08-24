import React, {useEffect} from 'react'
import SearchSvg from '../../Svgs/Svgs/Searchsvg'
import CloseSvg from '../../Svgs/Svgs/Closesvg'
import {showlist} from '../../../utils/animation/navbar/showSubmenu'

function Search(props) {

  function click () {
    showlist('search')
    props.searchBarClick(props.isOpen)
  }


  useEffect(() =>{
    window.addEventListener('resize', ()=>{
      const searchForm = document.querySelector('.search-form')
      if(window.innerWidth > 968) {
        searchForm.style.height = '70px'
      } else {
        searchForm.style.height = '0px'
      }
    })
  })

  let btn = props.isOpen === 'close' ? <SearchSvg/> : <CloseSvg />

  return (
    <div className="search">
      <div className="search-icon">
        <div className="content-center search-wrapper">
          <span onClick={click}> {btn} </span>
        </div>
      </div>
      <div className="content-center search-form">
        <input 
          type="text" 
          placeholder='Search' 
          className='search-input'
          name='search'/>
        <button 
          className='search-button'
          type='button'>
            <SearchSvg color={'#0F1B46'} />
        </button>
      </div>
    </div>
  )
}

export default Search
