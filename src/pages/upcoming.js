import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import MovieList from '../components/MovieLists/MovieList'
import Footer from '../components/Footer/Footer'
import {AppsData} from '../utils/context/appDataContext'
import {discoverDataPage} from '../utils/apis/api'

export default function Upcoming({data}) {
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Upcoming')
  })

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Upcoming Movies</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding">
        <Navbar />  
        <MovieList 
          type='movie'
          title={'Upcoming Movies'}
          total={data.upcoming.total_results}
          data={data.upcoming.results}/>
        <Footer />
      </div>
    </div>
  )
}

Upcoming.getInitialProps = async () => {
  const data = await discoverDataPage()
  return { data }
}