import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbars/Navbars'
import MovieList from '../../components/MovieLists/MovieList'
import Footer from '../../components/Footer/Footer'
import Pagination from '../../components/Pagination/Pagination'
import {AppsData} from '../../utils/context/appDataContext'
import {scrollTop, spd, initData} from '../../utils/common/common'
import {getDataPage} from '../../utils/apis/api'

export default function Popular() {
  const {setActiveRoute} = useContext(AppsData)
  const [data, setData] = useState(initData)

  useEffect(()=>{
    setActiveRoute('TV - Popular')
    if(!data.isSet) {
      async function gData (){
        let a = await getDataPage('/tv/popular', 1)
        setData(spd(a.data, data))
      }
      gData()
    } 
  },[])

  async function getNewData(val){
    let a = await getDataPage('/tv/popular', val)
    setData(spd(a.data, data))
    scrollTop()
  } 

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | TV Shows - Popular</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding">
        <Navbar 
          onSearchPage={false}/>  
        { Object.keys(data.data).length !== 0 ? 
            <MovieList 
              viewBtn={false}
              hlink='/[movies]/popular'
              aslink='/tv-shows/popular'
              link='/tv-shows/popular'
              type='tv-show'
              title={'Popular Shows'}
              total={data.data.total_results}
              data={data.data.results}/> : null
        }
        <Pagination 
          click={(val=>getNewData(val))}
          totalpages={data.totalpages} />
        <Footer quote={3}/>
      </div>
    </div>
  )
}

