import React from 'react'
import FooterQuotes from './Component/FooterQuotes'
import FooterNav from './Component/FooterNav'
import FooterLinks from './Component/FooterLink'

function Footer(props) {
  return (
    <footer className='content-center'>
      <FooterQuotes quote={props.quote}/>
      <FooterNav />
      <div className='content-center footer-desc'>
        <span>A project for fun, learning, and creativity.</span>
        <span>&#169; 
          <a href="https://aimanadlawan.com/"
            el='noopener noreferrer'
            target='_blank'> Aiman Adlawan</a> 2020.</span>
      </div>
      <FooterLinks />
    </footer>
  )
}
export default Footer
