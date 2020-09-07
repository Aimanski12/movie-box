import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import Navbar from '../../../components/Navbars/Navbars'
import ItemStats from '../../../components/PersonDetail/ItemStats'
import DetailMovies from '../../../components/PersonDetail/DetailImage'
import Posters from '../../../components/PersonDetail/Poster'
import Footer from '../../../components/Footer/Footer'
import {useRouter} from 'next/router'
import {AppsData} from '../../../utils/context/appDataContext'
import {findPerson} from '../../../utils/apis/api'
import Header from '../../../components/PersonDetail/Header'

export default function Person() {
  const router = useRouter()
  const {setActiveRoute} = useContext(AppsData)
  const [w, setWidth] = useState(0)
  const [data, setData] = useState({ isSet: false, data: {} })
  
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
  })
  
  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Person</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main">
        <Navbar 
          onSearchPage={false}/>  

      { data.isSet ? 
        <Header 
          details={data.data.details}
          width={w}/> : null }

        <section className='item-details'>
          {data.isSet ?
            <ItemStats data={data.data.details}/> : null}

          {data.isSet ? 
            <DetailMovies 
              width={w} data={data.data.movies}/> : null}
        </section>
        
        {data.isSet ? 
          <Posters 
            name={data.data.details.name}
            posters={data.data.posters}/> : null}
        <Footer />
      </div>



    </div>
  )
}
