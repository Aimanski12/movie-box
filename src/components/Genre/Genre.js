import React from 'react'
import genre from '../../utils/common/genre.json'
import Link from 'next/link'

function Genre() {

  let genres = genre.genre.map((g, i) => {
    return (
      <figure key={i}>
        <Link href={'/genre/[genre]/[id]'} as={`/genre/${g.link}/${g.id}`}>
          <a>
            <span className='genre-label'>{g.name}</span>
            <span className="genre-img">
              <img src={`/image/${g.img}.png`} alt={`${g.name} poster`}/>
            </span>
          </a>
        </Link>
      </figure>
    )
  })

  return (
    <header className='content-center genre-header'>
      <div className="genre-wrapper">
        <h1 className='name-label'>Genre</h1>
        <div className="genre-list">
          {genres}
        </div>
      </div>
    </header>
  )
}

export default Genre

