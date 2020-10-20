import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import MovieList from '../components/MovieLists/MovieList'
import Footer from '../components/Footer/Footer'
import Intro from '../components/Intro/Intro'
import {AppsData} from '../utils/context/appDataContext'
import {filterData} from '../utils/common/common'
import {trendingDataPage} from '../utils/apis/api'

export default function Trending({data}) {
  const {setActiveRoute} = useContext(AppsData)
  const [session, setSession] = useState({
    isSet: false,
    isTrue: false
  })
  useEffect(()=>{
    setActiveRoute('Trending')

    // check if the session is empty or not
    let hsession = sessionStorage.getItem('movie-box')
    if(!session.isSet) {
      if(hsession){
        setSession({isSet: true})
      } else {
        setSession({isSet: true, isTrue: true})
      }
    }
  })

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Trending Movies</title>
        <link rel="icon" href="/image/favicon.ico" />

        <link rel="apple-touch-icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aiman Adlawan"/>
        <meta name="description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />

        <meta property="og:title" content="Movie Box - Trending Movies" />
        <meta property="og:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta property="og:image" content="/image/meta-logo.ico" />
        <meta property="og:url" content="https://movie-box-flame.vercel.app/" />

        <meta name="twitter:title" content="Movie Box - Trending Movies" />
        <meta name="twitter:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta name="twitter:image" content="/image/meta-logo.ico" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="main page-padding">
        { session.isSet ? 
          <> { session.isTrue ? <Intro /> : null }
          <Navbar 
            onSearchPage={false}/>  
          <MovieList 
            type='trending'
            viewBtn={true}
            hlink='/[movies]/today'
            aslink='/trending/today'
            link='/trending/today'
            title={'Trending Today'}
            total={data.day.total_results}
            data={filterData(data.day.results)}/>
            
          <MovieList 
            type='trending'
            viewBtn={true}
            hlink='/[movies]/this-week'
            aslink='/trending/this-week'
            link='/trending/this-week'
            title={'Trending Week'}
            total={data.week.total_results}
            data={filterData(data.week.results)}/>
          <Footer quote={4}/>
        </> : null }
      </div>
    </div>
  )
}

Trending.getInitialProps = async () => {
  const data = await trendingDataPage()
  return { data }
}