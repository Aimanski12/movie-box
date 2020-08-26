import React, {useEffect} from 'react'
import ArrowLeft from '../Svgs/Svgs/Arrowleft'
import ArrowRight from '../Svgs/Svgs/Arrowright'
import {animSlide, onLoadAnim} from '../../utils/animation/mainheader/landing'

function SwipeButton(props) {
  useEffect(() => {
    window.onload = ()=>{
      onLoadAnim(props.length)
    }
  })
  
  return (
    <div className="controls">
      <button 
        onClick={()=>animSlide('next', props.length)}
        className="content-center next">
        <ArrowRight />
      </button>
      <button 
        onClick={()=>animSlide('prev', props.length)}
        className="content-center prev">
        <ArrowLeft />
      </button>
    </div>
  )
}

export default SwipeButton
