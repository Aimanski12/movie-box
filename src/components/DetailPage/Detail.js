import React, {Fragment} from 'react'
import Header from './Header/Header'
import DetailImage from './Details/DetailsImg'
import ItemStats from './ItemStats/ItemStats'
import Poster from './Poster/Poster'

function Movie() {
  return (
    <Fragment>  
      <Header />
      <section className='item-details'>
        <ItemStats />
        <DetailImage />
      </section>
      <Poster />
    </Fragment>
  )
}

export default Movie
