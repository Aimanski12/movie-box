import React, {useState, useEffect} from 'react'
import Star from '../../Svgs/Svgs/Star'
import {showmodal} from '../../../utils/animation/detail/modal'
import {filterDesc} from '../../../utils/common/common'
import Video from './Video'
import {useRouter} from 'next/router'

function Header(props) {
  const router = useRouter()
  let data = props.desc
      
  return (
    <header className='detail-page-header'>
      <div className="img-backer">
        <img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} 
          alt={`${data.title} backdrop`}/>
      </div>
      <div className="content-center detail-page-wrapper">
        <div className="back">
          <span 
            className='content-center link-btn' 
            onClick={()=>{router.back()}}>Go Back</span>
        </div>
        <div className="content-center detail-desc-wrapper">
          <div className="item-img-cont">
            <img src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} alt=""/>
          </div>
          <div className="content-center item-decs-cont">
            <h1 className='name-label'>{data.title}</h1>
            <p className='rating'>
              Rating &nbsp; {data.vote_average} &nbsp; <Star />
            </p>
            <p className='short-desc'>
              {filterDesc(data.overview, props.width)}</p>
            <span 
              className='content-center link-btn'
              onClick={showmodal}>Watch Trailer</span>
          </div>
        </div>
      </div>

      <Video video={props.video}/>
    </header>
  )
}

export default Header

