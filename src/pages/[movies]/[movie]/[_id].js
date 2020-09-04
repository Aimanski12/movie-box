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
        <script src='https://www.youtube.com/iframe_api'></script>
      </Head>

      <div className="main">
        <Navbar />  
        <Movie 
          data={data}/>
        <Footer />
      </div>

    </div>
  )
}

