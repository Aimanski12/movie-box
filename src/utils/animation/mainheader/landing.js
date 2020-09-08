import anime from 'animejs'

// animate function with 600 duration
function animate(el) {
  anime({
    targets: el,
    duration: 600,
    easing: 'easeInSine',
    zIndex: 6,
    opacity: 1
  })
}

// initital select of the header to show
export function setInitialOpacity (num) {
  const landing = document.querySelectorAll('.landing-header');
  for(let x = 0; x < landing.length; x++) {
    if(x === num) {
      animate(landing[num])
    } else {
      landing[x].style.opacity = 0
      landing[x].style.zIndex = 5
    }
  } 
}

// check for the current header is selected
export function checkCurrent (direction, current){
  let num
  const length = document.querySelectorAll('.landing-header').length - 1;
  if(direction === 'next') {
    current >= length ? num = 0 : num = current + 1
  } else {
    current === 0 ? num = length : num = current - 1
  }
  return num
}