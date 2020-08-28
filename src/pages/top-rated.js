import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import MovieList from '../components/MovieLists/MovieList'
import Footer from '../components/Footer/Footer'
import {AppsData} from '../utils/context/appDataContext'
import {discoverDataPage} from '../utils/apis/api'

export default function Toprated({data}) {
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Top Rated')
  })

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Top-Rated Movies</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding">
        <Navbar />  
        <MovieList 
          type='movie'
          title={'Top Rated Movies'}
          total={data.toprated.total_results}
          data={data.toprated.results}/>
        <Footer />
      </div>
    </div>
  )
}

Toprated.getInitialProps = async () => {
  const data = await discoverDataPage()
  return { data }
}