import React from 'react'
import Star from '../../components/Svgs/Svgs/Start'
import LinkBtn from '../Button/LinkButton'

function LandingHeader() {


  return (
    <div className='landing-header'>
      <div className="landing-backdrop">
        <img src="https://image.tmdb.org/t/p/original/qVygtf2vU15L2yKS4Ke44U4oMdD.jpg" alt=""/>
      </div>
      <div className="content-center landing-wrapper">
        <div className="landing-content-wrapper">
          <div className="content-center landing-description">
            <div className="content-center description-wrapper">
              <h1>The Legend of the Man in the Hills</h1>
              <p className='rating'>
                Rating &nbsp; 7.6 &nbsp; <Star />
              </p>
              <p className='short-desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis amet beatae at eligendi cumque, illo harum aperiam ipsam soluta quod facilis itaque.</p>
              
              <LinkBtn />
            </div>
          </div>
          <div className=" content-center landing-poster">
            <img src='https://image.tmdb.org/t/p/w300_and_h450_face/eAUzmhP54bE1vPXaY7FbuZREJlR.jpg' alt=""/>
          </div>
        </div>
      </div>      
    </div>
  )
}

export default LandingHeader
