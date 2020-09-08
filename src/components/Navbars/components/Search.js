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
      if(props.onSearchPage){
        // console.log(props.onSearchPage)
        props.click(inputVal)
        let a = encodeURIComponent(inputVal)
        router.replace('/[movies]/search/[_search]', `/movies/search/${a}`)
        setInput('')
      } else {
        let a = encodeURIComponent(inputVal)
        router.replace('/[movies]/search/[_search]', `/movies/search/${a}`)
        setInput('')
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
          onKeyPress={(e)=>{
            if(e.key === 'Enter') {
              props.width <= 968 ? click() : null
              setUrl(e.target.value)
            }
          }}
          onChange={(e)=>setInput(e.target.value)}/>
        <button 
          className='search-button'
          type='button'
          onClick={()=>{
            setUrl()
            props.width <= 968 ? click() : null
          }}>
            <SearchSvg color={'#0F1B46'} />
        </button>
      </div>
    </div>
  )
}

export default Search
