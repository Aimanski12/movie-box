import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import {useRouter} from 'next/router'
import Navbar from '../../../components/Navbars/Navbars'
import Footer from '../../../components/Footer/Footer'
import {AppsData} from '../../../utils/context/appDataContext'
import {searchMovie} from '../../../utils/apis/api'
import Header from '../../../components/Search/Header'
import BreadCrumbs from '../../../components/Search/BreadCrumb'
import SearchItems from '../../../components/Search/SearchItems'
import {animateBreadCrumbs} from '../../../utils/animation/breadcrumbs/breadcrumbs'


import {scrollTop, spd, initData} from '../../../utils/common/common'


import MovieList from '../../../components/MovieLists/MovieList'
import Pagination from '../../../components/Pagination/Pagination'

export default function ThisWeek() {
  const [w, setWidth] = useState(0)
  const router = useRouter()
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
          title: url,
          data: results
        })
      }
      gData()
    } 
    animateBreadCrumbs(0)
  },[])


  async function getNewData(val){
    // let a = await getDataPage('/trending/all/week', val)
    // setData(spd(a.data, data))
    // scrollTop()
  } 

  function setBreadCrumbs (val) {
    setActivePage(val)
    animateBreadCrumbs(val)
  }

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Search Movies</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding search-page">
        <Navbar 
          onSearchPage={true}
          click={(val)=>{
            console.log(val)
            let a = encodeURIComponent(val)
            router.replace('/[movies]/search/[_search]', `/movies/search/${a}`)
          }}/>  

        
        <div className='content-center movielist-container'>
          <div className="movielist-wrapper">
          <Header />
          <BreadCrumbs 
            click={(val)=>setBreadCrumbs(val)}
            page={activePage}/>

            <div className="item-result-wrapper">


              {/* <div className="movie-list">

              
              </div> */}

              {/* <div className="content-center no-item-result">
                <Film />
                <span>No results found.</span>
              </div> */}

            <SearchItems 
              width={w}
              open={activePage}
              img='film' t='page one'
              result={true}/>
            <SearchItems width={w} img='tv' t='page two' result={false}/>
            <SearchItems width={w} img='mask' t='page three' result={true}/>
            


            </div>
          


          </div>
        </div>
        





        
        <Footer />

      </div>
    </div>

  )
}

