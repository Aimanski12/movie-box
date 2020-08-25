import React from 'react'
import ArrowLeft from '../Svgs/Svgs/Arrowleft'
import ArrowRight from '../Svgs/Svgs/Arrowright'

function SwipeButton() {
  return (
    <div className="controls">
      <button className="content-center next">
        <ArrowRight />
      </button>
      <button className="content-center prev">
        <ArrowLeft />
      </button>
    </div>
  )
}

export default SwipeButton
