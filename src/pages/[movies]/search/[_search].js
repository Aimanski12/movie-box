import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Navbar from '../../../components/Navbars/Navbars'
import Footer from '../../../components/Footer/Footer'
import {AppsData} from '../../../utils/context/appDataContext'
import {searchMovie, getAnotherData} from '../../../utils/apis/api'
import Header from '../../../components/Search/Header'
import BreadCrumbs from '../../../components/Search/BreadCrumb'
import SearchItems from '../../../components/Search/SearchItems'
import People from '../../../components/Search/People'
import {animateBreadCrumbs} from '../../../utils/animation/breadcrumbs/breadcrumbs'
import {scrollTop} from '../../../utils/common/common'

export default function Search() {
  const router = useRouter()
  const [w, setWidth] = useState(0)
  const {setActiveRoute} = useContext(AppsData)
  const [activePage, setActivePage] = useState(0)
  const [data, setData] = useState({isSet: false, data: {}})
  
  useEffect(()=>{
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    w === 0 ? setWidth(window.innerWidth) : null
    setActiveRoute('Search')
    const path = window.location.pathname.split('/')[3]
    const url = decodeURIComponent(path)

    if(!data.isSet) {
      async function gData (){
        let results = await searchMovie(url, 1)
        setData({
          isSet: true,
          url: url,
          data: results
        })
      }
      gData()
    } 
  },[])
  

  async function getNewData(page, url){
    let a = await getAnotherData(page, data.url, url)
    setData({
      ...data,
      data: {
        ...data.data,
        [url]: a
      }
    })
    scrollTop()
  } 

  function setBreadCrumbs (val) {
    setActivePage(val)
    animateBreadCrumbs(val)
  }

  async function search (val) {
    let results = await searchMovie(val, 1)
    setData({
      ...data,
      url: val,
      data: results
    })
  }

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Search Movies</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding search-page">
        <Navbar 
          width={w}
          onSearchPage={true}
          click={(val)=>{search(val)}}/>  
        
        <div className='content-center movielist-container'>
          <div className="movielist-wrapper">

          { data.isSet ? 
            <Header 
              data={data.data}
              query={data.url}/> : null}

          {data.isSet ? 
            <BreadCrumbs 
              page={activePage}
              click={(val)=>setBreadCrumbs(val)}
              data={data.data}/> : null }

          <div className="item-result-wrapper">
          
          {data.isSet ? 
            <SearchItems width={w} img='film'
              text='Movies'
              cname={'item-open'} 
              link='/search/movies'
              data={data.data.movies}
              click={(page)=>getNewData(page, 'movies')}/> : null }
          {data.isSet ? 
            <SearchItems width={w} img='tv' 
              data={data.data.tvshows}
              text='TV Shows'
              link='/tv-shows/search'
              click={(page)=>getNewData(page, 'tvshows')}/> : null }
          {data.isSet ? 
            <People width={w} img='mask' 
              data={data.data.people}
              text='People'
              click={(page)=>getNewData(page, 'people')} /> : null }
            </div>
          </div>
        </div>
        
        <Footer quote={16}/>

      </div>
    </div>

  )
}

