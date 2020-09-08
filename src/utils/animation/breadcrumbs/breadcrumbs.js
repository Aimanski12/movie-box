import anime from 'animejs'

export function animateBreadCrumbs (val) {
  const items = document.querySelectorAll('.items-cont-result')
  for (let x = 0; x < 3; x++){
    if(x === val) { 
      animate(items[x])
    } else {
      // items[x].classList.remove = 'item-open'
      items[x].style.display = 'none'
      items[x].style.opacity = 0
      items[x].style.zIndex = 0
    }
  }
}

function animate (el) {
  el.style.display = 'flex'

  anime({
    opacity: 1,
    zIndex: 200,
    duration: 300,
    easing: 'linear',
    targets: el
  })
}