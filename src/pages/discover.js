import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import {AppsData} from '../utils/context/appDataContext'

export default function Discover() {
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Discover')
  })

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Discover Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <Navbar />  



      <div className="div1"></div>
      <div className="div2"></div>
      </div>





      
    </div>
  )
}
