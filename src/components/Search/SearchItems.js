import React, {Fragment} from 'react'
import Star from '../../components/Svgs/Svgs/Star'
import Link from 'next/link'
import Pagination from '../../components/Pagination/Pagination'
import {filterTitle, filterYear} from '../../utils/common/common'


function SearchItems(props) {

  let img = <img src={`/image/${props.img}.svg`} alt=""/>

  return (
    <div className='content-center items-cont-result'>

      {

        props.result ? 
      
     
        <Fragment>

        
      <div className="movie-list">

        <div className="movie">
          <Link href='/[movies]/[movie]/[_id]' 
            as={`/`}>
            <img src={'https://image.tmdb.org/t/p/w500/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg'} 
              alt={`${'asdf'} poster`}/>
          </Link>
          <div className="movie-rating">
            <span>Rating</span>
            <span>{7.6} <Star /></span>
          </div>
          <h2>{filterTitle('Aimanski', props.width)}</h2>
          <div className="movie-date">
            <span>{'1982-20-60' === '' ? 'TBA' : filterYear('1982-20-60')}</span>
          </div>
        </div>

        {/* <div className="movie">
          <Link href='/[movies]/[movie]/[_id]' 
            as={`/`}>
            <img src={'https://image.tmdb.org/t/p/w500/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg'} 
              alt={`${'asdf'} poster`}/>
          </Link>
          <div className="movie-rating">
            <span>Rating</span>
            <span>{7.6} <Star /></span>
          </div>
          <h2>{filterTitle('Aimanski', props.width)}</h2>
          <div className="movie-date">
            <span>{'1982-20-60' === '' ? 'TBA' : filterYear('1982-20-60')}</span>
          </div>
        </div>

        <div className="movie">
          <Link href='/[movies]/[movie]/[_id]' 
            as={`/`}>
            <img src={'https://image.tmdb.org/t/p/w500/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg'} 
              alt={`${'asdf'} poster`}/>
          </Link>
          <div className="movie-rating">
            <span>Rating</span>
            <span>{7.6} <Star /></span>
          </div>
          <h2>{filterTitle('Aimanski', props.width)}</h2>
          <div className="movie-date">
            <span>{'1982-20-60' === '' ? 'TBA' : filterYear('1982-20-60')}</span>
          </div>
        </div>

        <div className="movie">
          <Link href='/[movies]/[movie]/[_id]' 
            as={`/`}>
            <img src={'https://image.tmdb.org/t/p/w500/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg'} 
              alt={`${'asdf'} poster`}/>
          </Link>
          <div className="movie-rating">
            <span>Rating</span>
            <span>{7.6} <Star /></span>
          </div>
          <h2>{filterTitle('Aimanski', props.width)}</h2>
          <div className="movie-date">
            <span>{'1982-20-60' === '' ? 'TBA' : filterYear('1982-20-60')}</span>
          </div>
        </div>

        <div className="movie">
          <Link href='/[movies]/[movie]/[_id]' 
            as={`/`}>
            <img src={'https://image.tmdb.org/t/p/w500/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg'} 
              alt={`${'asdf'} poster`}/>
          </Link>
          <div className="movie-rating">
            <span>Rating</span>
            <span>{7.6} <Star /></span>
          </div>
          <h2>{filterTitle('Aimanski', props.width)}</h2>
          <div className="movie-date">
            <span>{'1982-20-60' === '' ? 'TBA' : filterYear('1982-20-60')}</span>
          </div>
        </div>

        <div className="movie">
          <Link href='/[movies]/[movie]/[_id]' 
            as={`/`}>
            <img src={'https://image.tmdb.org/t/p/w500/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg'} 
              alt={`${'asdf'} poster`}/>
          </Link>
          <div className="movie-rating">
            <span>Rating</span>
            <span>{7.6} <Star /></span>
          </div>
          <h2>{filterTitle('Aimanski', props.width)}</h2>
          <div className="movie-date">
            <span>{'1982-20-60' === '' ? 'TBA' : filterYear('1982-20-60')}</span>
          </div>
        </div>

        <div className="movie">
          <Link href='/[movies]/[movie]/[_id]' 
            as={`/`}>
            <img src={'https://image.tmdb.org/t/p/w500/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg'} 
              alt={`${'asdf'} poster`}/>
          </Link>
          <div className="movie-rating">
            <span>Rating</span>
            <span>{7.6} <Star /></span>
          </div>
          <h2>{filterTitle('Aimanski', props.width)}</h2>
          <div className="movie-date">
            <span>{'1982-20-60' === '' ? 'TBA' : filterYear('1982-20-60')}</span>
          </div>
        </div>

        <div className="movie">
          <Link href='/[movies]/[movie]/[_id]' 
            as={`/`}>
            <img src={'https://image.tmdb.org/t/p/w500/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg'} 
              alt={`${'asdf'} poster`}/>
          </Link>
          <div className="movie-rating">
            <span>Rating</span>
            <span>{7.6} <Star /></span>
          </div>
          <h2>{filterTitle('Aimanski', props.width)}</h2>
          <div className="movie-date">
            <span>{'1982-20-60' === '' ? 'TBA' : filterYear('1982-20-60')}</span>
          </div>
        </div>

        <div className="movie">
          <Link href='/[movies]/[movie]/[_id]' 
            as={`/`}>
            <img src={'https://image.tmdb.org/t/p/w500/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg'} 
              alt={`${'asdf'} poster`}/>
          </Link>
          <div className="movie-rating">
            <span>Rating</span>
            <span>{7.6} <Star /></span>
          </div>
          <h2>{filterTitle('Aimanski', props.width)}</h2>
          <div className="movie-date">
            <span>{'1982-20-60' === '' ? 'TBA' : filterYear('1982-20-60')}</span>
          </div>
        </div>

        <div className="movie">
          <Link href='/[movies]/[movie]/[_id]' 
            as={`/`}>
            <img src={'https://image.tmdb.org/t/p/w500/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg'} 
              alt={`${'asdf'} poster`}/>
          </Link>
          <div className="movie-rating">
            <span>Rating</span>
            <span>{7.6} <Star /></span>
          </div>
          <h2>{filterTitle('Aimanski', props.width)}</h2>
          <div className="movie-date">
            <span>{'1982-20-60' === '' ? 'TBA' : filterYear('1982-20-60')}</span>
          </div>
        </div>

        <div className="movie">
          <Link href='/[movies]/[movie]/[_id]' 
            as={`/`}>
            <img src={'https://image.tmdb.org/t/p/w500/oyG9TL7FcRP4EZ9Vid6uKzwdndz.jpg'} 
              alt={`${'asdf'} poster`}/>
          </Link>
          <div className="movie-rating">
            <span>Rating</span>
            <span>{7.6} <Star /></span>
          </div>
          <h2>{filterTitle('Aimanski', props.width)}</h2>
          <div className="movie-date">
            <span>{'1982-20-60' === '' ? 'TBA' : filterYear('1982-20-60')}</span>
          </div>
        </div> */} 

      </div> 
      
      
       <Pagination 
        click={()=>{}}
        totalpages={100} />
      </Fragment>
      
      
      :
      
      <div className="content-center no-item-result">
        <img src={`/image/${props.img}.svg`} alt=""/>
        <span>{props.t}</span>
      </div> }

    </div>

    // dont forget to remove the content-center
  )
}

export default SearchItems
