import React from 'react'
import Modal from './Modal'
import {filterDesc} from '../../utils/common/common'
import {useRouter} from 'next/router'

function Header(props) {
  const data = props.details
  const router = useRouter()
  
  console.log(data)

  return (
    <header className='detail-page-header'>
      <div className="img-backer">
        <img src={'/image/red-carpet.png'} 
          alt={`asdf backdrop`}/>
      </div>
      <div className="content-center detail-page-wrapper">
        <div className="back">
          <span 
            className='content-center link-btn' 
            onClick={()=>{router.back()}}>Go Back</span>
        </div>
        <div className="content-center detail-desc-wrapper">
          <div className="item-img-cont">
            <img src={`https://image.tmdb.org/t/p/original${data.profile_path}`}
              alt={`asdf poster`}/>
          </div>
          <div className="content-center item-decs-cont">
            <h1 className='name-label'>{data.name}</h1>
            <p className='rating'>Short Life Bio</p>
            <p className='short-desc'>
              {filterDesc(data.biography, props.width)}</p>
            <span 
              className='content-center link-btn'
              onClick={()=>{}}>View Full Bio</span>
          </div>
        </div>
      </div>

      <Modal />
    </header>
  )
}

export default Header
