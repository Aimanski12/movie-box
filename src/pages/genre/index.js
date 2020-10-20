import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbars/Navbars'
import Intro from '../../components/Intro/Intro'
import Footer from '../../components/Footer/Footer'
import GenreHeader from '../../components/Genre/Genre'
import {AppsData} from '../../utils/context/appDataContext'

export default function Genre() {
  const {setActiveRoute} = useContext(AppsData)
  const [session, setSession] = useState({
    isSet: false,
    isTrue: false
  })

  useEffect(()=>{
    setActiveRoute('Genre')

    // check if the session is empty or not
    let hsession = sessionStorage.getItem('movie-box')
    if(!session.isSet) {
      if(hsession){
        setSession({isSet: true})
      } else {
        setSession({isSet: true, isTrue: true})
      }
    }
  })
  
  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Genre</title>
        <link rel="icon" href="/image/favicon.ico" />

        <link rel="apple-touch-icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aiman Adlawan"/>
        <meta name="description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />

        <meta property="og:title" content="Movie Box - Genre" />
        <meta property="og:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta property="og:image" content="/image/meta-logo.ico" />
        <meta property="og:url" content="https://movie-box-flame.vercel.app/" />

        <meta name="twitter:title" content="Movie Box - Genre" />
        <meta name="twitter:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta name="twitter:image" content="/image/meta-logo.ico" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="main">
        { session.isSet ? 
          <> { session.isTrue ? <Intro /> : null }
          <Navbar 
            onSearchPage={false}/>  
          <GenreHeader />
          <Footer quote={13}/>
        </> : null }
      </div>
    </div>
  )
}
