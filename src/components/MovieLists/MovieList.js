import React, {useEffect, useState} from 'react'
import Header from './Components/Header'
import Movies from './Components/Movies'
import Pagination from '../Pagination/Pagination'

function MovieList(props) {

  const [w, setWidth] = useState(0)
  
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    w === 0 ? setWidth(window.innerWidth): null
  })


  let movies = props.data.map((d, i) => {
    return (
      <Movies 
        key={i}
        width={w}
        poster={d.poster_path}
        title={title(d, props.type)}
        votes={d.vote_average}
        date={date(d, props.type)} />
    )
  })

  
  return (
    <div className='content-center movielist-container'>
      <div className="movielist-wrapper">
        <Header 
          title={props.title}
          total={props.total} />

        <div className="movie-list">
          {movies}
        </div>

        <Pagination />

        {/* <div className='view-btn'>  
          <Link href='/'>
            <a className='content-center link-btn'>{`View All ${props.title}`}</a>
          </Link>          
        </div> */}

      </div>
    </div>
  )
}

export default MovieList


function title (d, prop) {
  if(prop === 'movie') {
    return d.title
  } else if (prop === 'tv-show') {
    return d.name
  } else if (prop === 'trending') {
    return d.title ? d.title : d.name
  }
}

function date(d, prop) {
  if (prop === 'movie') {
    return d.release_date
  } else if(prop === 'tv-show'){
    return d.first_air_date
  } else if (prop === 'trending') {
    return d.release_date ? d.release_date : d.first_air_date
  }
}