import anime from 'animejs'
import next from 'next';

let current = 0
let timer;

// function to filter the anmation if left or right
function slide(direction, length) {
  const landing = document.querySelectorAll('.landing-header');
  if(direction === 'prev'){
    landing[current].style.opacity = 0
    landing[current].style.zIndex = 5
    current === 0 ? current = length-1 : current -= 1
    animate(landing[current])
  } else {
    landing[current].style.opacity = 0
    landing[current].style.zIndex = 5
    current === length-1 ? current= 0 : current += 1
    animate(landing[current])
  }
}

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

// function to run on load
export function onLoadAnim(length) {
  timer = setInterval(()=>{
    slide('next', length)
  }, 10000)
}

// function to run when the button is clicked
export function animSlide(direction, length) {
  clearInterval(timer)
  slide(direction, length)
    
  // setTimeout(()=>{
    timer = setInterval(() => {
      console.log('interval')
      slide('next', length)
    }, 10000)
  // }, 5000)
}
