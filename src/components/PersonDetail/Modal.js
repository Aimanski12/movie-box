import React from 'react'
import {hidemodal} from '../../utils/animation/detail/personmodal'

function Modal(props) {

return (
  <div className="content-center detail-modal person-bio-modal">
    <div className="content-center modal-p">
      <span>{props.bio === '' ? 'No biography given' : props.bio}</span>
      <button onClick={hidemodal}>Ok</button>
    </div>
  </div> )
}

export default Modal
