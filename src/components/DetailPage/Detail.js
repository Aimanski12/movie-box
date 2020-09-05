import React, {Fragment, useState, useEffect} from 'react'
import Header from './Header/Header'
import DetailImage from './Details/DetailsImg'
import ItemStats from './ItemStats/ItemStats'
import MovieList from '../../components/MovieLists/MovieList'
import {filterData} from '../../utils/common/common'
import Poster from './Poster/Poster'

function Movie(props) {
  let data = props.data
  const [w, setWidth] = useState(0)
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
    w === 0 ? setWidth(window.innerWidth) : null
  })

  return (
    <Fragment>  
      { data.details ? 
        <Header desc={data.details}
          width={w}
          video={data.video}/> : null}

      <section className='item-details'>
        { data.details ? 
          <ItemStats 
            data={data.details} /> : null }


        { data.cast ? 
          <DetailImage 
            width={w}
            cast={data.cast}/> : null}

      </section>

      {data.posters ? 
        <Poster 
          title={data.details.title ? data.details.title : data.details.name}
          posters={data.posters}/> : null }
    
    
      
    </Fragment>
  )
}

export default Movie
