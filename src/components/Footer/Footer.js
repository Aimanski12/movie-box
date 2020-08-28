import React from 'react'
import FooterQuotes from './Component/FooterQuotes'
import FooterNav from './Component/FooterNav'
import FooterLinks from './Component/FooterLink'

function Footer() {
  return (
    <footer className='content-center'>

      <FooterQuotes />


      <FooterNav />

      <div className='content-center footer-desc'>
        <span>A project for fun, learning, and creativity.</span>
        <span>
          <a href="https://github.com/Aimanski12/movie-box"
            el='noopener noreferrer'
            target='_blank'>View source code</a>
        </span>
        <span>&#169; Aiman Adlawan 2020.</span>
      </div>

      <FooterLinks />

    </footer>
  )
}
export default Footer
