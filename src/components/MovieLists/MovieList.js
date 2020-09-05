import React, {useEffect, useState} from 'react'
import Header from './Components/Header'
import Movies from './Components/Movies'
import ViewBtn from './Components/ViewBtn'
import {findPoster} from '../../utils/common/common'

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
        id={d.id}
        link={d.media_type ? '/tv-shows/popular' : props.link}
        poster={findPoster(d)}
        title={d.title ? d.title : d.name}
        votes={d.vote_average}
        date={d.release_date ? d.release_date : 
            d.first_air_date ? d.first_air_date : ''} />
    )
  })
  
  return (
    <div className='content-center movielist-container'>
      <div className="movielist-wrapper">
        <Header 
          hlink={props.hlink}
          aslink={props.aslink}
          title={props.title}
          total={props.total} />

        <div className="movie-list">
          {movies}
        </div>

        {props.viewBtn ? 
          <ViewBtn 
            title={props.title}
            hlink={props.hlink}
            aslink={props.aslink} /> : null }
      </div>
    </div>
  )
}

export default MovieList

