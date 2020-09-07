import anime from 'animejs'

export function showmodal(w) {
  const pmodal = document.querySelector('.detail-modal')
  const modal = document.querySelector('.modal-p')

  pmodal.style.display = w > 968 ? 'flex' : 'block'
  modal.style.transform = 'translateY(-50px)'

  anime({
    targets: pmodal,
    duration: 300,
    opacity: 1,
    easing: 'linear'
  })
  anime({
    targets: modal,
    duration: 300,
    translateY: 0,
    easing: 'linear',
  })
}

export function hidemodal() {
  const pmodal = document.querySelector('.detail-modal')
  const modal = document.querySelector('.modal-p')

  anime({
    targets: pmodal,
    duration: 300,
    opacity: 0,
    easing: 'linear',
  })
  anime({
    targets: modal,
    duration: 300,
    translateY: '-50px',
    easing: 'linear',
    complete: function (anim) {
      pmodal.style.display = 'none'
    }
  })
}