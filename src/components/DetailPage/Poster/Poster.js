import React from 'react'
import {filterData} from '../../../utils/common/common'

function Poster(props) {
  let posters = filterData(props.posters.posters)

  let img = posters.map((p, i) => {
    return(
      <div className="movie">
        <img src={`https://image.tmdb.org/t/p/w500${p.file_path}`} alt='' />
        <span className='download'>Download</span>
      </div>
    )
  })  

  return (
    <section className='content-center poster-wrapper'>
      <div className="poster-container">
        <div className="content-center person-header">
          <h1 className="name-label">Movie Posters</h1>
        </div>
        {img}
      </div>
    </section>
  )
}

export default Poster
