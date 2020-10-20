import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import Navbar from '../../../components/Navbars/Navbars'
import ItemStats from '../../../components/PersonDetail/ItemStats'
import DetailMovies from '../../../components/PersonDetail/DetailImage'
import Posters from '../../../components/PersonDetail/Poster'
import Footer from '../../../components/Footer/Footer'
import Intro from '../../../components/Intro/Intro'
import {useRouter} from 'next/router'
import {AppsData} from '../../../utils/context/appDataContext'
import {findPerson} from '../../../utils/apis/api'
import Header from '../../../components/PersonDetail/Header'

export default function Person() {
  const router = useRouter()
  const {setActiveRoute} = useContext(AppsData)
  const [w, setWidth] = useState(0)
  const [data, setData] = useState({ isSet: false, data: {} })
  const [session, setSession] = useState({
    isSet: false,
    isTrue: false
  })
  
  useEffect(()=>{
    setActiveRoute('Person')
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    w === 0 ? setWidth(window.innerWidth) : null

    async function gData() {
      const path = window.location.pathname.split('/')
      let a = await findPerson(path[3])
      if(!a.details) {
        router.replace('/404', window.location.pathname)
      } else {
        if(!data.isSet) { setData({ isSet: true, data: a }) }
      }
    } gData()

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
        <title>Movie Box | Person</title>
        <link rel="icon" href="/image/favicon.ico" />

        <link rel="apple-touch-icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aiman Adlawan"/>
        <meta name="description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />

        <meta property="og:title" content="Movie Box - Person" />
        <meta property="og:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta property="og:image" content="/image/meta-logo.ico" />
        <meta property="og:url" content="https://movie-box-flame.vercel.app/" />

        <meta name="twitter:title" content="Movie Box - Person" />
        <meta name="twitter:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta name="twitter:image" content="/image/meta-logo.ico" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="main">
        { session.isSet ? 
        <> { session.isTrue ? <Intro /> : null }
          <Navbar onSearchPage={false}/>  


          {data.isSet ? 
            <Header 
              details={data.data.details}
              width={w}/> : null }


          <section className='item-details'>
            {data.isSet ? <ItemStats data={data.data.details}/> : null}
            {data.isSet ? <DetailMovies width={w} data={data.data.movies}/> : null}
          </section>
          

          {data.isSet ? 
            <Posters name={data.data.details.name}
              posters={data.data.posters}/> : null}
          <Footer quote={12}/>
        </> : null }
      </div>
    </div>
  )
}
