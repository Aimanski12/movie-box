import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import HeaderCarousel from '../components/Header/Carousel'
import {AppsData} from '../utils/context/appDataContext'

export default function Home() {
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Home')
  })

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <Navbar />  
        <HeaderCarousel />

      <div className="div2"></div>
      </div>
    </div>
  )
}
