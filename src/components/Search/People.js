import React, {Fragment} from 'react'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';
import Pagination from '../../components/Pagination/Pagination'
import {filterTitle} from '../../utils/common/common'

function main(props) {

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
          <h2>{filterTitle(r.name, props.width)}</h2>
        </div>
      </Fade>
    )
  })

let pagination = props.data.total_pages > 1 ? 
      <Pagination 
        click={(val)=>{props.click(val)}} 
        totalpages={props.total} /> 
        : null 


return (
    <div className='content-center items-cont-result'>
      <div className="movie-list">
        {
          props.data.total_results > 0 ? 
            <Fragment>
              {people}
              {pagination}</Fragment> : 

            <div className="content-center no-item-result">
              <img src={`/image/${props.img}.svg`} alt={`${props.img} icon`}/>
              <span>{`No ${props.text} Found.`}</span>
            </div>
        }
      </div>
    </div>
  )
}

export default main
