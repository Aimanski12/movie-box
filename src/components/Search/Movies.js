import React, {Fragment} from 'react'
import Star from '../../components/Svgs/Svgs/Star'
import Link from 'next/link'
import {filterTitle, filterYear} from '../../utils/common/common'

function Movies(props) {
  let w = props.width

  let img = props.results.map((m, i) => { 
    return (
      <div className="movie" key={i}>
        <Link href='/[movies]/[movie]/[_id]' 
          as={`${props.link}/${m.id}`}>
          <img src={
            m.poster_path ? image(m.poster_path) : 
              m.profile_path ? image(m.profile_path) : '/image/backup-image.png'} 
            alt={`${'asdf'} poster`}/>
        </Link>

        { m.vote_average ? vote( m.vote_average) : m.vote_average === 0 ? 
          vote(m.vote_average) : null}

        <h2>{m.original_title ? name(m.original_title, w) :
           m.original_name ? name(m.original_name, w) : name(m.name, w)}</h2>

        { m.release_date ? date(m.release_date) : date(m.first_air_date)}

      </div>
    )
  })

  return (
    <Fragment>
      {img}
    </Fragment>
  )
}

export default Movies


function image(val) {
  return val !== null ? 
    `https://image.tmdb.org/t/p/w500${val}` : '/image/backup-image.png'
}

function name (val, width){
  return filterTitle(val, width)
}

function date (d) {
  let a;
  if(d === '' || d === undefined){
    a = 'TBA'
  } else {
    a = filterYear(d)
  }
  return (
    <div className="movie-date">
      <span>{a}</span>
    </div>
  )
}

function vote (val){
  return ( 
    <div className="movie-rating">
      <span>Rating</span>
      <span>{val} <Star /></span>
    </div>
  )
}