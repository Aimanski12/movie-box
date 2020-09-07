import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';
import {addComma, filterTitle} from '../../utils/common/common'

function main(props) {
  const [w, setWidth] = useState(0)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    w === 0 ? setWidth(window.innerWidth) : null
  })

  let data = props.data.results
  let people = data.map((r, i) => {
    return (
      <Fade key={i}>
        <div className="person">
          <Link 
            href='/people/person/[_id]' 
            as={`/people/person/${r.id}`}>
            <img 
              src={r.profile_path === null ? '/image/backup-image.png' : `https://image.tmdb.org/t/p/w500${r.profile_path}`} 
              alt={r.profile_path === null ? 'back-up poster' : `${r.name} poster`}/>
          </Link>
          <h2>{filterTitle(r.name, w)}</h2>
        </div>
      </Fade>
    )
  })

  return (
    <div className='content-center personlist-container'>
      <div className="personlist-wrapper">

        <div className="content-center person-header">
          <h1 className="name-label">People</h1>
          <Link href={'/people'} as={'/people'}>
            <span>{addComma(props.data.total_results)}</span>
          </Link>
        </div>
        {people}
      </div>
    </div>
  )
}

export default main
