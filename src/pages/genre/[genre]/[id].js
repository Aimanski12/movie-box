import React, {useEffect, useContext, useState} from 'react'
import Head from 'next/head'
import Navbar from '../../../components/Navbars/Navbars'
import MovieList from '../../../components/MovieLists/MovieList'
import Footer from '../../../components/Footer/Footer'
import Pagination from '../../../components/Pagination/Pagination'
import {useRouter} from 'next/router'
import {AppsData} from '../../../utils/context/appDataContext'
import {scrollTop, initData} from '../../../utils/common/common'
import {findGenre} from '../../../utils/apis/api'
import {checkifvalid, findTitle} from '../../../utils/common/genreId'

export default function Genre() {
  const router = useRouter()
  const {setActiveRoute} = useContext(AppsData)
  const [data, setData] = useState(initData)
  
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
          setPageData(a.data, url.id, url.genre)
        }
        gData()
      }  
    } else {
      router.replace('/404', window.location.pathname)
    }

  },[])

  function setPageData (val, id, link) {
    setData({
      ...data,
      isSet: true,
      data: val,
      genre: id,
      link,
      totalpages: val.total_pages
    })
  }

  async function getNewData(val){
    let a = await findGenre(data.genre, val)
    setPageData(a.data, data.genre, data.link)
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
              link={`/genre/${data.link}`}
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
