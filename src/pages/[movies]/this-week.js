import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import Navbar from '../../components/Navbars/Navbars'
import MovieList from '../../components/MovieLists/MovieList'
import Footer from '../../components/Footer/Footer'
import Pagination from '../../components/Pagination/Pagination'
import {AppsData} from '../../utils/context/appDataContext'
import {scrollTop} from '../../utils/common/common'
import {getDataPage} from '../../utils/apis/api'

export default function ThisWeek() {
  const {setActiveRoute} = useContext(AppsData)
  const [data, setData] = useState({
    isSet: false,
    data: {},
    totalpages: 10
  })

  useEffect(()=>{
    setActiveRoute('This Week')
    if(!data.isSet) {
      async function gData (){
        let a = await getDataPage('/trending/all/week', 1)
        setPageData(a.data)
      }
      gData()
    } 
  },[])

  function setPageData (val) {
    setData({
      ...data,
      isSet: true,
      data: val,
      totalpages: val.total_pages
    })
  }

  async function getNewData(val){
    let a = await getDataPage('/trending/all/week', val)
    console.log(a.data)
    setPageData(a.data)
    scrollTop()
  } 

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Trending - Week</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding">
        <Navbar />  
        { Object.keys(data.data).length !== 0 ? 
            <MovieList 
              viewBtn={false}
              hlink='/[movies]/this-week'
              aslink='/trending/this-week'
              type='movie'
              title={'Trending Week'}
              total={data.data.total_results}
              data={data.data.results}/> : null
        }
        <Pagination 
          click={(val=>getNewData(val))}
          totalpages={data.totalpages} />
        <Footer />
      </div>
    </div>
  )
}

