import React, {useEffect, useState} from 'react'
import SearchSvg from '../../Svgs/Svgs/Searchsvg'
import CloseSvg from '../../Svgs/Svgs/Closesvg'
import {useRouter} from 'next/router'
import {showlist} from '../../../utils/animation/navbar/showSubmenu'

function Search(props) {
  const router = useRouter()
  const [inputVal, setInput] = useState('')

  function click () {
    showlist('search')
    props.searchBarClick(props.isOpen)
  }

  function setUrl () {
    if (!inputVal || 1 === inputVal.length || /^\s*$/.test(inputVal)) {
      return 
    } else {
      setInput('')
      if(props.onSearchPage){
        props.click(inputVal)
      } else {
        let a = encodeURIComponent(inputVal)
        router.replace('/[movies]/search/[_search]', `/movies/search/${a}`)
      }
    }
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
          value={inputVal}
          name='search'
          onChange={(e)=>setInput(e.target.value)}/>
        <button 
          className='search-button'
          type='button'
          onClick={setUrl}>
            <SearchSvg color={'#0F1B46'} />
        </button>
      </div>
    </div>
  )
}

export default Search
