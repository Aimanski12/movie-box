import React from 'react'
import Star from '../../components/Svgs/Svgs/Star'
import {filterDesc} from '../../utils/common/common'
import Link from 'next/link'

function LandingHeader(props) {
  let img = props.poster === null ? '/image/backup-image.png' :
    `https://image.tmdb.org/t/p/w500${props.data.poster_path}`

  return (
    <div className='landing-header'>
      <div className="landing-backdrop">
        <img 
          src={`https://image.tmdb.org/t/p/original${props.data.backdrop_path}`} 
          alt={`${props.data.title} back-drop cover`}/>
      </div>
      <div className="content-center landing-wrapper">
        <div className="landing-content-wrapper">
          <div className="content-center landing-description">
            <div className="content-center description-wrapper">
              <h1 className='name-label'>{props.data.title}</h1>
              <p className='rating'>
                Rating &nbsp; {props.data.vote_average} &nbsp; <Star />
              </p>
              <p className='short-desc'>
                {filterDesc(props.data.overview, props.width)}</p>
              <Link 
                href='/[movies]/[movie]/[_id]' 
                as={`/popular/movies/${props.data.id}`}>
                <a className='content-center link-btn'>View More</a>
              </Link>
            </div>
          </div>
          <div className="content-center landing-poster">
            <img 
              src={img} 
              alt={`${props.data.title} poster cover`}/>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default LandingHeader
