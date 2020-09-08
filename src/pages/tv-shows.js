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

        <link rel="apple-touch-icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aiman Adlawan"/>
        <meta name="description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />

        <meta property="og:title" content="Movie Box - TV Shows" />
        <meta property="og:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta property="og:image" content="/image/favicon.ico" />
        <meta property="og:url" content="https://movie-box-flame.vercel.app/" />

        <meta name="twitter:title" content="Movie Box - TV Shows" />
        <meta name="twitter:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta name="twitter:image" content="/image/favicon.ico" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="main page-padding main-bkg">
        <Navbar 
          onSearchPage={false}/>  

        <MovieList 
          type='tv-show'
          viewBtn={true}
          hlink='/[movies]/popular'
          aslink='/tv-shows/popular'
          link='/tv-shows/popular'
          title={'Popular Shows'}
          total={data.popular.total_results}
          data={filterData(data.popular.results)}/>

        <MovieList 
          type='tv-show'
          viewBtn={true}
          hlink='/[movies]/on-air'
          aslink='/tv-shows/on-air'
          link='/tv-shows/on-air'
          title={'On-Air Shows'}
          total={data.on_air.total_results}
          data={filterData(data.on_air.results)}/>
      
        <Footer quote={1}/>
      </div>
    </div>
  )
}

TvShows.getInitialProps = async () => {
  const data = await tvDataPage()
  return { data }
}