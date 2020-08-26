import React from 'react'
import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'
import HeaderCarousel from '../components/Header/Carousel'
import {homeDataPage} from '../utils/apis/api'

export default function Home({data}) {

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <Navbar />  
        <HeaderCarousel 
          data={data.popular}/>

      <div className="div2"></div>
      </div>
    </div>
  )
}

Home.getInitialProps = async () => {
  const data = await homeDataPage()
  return {data}
}