import React from 'react'
import Link from 'next/link'
import Star from '../../Svgs/Svgs/Star'
import {filterTitle, filterYear} from '../../../utils/common/common'

function Movies(props) {
  let img = props.poster === null ? '/image/backup-image.png' : 
    `https://image.tmdb.org/t/p/w500${props.poster}`

  return (
     <div className="movie">
      <Link 
        href='/[movies]/[movie]/[_id]' 
        as={`${props.link}/${props.id}`}>
        <img src={img} 
          alt={`${props.title} poster`}/>
      </Link>
      <div className="movie-rating">
        <span>Rating</span>
        <span>{props.votes} <Star /></span>
      </div>
      <h2>{filterTitle(props.title, props.width)}</h2>
      <div className="movie-date">
        <span>{props.date === '' ? 'TBA' : filterYear(props.date)}</span>
      </div>
    </div>
  )
}

export default Movies
