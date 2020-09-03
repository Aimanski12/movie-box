import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbars/Navbars'
import Footer from '../../components/Footer/Footer'
import GenreHeader from '../../components/Genre/Genre'
import {AppsData} from '../../utils/context/appDataContext'

export default function Genre() {
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Genre')
  })
  
  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Genre</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main">
        <Navbar />  
        <GenreHeader />
        <Footer />
      </div>
    </div>
  )
}
