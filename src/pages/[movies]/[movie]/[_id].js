import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import Navbar from '../../../components/Navbars/Navbars'
import Footer from '../../../components/Footer/Footer'
import Movie from '../../../components/DetailPage/Detail'
import {AppsData} from '../../../utils/context/appDataContext'
import {initData} from '../../../utils/common/common'
import {useRouter} from 'next/router'
import {findVideo} from '../../../utils/apis/api'
import {checkifvalid} from '../../../utils/common/movieid'

export default function MovieId() {
  const router = useRouter()
  const [data, setData] = useState(initData)
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Movie Indvl')
    const query = router.query
    const path = window.location.pathname
    const valid = checkifvalid(query, path)
    if(!valid.isTrue) {
      router.replace('/404', window.location.pathname)
    } else {
      if (!data.isSet) {
        async function gData() {
          let movie = await findVideo(valid.route, valid._id)
          if(!movie.data) {
            router.replace('/404', window.location.pathname)
          } else {
            setData(movie)            
          }
        } gData()
      }
    }
  }, [])

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Movie Details</title>
        <link rel="icon" href="/image/favicon.ico" />

        <link rel="apple-touch-icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aiman Adlawan"/>
        <meta name="description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />

        <meta property="og:title" content="Movie Box - Movie Detail" />
        <meta property="og:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta property="og:image" content="/image/favicon.ico" />
        <meta property="og:url" content="https://movie-box-flame.vercel.app/" />

        <meta name="twitter:title" content="Movie Box - Movie Detail" />
        <meta name="twitter:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta name="twitter:image" content="/image/favicon.ico" />
      </Head>

      <div className="main">
        <Navbar 
          onSearchPage={false}/>  
        <Movie 
          data={data}/>
        <Footer quote={15}/>
      </div>

    </div>
  )
}

