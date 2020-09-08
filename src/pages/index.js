import React, {useContext, useEffect} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import HeaderCarousel from '../components/Header/Carousel'
import MovieList from '../components/MovieLists/MovieList'
import Footer from '../components/Footer/Footer'
import {filterData} from '../utils/common/common'
import {AppsData} from '../utils/context/appDataContext'
import {homeDataPage} from '../utils/apis/api'

export default function Home({data}) {
  const {setActiveRoute} = useContext(AppsData)
  useEffect(()=>{
    setActiveRoute('Home')
  })


  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Home</title>
        <link rel="icon" href="/image/favicon.ico" />

        <link rel="apple-touch-icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aiman Adlawan"/>
        <meta name="description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />

        <meta property="og:title" content="Movie Box - Home Page" />
        <meta property="og:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta property="og:image" content="/image/favicon.ico" />
        <meta property="og:url" content="https://movie-box-flame.vercel.app/" />

        <meta name="twitter:title" content="Movie Box - Home Page" />
        <meta name="twitter:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta name="twitter:image" content="/image/favicon.ico" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="main">
        <Navbar 
          onSearchPage={false}/>  
        <HeaderCarousel 
          data={data.popular}/>

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
          hlink='/upcoming'
          aslink='/upcoming'
          link='/upcoming/movies'
          title={'Upcoming Movies'}
          total={data.upcoming.total_results}
          data={filterData(data.upcoming.results)} />

        <Footer quote={0}/>

      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const data = await homeDataPage()
  return {data}
}