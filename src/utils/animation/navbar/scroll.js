
export function scroll() {
  const w = window.innerWidth
  const navbar = document.querySelector('.top-nav') 
  const scrollY = window.scrollY
  if(w > 968) {
    if (scrollY > 300) {
      navbar.classList.remove('fade')
    } else if (scrollY >= 80){
      navbar.classList.add('fade')
    } else if(scrollY < 80){
      navbar.classList.remove('fade')
    }
  }
}