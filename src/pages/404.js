import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import Footer from '../components/Footer/Footer'
import Logo from '../components/Svgs/Svgs/Logo'
import {AppsData} from '../utils/context/appDataContext'
import Link from 'next/link'

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
        <Navbar 
          onSearchPage={false}/>  
        <header className='content-center not-found-container'>
          <div className="big-logo">
            <Logo />
          </div>
          <p>File not found.</p>
          <div className='view-btn'>  
            <Link href='/' as='/'>
              <a className='content-center link-btn'>Go to home page.</a>
            </Link>          
          </div>
        </header>
        <Footer />
      </div>



    </div>
  )
}
