import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../../../components/Navbars/Navbars'
import {AppsData} from '../../../utils/context/appDataContext'

export default function Person() {
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Person')
  })
  
  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Person</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main">
        <Navbar />  
        <div className="div1"></div>
        <div className="div2"></div>
      </div>



    </div>
  )
}
