import React, {useContext} from 'react'
import Link from 'next/link'
import {enter, leave} from '../../../utils/animation/navbar/showSubmenu'
import {AppsData} from '../../../utils/context/appDataContext'

function Menulistbar() {
  const {routes} = useContext(AppsData)

  // return link tags
  const alink = (url) => {
    return (
      <Link href={url.href} as={url.href}>
        <a className={url.name === routes.active ? 'active' : null}>{url.name}</a>
      </Link>
    )
  }
  
  // sub urls
  const suburls = (urls, classname) =>{
    return (
      urls.map((url, i) =>{
        return (
          <li 
            key={i}
            className={classname === 'hide' ? 'hide' : null}>
              {alink(url)}</li>)
      }) 
    )
  }
  
  // main menu url links
  const urls = routes.urls.map((url, i) => {
    if(url.name === 'Discover') {
      return ( 
        <li 
          onMouseEnter={enter}
          onMouseLeave={leave}
          key={i}>
            {alink(url)}
            <ul className='sub-list'>
              {suburls(url.routes)}
            </ul>
        </li> ) 
    } else if (url.name === 'Hide'){
      return suburls(url.routes, 'hide')
    } else {
      return ( 
        <li key={i}> {alink(url, routes.active)} </li> )
    }
  })

  return (
    <ul className='main-list'>
      {urls}
    </ul>
  )
}

export default Menulistbar
