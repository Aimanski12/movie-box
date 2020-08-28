import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import MovieList from '../components/MovieLists/MovieList'
import Footer from '../components/Footer/Footer'
import {AppsData} from '../utils/context/appDataContext'
import {discoverDataPage} from '../utils/apis/api'
import {filterData} from '../utils/common/common'

export default function Discover({data}) {
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Discover')
  })

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Discover Movies</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding">
        <Navbar />  

        <MovieList 
          type='movie'
          title={'Popular Movies'}
          total={data.popular.total_results}
          data={filterData(data.popular.results)}/>
        
        <MovieList 
          type='movie'
          title={'Top-Rated Movies'}
          total={data.toprated.total_results}
          data={filterData(data.toprated.results)}/>

        <MovieList 
          type='movie'
          title={'Upcoming Movies'}
          total={data.upcoming.total_results}
          data={filterData(data.upcoming.results)}/>

        <Footer />
      
      </div>
    </div>
  )
}

Discover.getInitialProps = async () => {
  const data = await discoverDataPage()
  return { data }
}