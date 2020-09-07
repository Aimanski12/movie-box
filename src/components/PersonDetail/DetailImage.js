import React from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';
import Star from '../Svgs/Svgs/Star'
import {filterData, filterTitle, filterYear} from '../../utils/common/common'

function DetailsImg(props) {
  const mov = filterData(props.data.cast)
  // console.log(mov)  

  const movies = mov.map((m, i) => {
    return (
      <Fade key={i}>
        <div className="movie">
          <Link href='/[movies]/[movie]/[_id]' as={`/popular/movies/${m.id}`}>
            <img src={m.poster_path ? `https://image.tmdb.org/t/p/w500${m.poster_path}` : '/image/backup-image.png' }
              alt={`${m.title} poster`}/>
          </Link>
          <div className="movie-rating">
            <span>Rating</span>
            <span>{7.6} <Star/></span>
          </div>
          <h2>{filterTitle(m.title, props.width)}</h2>
          <div className="movie-date">
            <span>{filterYear(m.release_date)}</span>
          </div>
        </div> 
      </Fade> )
    })

  return (
    <div className="content-center item-img">
      <div className="item-img-wrapper">
        <div className="content-center person-header">
          <h1 className="name-label">{'Other Famous Movies'}</h1>
        </div>
        {movies}
      </div>
    </div>
  )
}

export default DetailsImg


