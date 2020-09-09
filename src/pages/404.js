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

        <link rel="apple-touch-icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aiman Adlawan"/>
        <meta name="description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />

        <meta property="og:title" content="Movie Box - Error Page" />
        <meta property="og:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta property="og:image" content="/image/meta-logo.ico" />
        <meta property="og:url" content="https://movie-box-flame.vercel.app/" />

        <meta name="twitter:title" content="Movie Box - Error Page" />
        <meta name="twitter:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta name="twitter:image" content="/image/meta-logo.ico" />
        <meta name="twitter:card" content="summary" />
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
        <Footer quote={7}/>
      </div>



    </div>
  )
}
