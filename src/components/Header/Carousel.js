import React, {useEffect, useState} from 'react'
import SwipeButton from '../Button/SwipeButton'
import LandingHeader from './LandingHeader'

function HeaderCarousel(props) {
  const [w, setWidth] = useState(0)
  
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    w === 0 ? setWidth(window.innerWidth): null
  })


  let hero = props.data.results.map((result, i)=> {
    // console.log(result)
    return (
      <LandingHeader
        width={w}
        key={i}
        data={result} /> )
  })

  return (
    <header className="header">
      <div className="carousel">
        <div className="slider">
          {hero}
        </div>
        <SwipeButton />
      </div>
    </header>
  )
}

export default HeaderCarousel
