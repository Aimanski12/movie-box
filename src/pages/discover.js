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

        <link rel="apple-touch-icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aiman Adlawan"/>
        <meta name="description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />

        <meta property="og:title" content="Movie Box - Discover Movies" />
        <meta property="og:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta property="og:image" content="/image/meta-logo.ico" />
        <meta property="og:url" content="https://movie-box-flame.vercel.app/" />

        <meta name="twitter:title" content="Movie Box - Discover Movies" />
        <meta name="twitter:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta name="twitter:image" content="/image/meta-logo.ico" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="main page-padding">
        <Navbar 
          onSearchPage={false}/>  

        <MovieList 
          type='movie'
          viewBtn={true}
          hlink='/top-rated'
          aslink='/top-rated'
          link='/top-rated/movies'
          title={'Top-Rated Movies'}
          total={data.toprated.total_results}
          data={filterData(data.toprated.results)}/>

        <MovieList 
          type='movie'
          viewBtn={true}
          hlink='/popular'
          aslink='/popular'
          link='/popular/movies'
          title={'Popular Movies'}
          total={data.popular.total_results}
          data={filterData(data.popular.results)}/>

        <MovieList 
          type='movie'
          viewBtn={true}
          hlink='/upcoming'
          aslink='/upcoming'
          link='/upcoming/movies'
          title={'Upcoming Movies'}
          total={data.upcoming.total_results}
          data={filterData(data.upcoming.results)}/>

        <Footer quote={7}/>
      
      </div>
    </div>
  )
}

Discover.getInitialProps = async () => {
  const data = await discoverDataPage()
  return { data }
}