import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import MovieList from '../components/MovieLists/MovieList'
import Footer from '../components/Footer/Footer'
import {AppsData} from '../utils/context/appDataContext'
import {discoverDataPage} from '../utils/apis/api'

export default function Popular({data}) {
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Popular')
  })

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Popular Movies</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding">
        <Navbar />  
        <MovieList 
          type='movie'
          title={'Popular Movies'}
          total={data.popular.total_results}
          data={data.popular.results}/>
        <Footer />
      </div>
    </div>
  )
}

Popular.getInitialProps = async () => {
  const data = await discoverDataPage()
  return { data }
}