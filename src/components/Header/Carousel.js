import React, {useEffect} from 'react'
import SwipeButton from '../Button/SwipeButton'
import LandingHeader from './LandingHeader'
import axios from 'axios'

function HeaderCarousel() {

  useEffect(()=>{
    // const carousel = document.querySelector('.carousel');
    // const slider = document.querySelector('.slider');

    // const next = document.querySelector('.next');
    // const prev = document.querySelector('.prev');
    // let direction;``

    // next.addEventListener('click', function () {
    //   direction = -1;
    //   carousel.style.justifyContent = 'flex-start';
    //   slider.style.transform = 'translate(-20%)';
    // });

    // prev.addEventListener('click', function () {
    //   if (direction === -1) {
    //     direction = 1;
    //     slider.appendChild(slider.firstElementChild);
    //   }
    //   carousel.style.justifyContent = 'flex-end';
    //   slider.style.transform = 'translate(20%)';

    // });

    // slider.addEventListener('transitionend', function () {
    //   // get the last element and append it to the front

    //   if (direction === 1) {
    //     slider.prepend(slider.lastElementChild);
    //   } else {
    //     slider.appendChild(slider.firstElementChild);
    //   }

    //   slider.style.transition = 'none';
    //   slider.style.transform = 'translate(0)';
    //   setTimeout(() => {
    //     slider.style.transition = 'all 0.5s';
    //   })
    // }, false);
  })

  return (
    <header className="header">
      <div className="carousel">
        <div className="slider">
          <LandingHeader />
          <section>Content section 1</section>
          <section>Content section 2</section>
          <section>Content section 3</section>
          <section>Content section 4</section>
        </div>

        <SwipeButton />
        
      
      </div>
    </header>
  )
}

export default HeaderCarousel
