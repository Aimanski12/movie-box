import anime from 'animejs'

// hover on the discover menu event 
export function enter () {
  anim(1, '135px')
}

// hoverout on the discover ment event
export function leave () {
  anim(0, '65px')
}

// function to animate when discover menu is hovered
function anim (op, h) {
  const w = window.innerWidth
  const submenu = document.querySelector('.sub-list')
  const lists = document.querySelectorAll('.sub-list li')
  op === 1 ? submenu.style.display = 'block' : null

  if(w <= 968) return 

  anime({
    targets: lists,
    opacity: op,
    duration: 200,
    easing: 'easeInSine'
  })
  anime({
    targets: submenu,
    opacity: op,
    height: h,
    duration: 200,
    easing: 'easeInSine',
  })
}

// function to run when the search burger bar is clicked
export function showlist (el) {
  const mainList = document.querySelector('.main-list')
  const searchForm = document.querySelector('.search-form')
  if(el === 'list'){
    setMain()
    animbar('100vh', mainList, searchForm)
  } else {
    animbar(70, searchForm, mainList)
  }
}


function setMain(){
  const main = document.querySelector('.main')
  const mainlist = document.querySelector('.main-list')
  const height = mainlist.offsetHeight
  const w = window.innerWidth
  const h = window.innerHeight

  if(height === 0){
    main.style.overflow = 'hidden'
    mainlist.overflowY = 'visible'

    // check if landscape or portrait
    if(w < 896) {
      if(w > h){
        main.style.height = '100vh'
      }
    }
  } else {
    main.style.overflow = 'visible'
    mainlist.overflowY = 'hidden'
    
    // check if landscape or portrait
    if (w < 896) {
      if (w > h) {
        main.style.height = '720px'
      }
    }
  }
}

function animbar (h, first, second) {
  const height = first.offsetHeight
  close(second)
  if(height === 0) {
    animlist(h, first)
  } else {
    animlist(0, first)
  } 
}

function animlist (h, el){
  anime({
    targets: el,
    duration: 250,
    easing: 'easeInOutQuart',
    height: h
  })
} 

function close(el){
  const height = el.offsetHeight
  if(height > 50) animlist(0, el)
}
