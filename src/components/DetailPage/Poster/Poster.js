import React from 'react'
import axios from 'axios'
import {filterData} from '../../../utils/common/common'

function Poster(props) {
  let posters = filterData(props.posters.posters)

  let img = posters.map((p, i) => {
    return(
      <div className="movie" key={i}>
        <img src={`https://image.tmdb.org/t/p/w500${p.file_path}`} 
          alt='movie poster'/>
        <span
          onClick={()=>download(`https://image.tmdb.org/t/p/w500${p.file_path}`, props.title)} 
          className='download'>Download</span>
      </div>
    )
  })  

  return (
    <section className='content-center poster-wrapper'>
      <div className="poster-container">
        <div className="content-center person-header">
          <h1 className="name-label">{
            posters.length > 0 ? 'Movie Posters': 'No available posters'}</h1>
        </div>
        {posters.length > 0 ? img : null}
      </div>
    </section>
  )
}

export default Poster


function download(l, title){
  axios({
    url: l, //your url
    method: 'GET',
    responseType: 'blob', // important
  }).then((response) => {
    const url = window.URL.createObjectURL(new Blob([response.data]));
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${title}.jpg`); //or any other extension
    document.body.appendChild(link);
    link.click();
  });
}