import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import MovieList from '../components/MovieLists/MovieList'
import Footer from '../components/Footer/Footer'
import {AppsData} from '../utils/context/appDataContext'
import {filterData} from '../utils/common/common'
import {trendingDataPage} from '../utils/apis/api'

export default function Trending({data}) {
  const {setActiveRoute} = useContext(AppsData)
  useEffect(()=>{
    setActiveRoute('Trending')
  })

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Trending Movies</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding">
        <Navbar />  
        <MovieList 
          type='trending'
          viewBtn={true}
          hlink='/[movies]/today'
          aslink='/trending/today'
          title={'Trending Today'}
          total={data.day.total_results}
          data={filterData(data.day.results)}/>
          
        <MovieList 
          type='trending'
          viewBtn={true}
          hlink='/[movies]/this-week'
          aslink='/trending/this-week'
          title={'Trending Week'}
          total={data.week.total_results}
          data={filterData(data.week.results)}/>
        <Footer />
      </div>
    </div>
  )
}

Trending.getInitialProps = async () => {
  const data = await trendingDataPage()
  return { data }
}