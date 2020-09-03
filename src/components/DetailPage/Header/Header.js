import React, {useState, useEffect} from 'react'
import Star from '../../Svgs/Svgs/Star'
import {showmodal, hidemodal} from '../../../utils/animation/detail/modal'
import {filterDesc} from '../../../utils/common/common'

function Header() {
   const [w, setWidth] = useState(0)

   useEffect(() => {
     window.addEventListener('resize', () => setWidth(window.innerWidth))
     w === 0 ? setWidth(window.innerWidth) : null
  })
      
  return (
    <header className='detail-page-header'>
      <div className="img-backer">
        <img src="https://image.tmdb.org/t/p/original/gQa5l8NrPHQzoqLeideAzuPMZQj.jpg" alt=""/>
      </div>
      <div className="content-center detail-page-wrapper">
        <div className="back">
          <span className='content-center link-btn' onClick={()=>{}}>Go Back</span>
        </div>
        <div className="content-center detail-desc-wrapper">
          <div className="item-img-cont">
            <img src="https://image.tmdb.org/t/p/w500/oB3LX9C3FbJvPtrk1J7qHQKvzLr.jpg" alt=""/>
          </div>
          <div className="content-center item-decs-cont">
              <h1 className='name-label'>The Bay of Silence</h1>
              <p className='rating'>
                Rating &nbsp; {7.6} &nbsp; <Star />
              </p>
              <p className='short-desc'>
                {filterDesc(t, w)}</p>
              <span 
                className='content-center link-btn'
                onClick={showmodal}>Watch Trailer</span>
          </div>
        </div>
      </div>

      <div 
        className="content-center detail-modal"
        onClick={hidemodal}>
        <iframe 
          dth="560" 
          height="315" 
          rel={0}
          src="https://www.youtube.com/embed/gg17hcxi7EU?enablejsapi=1&version=3&playerapiid=ytplayer" 
          frameBorder="0" 
          allow="accelerometer; autoplay; gyroscope" allowFullScreen></iframe>
      </div>
    </header>
  )
}

export default Header


const t = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi doloribus blanditiis quis quo possimus velit recusandae labore vel eligendi! Quibusdam quidem blanditiis ducimus reprehenderit corrupti voluptas delectus ut nemo est dolore nihil mollitia fuga iste ipsum, totam, dicta vitae nulla nobis saepe reiciendis incidunt. Distinctio asperiores nesciunt cupiditate consectetur autem! one two three four five six seven eight nine ten eleven twelve thirteen'