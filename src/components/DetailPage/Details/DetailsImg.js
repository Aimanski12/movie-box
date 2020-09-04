import React from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';
import {filterData, filterTitle} from '../../../utils/common/common'

function DetailsImg(props) {
  let data = filterData(props.cast.cast)

  let cast = data.map((d, i) => {
    return (
      <Fade key={i}>
        <div className="person">
          <Link href='/' as='/'>
            <img src={d.profile_path === null ? '/image/backup-image.png' : `https://image.tmdb.org/t/p/w500${d.profile_path}`}  alt={`${d.name} poster`}/>
          </Link>
          <h2>{filterTitle(d.name, props.width)}</h2>
          <span className='mName'>{filterTitle(d.character, props.width)}</span>
        </div>
      </Fade>)
  })



  return (
    <div className="content-center item-img">
      <div className="item-img-wrapper">


        <div className="content-center person-header">
          <h1 className="name-label">Movie Casts</h1>
        </div>
        {cast}


      </div>
    </div>
  )
}

export default DetailsImg


