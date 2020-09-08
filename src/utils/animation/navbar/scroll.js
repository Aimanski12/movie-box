
// animation for the navbar when it is scrolled
export function scroll() {
  const w = window.innerWidth
  const navbar = document.querySelector('.top-nav') 
  const scrollY = window.scrollY
  if(w > 968) {
    if (scrollY > 300) {
      navbar.classList.remove('fade')
      navbar.style.background = '#161E39'
    } else if (scrollY >= 80){
      navbar.style.background = ''
      navbar.classList.add('fade')
    } else if(scrollY < 80){
      navbar.style.background = ''
      navbar.classList.remove('fade')
    }
  }
}