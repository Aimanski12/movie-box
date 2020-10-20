import React from 'react'
import links from '../../../utils/common/footerlinks.json'

function FooterLink() {
  let footerlinks = links.link.map((link, i) => {
    return (
      <span key={i}>
        <a href={link.link} 
          rel='noopener noreferrer' 
          target='_blank'>
          <img src={`/image/${link.img}.png`} alt={`small ${link.img} logo`}/>
        </a>
      </span>
    )
  })

  return (
    <div className="content-center footer-links">
      {footerlinks}
    </div>
  )
}

export default FooterLink
