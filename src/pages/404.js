import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import {AppsData} from '../utils/context/appDataContext'

export default function NotFound() {
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Not Found')
  })
  
  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Not Found</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main">
        <Navbar />  
        <h1>not found</h1>
        <div className="div1"></div>
        <div className="div2"></div>
      </div>



    </div>
  )
}
