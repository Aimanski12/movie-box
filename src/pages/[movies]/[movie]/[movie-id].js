import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../../../components/Navbars/Navbars'
import Footer from '../../../components/Footer/Footer'
import Movie from '../../../components/Movie/Movie'
import {AppsData} from '../../../utils/context/appDataContext'
import {useRouter} from 'next/router'

export default function MovieId() {
  const router = useRouter()
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Movie Indvl')
  })
  
  console.log(router.query)

  return (
    <div className='main-container content-center'>

      <Head>
        <title>Movie Box | Movie Details</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main">
        <Navbar />  
        <Movie />




        <div className="div1"></div>
        <div className="div2"></div>
        
        <Footer />
      </div>

    </div>
  )
}

