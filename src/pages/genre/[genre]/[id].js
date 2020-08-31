  // const api = 'f79c1f33b89b8f1e137114c46a4df913'
  // let url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=en-US`

  // const genre = ['action', 'drama']
  // if(router.query.genre !== undefined){

  //   if(router.query.genre !== 'action' && router.query.genre !== 'drama'){
  //     router.replace('/404', `/genre/${router.query.genre}`)
  //     // console.log('asdf')
  //   }
  // }
  

import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import Navbar from '../../../components/Navbars/Navbars'
import MovieList from '../../../components/MovieLists/MovieList'
import Footer from '../../../components/Footer/Footer'
import Pagination from '../../../components/Pagination/Pagination'
import {useRouter} from 'next/router'
import {AppsData} from '../../../utils/context/appDataContext'
import {scrollTop} from '../../../utils/common/common'
import {findGenre} from '../../../utils/apis/api'
import {checkifvalid, findTitle} from '../../../utils/common/genreId'

import axios from 'axios'

export default function Genre() {
  const router = useRouter()
  const {setActiveRoute} = useContext(AppsData)
  const [data, setData] = useState({
    isSet: false,
    data: {},
    genre: 28,
    totalpages: 10
  })
  
  useEffect(()=>{
    setActiveRoute('Genre Indvl')
    let valid, url;
    
    if(Object.keys(router.query).length > 0) {
      url = router.query
      valid = checkifvalid(router.query)
    } else {
      let r = window.location.pathname.split('/')
      url = { genre: r[2], id: r[3] }
      if(r[1] === 'genre') {
        valid = checkifvalid(url)
      } else {
        valid = false
      }
    }
    
    if(valid) {
      if(!data.isSet) {
        async function gData (){
          let a = await findGenre(url.id, 1)
          setPageData(a.data, url.id)
        }
        gData()
      }  
    } else {
      router.replace('/404', window.location.pathname)
    }

    

  },[])

  function setPageData (val, id) {
    setData({
      ...data,
      isSet: true,
      data: val,
      genre: id,
      totalpages: val.total_pages
    })
  }

  async function getNewData(val){
    let a = await findGenre(data.genre, val)
    setPageData(a.data, data.genre)
    scrollTop()
  } 

  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Movies by Genre</title>
        <link rel="icon" href="/image/favicon.ico" />
      </Head>

      <div className="main page-padding">
        <Navbar />  
        { Object.keys(data.data).length !== 0 ? 
            <MovieList 
              viewBtn={false}
              hlink='/popular'
              aslink='/popular'
              type='movie'
              title={`${findTitle(data.genre)} ${data.genre === '10770' ? '' : 'Movies'}`}
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
