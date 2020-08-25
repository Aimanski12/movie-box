import React, {useEffect, useContext} from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbars/Navbars'
import {useRouter} from 'next/router'
import {AppsData} from '../../../utils/context/appDataContext'

export default function Genre() {
  const {setActiveRoute} = useContext(AppsData)

  useEffect(()=>{
    setActiveRoute('Genre Indvl')
  })

  const router = useRouter()

  console.log(router.query)
  const genre = ['action', 'drama']
  if(router.query.genre !== undefined){

    if(router.query.genre !== 'action' && router.query.genre !== 'drama'){
      router.replace('/404', `/genre/${router.query.genre}`)
      // console.log('asdf')
    }
  }
  
  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Genre</title>
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
