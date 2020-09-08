import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbars/Navbars'
import Footer from '../../components/Footer/Footer'
import Pagination from '../../components/Pagination/Pagination'
import Person from '../../components/Person/main'
import {AppsData} from '../../utils/context/appDataContext'
import {scrollTop, spd, initData} from '../../utils/common/common'
import {getDataPage} from '../../utils/apis/api'

export default function People() {
  const {setActiveRoute} = useContext(AppsData)
  const [data, setData] = useState(initData)

  useEffect(()=>{
    setActiveRoute('People')
    if (!data.isSet) {
      async function gData() {
        let a = await getDataPage('/person/popular', 1)
        setData( spd(a.data, data) )
      }
      gData()
    }
  })
  
  async function getNewData(val) {
    let a = await getDataPage('/person/popular', val)
    setData( spd(a.data, data))
    scrollTop()
  }
  
  let people = Object.keys(data.data).length > 0 ?
                <Person data={data.data}/> : null

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | People</title>
        <link rel="icon" href="/image/favicon.ico" />

        <link rel="apple-touch-icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aiman Adlawan"/>
        <meta name="description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />

        <meta property="og:title" content="Movie Box - People" />
        <meta property="og:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta property="og:image" content="/image/favicon.ico" />
        <meta property="og:url" content="https://movie-box-flame.vercel.app/" />

        <meta name="twitter:title" content="Movie Box - People" />
        <meta name="twitter:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta name="twitter:image" content="/image/favicon.ico" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="main page-padding">
        <Navbar 
          onSearchPage={false}/>  
        {people}
        <Pagination 
          click={(val=>getNewData(val))}
          totalpages={data.totalpages} />
        <Footer quote={11}/>
      </div>
    </div>
  )
}