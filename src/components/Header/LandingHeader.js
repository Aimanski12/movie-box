import React from 'react'
import Star from '../../components/Svgs/Svgs/Start'
import LinkBtn from '../Button/LinkButton'
import {filterText} from '../../utils/common/common'

function LandingHeader(props) {

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
                {filterText(props.data.overview, props.width)}</p>
              <LinkBtn />
            </div>
          </div>
          <div className="content-center landing-poster">
            <img 
              src={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`} 
              alt={`${props.data.title} poster cover`}/>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default LandingHeader
