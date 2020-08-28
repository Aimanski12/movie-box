import React, {useEffect, useContext} from 'react'
import ArrowLeft from '../Svgs/Svgs/Arrowleft'
import ArrowRight from '../Svgs/Svgs/Arrowright'
import {checkCurrent} from '../../utils/animation/mainheader/landing'
import {AppsData} from '../../utils/context/appDataContext'
import {setInitialOpacity} from '../../utils/animation/mainheader/landing'

function SwipeButton() {
  const {page, setHeaderNum} = useContext(AppsData)
  
  useEffect(() => {
    setInitialOpacity(page.landingHeader)
  })

  function getLength (direction){
    setHeaderNum( checkCurrent(direction, page.landingHeader) )
  }
  
  return (
    <div className="controls">
      <button 
        onClick={()=> getLength('next')}
        className="content-center next">
        <ArrowRight />
      </button>
      <button 
        onClick={()=> getLength('prev')}
        className="content-center prev">
        <ArrowLeft />
      </button>
    </div>
  )
}

export default SwipeButton
