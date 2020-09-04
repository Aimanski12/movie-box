import React from 'react'
import {hidemodal} from '../../../utils/animation/detail/modal'

function Video(props) {
  let data = props.video.results

  let modal = data.length > 0 ? 
    <iframe 
      dth="560" height="315" rel={0}
      src={`https://www.youtube.com/embed/${data[0].key}?enablejsapi=1&version=3&playerapiid=ytplayer`}
      frameBorder="0" 
      allow="accelerometer; autoplay; gyroscope" 
      allowFullScreen></iframe> : 
        <div className="content-center modal">
          <span>Sorry, no trailer is available for this movie.</span>
          <button onClick={()=>{}}>Ok</button>
        </div>

return (
    <div 
      className="content-center detail-modal"
      onClick={hidemodal}>
        {modal}
    </div>
  )
}

export default Video
