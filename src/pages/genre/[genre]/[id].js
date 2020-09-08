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

        <link rel="apple-touch-icon" href="/image/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Aiman Adlawan"/>
        <meta name="description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />

        <meta property="og:title" content="Movie Box - Movies by Genre" />
        <meta property="og:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta property="og:image" content="/image/favicon.ico" />
        <meta property="og:url" content="https://movie-box-flame.vercel.app/" />

        <meta name="twitter:title" content="Movie Box - Movies by Genre" />
        <meta name="twitter:description" content="This Movie Box website is developed by Aiman Adlawan that allows the visitor to search movies produced from all over the world." />
        <meta name="twitter:image" content="/image/favicon.ico" />
        <meta name="twitter:card" content="summary" />
      </Head>

      <div className="main page-padding">
        <Navbar 
          onSearchPage={false}/>  
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
        <Footer quote={14}/>
      </div>
    </div>
  )
}
