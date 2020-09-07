import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import MovieList from '../components/MovieLists/MovieList'
import Footer from '../components/Footer/Footer'
import Pagination from '../components/Pagination/Pagination'
import {AppsData} from '../utils/context/appDataContext'
import {scrollTop, spd, initData} from '../utils/common/common'
import {getDataPage} from '../utils/apis/api'

export default function Upcoming() {
  const {setActiveRoute} = useContext(AppsData)
  const [data, setData] = useState(initData)

  useEffect(()=>{
    setActiveRoute('Upcoming')
    if(!data.isSet) {
      async function gData (){
        let a = await getDataPage('/movie/upcoming', 1)
        setData(spd(a.data, data))
      }
      gData()
    } 
  }, [])
  

  async function getNewData(val){
    let a = await getDataPage('/movie/upcoming', val)
    setData( spd(a.data, data) )
    scrollTop()
  }

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Upcoming Movies</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding">
        <Navbar 
          onSearchPage={false}/>  
        { Object.keys(data.data).length !== 0 ? 
            <MovieList 
              viewBtn={false}
              hlink='/upcoming'
              aslink='/upcoming'
              link='/upcoming/movies'
              type='movie'
              title={'Upcoming Movies'}
              total={data.data.total_results}
              data={data.data.results}/> : null }
        <Pagination 
          click={(val=>getNewData(val))}
          totalpages={data.totalpages} />
        <Footer />
      </div>
    </div>
  )
}

