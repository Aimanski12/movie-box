import React from 'react'
import {filterData, download} from '../../utils/common/common'

function Poster(props) {

  let posters = filterData(props.posters.profiles)
  let img = posters.map((p, i) => {
    return(
      <div className="movie" key={i}>
        <img src={`https://image.tmdb.org/t/p/w500${p.file_path}`} 
          alt='movie poster'/>
        <span
          onClick={()=>download(
            `https://image.tmdb.org/t/p/w500${p.file_path}`, props.name)} 
          className='download'>Download</span>
      </div>
    )
  })  

  return (
    <section className='content-center poster-wrapper'>
      <div className="poster-container">
        <div className="content-center person-header">
          <h1 className="name-label">{
            posters.length > 0 ? 'Posters': 'No available posters'
            }</h1>
        </div>
        {posters.length > 0 ? img : null}
      </div>
    </section>
  )
}

export default Poster
