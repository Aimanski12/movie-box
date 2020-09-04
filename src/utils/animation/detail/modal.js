import anime from 'animejs'
import {modalEl} from '../../common/common'


export function showmodal() {
  const el = modalEl()
  el.modal.style.display = 'flex'
  el.vid.style.transform = 'translateY(-50px)'

  anime({
    targets: el.modal,
    duration: 300,
    opacity: 1,
    easing: 'linear'
  })
  anime({
    targets: el.vid,
    duration: 300,
    translateY: 0,
    easing: 'linear',
    complete: function (anim) {
      if(el.hasVid) {
        el.vid.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*')
      }
    }
  })
}

export function hidemodal() {
  const el = modalEl()
  anime({
    targets: el.modal,
    duration: 300,
    opacity: 0,
    easing: 'linear',
    complete: function (anim) {
      if(el.hasVid){
        el.vid.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*')
      }
    }
  })
  anime({
    targets: el.vid,
    duration: 300,
    translateY: '-50px',
    easing: 'linear',
    complete: function (anim) {
        el.modal.style.display = 'none'
      }
  })
}