import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import Footer from '../components/Footer/Footer'
import MovieList from '../components/MovieLists/MovieList'
import {filterData} from '../utils/common/common'
import {AppsData} from '../utils/context/appDataContext'
import {tvDataPage} from '../utils/apis/api'


export default function TvShows({data}) {
  const {setActiveRoute} = useContext(AppsData)
  useEffect(()=>{
    setActiveRoute('TV Shows')
  })

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | TV Shows</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding main-bkg">
        <Navbar />  

        <MovieList 
          type='tv-show'
          title={'Popular Shows'}
          total={data.popular.total_results}
          data={filterData(data.popular.results)}/>

        <MovieList 
          type='tv-show'
          title={'On-Air Shows'}
          total={data.on_air.total_results}
          data={filterData(data.on_air.results)}/>
      
        <Footer />
      </div>
    </div>
  )
}

TvShows.getInitialProps = async () => {
  const data = await tvDataPage()
  return { data }
}