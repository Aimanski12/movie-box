import React, {Fragment} from 'react'
import Movies from './Movies'
import Pagination from '../../components/Pagination/Pagination'

function SearchItems(props) {
  let data = props.data

  return (
    <div className={`content-center items-cont-result 
        ${props.cname ? props.cname : ''}`}>
        <div className="movie-list">
          { data.total_results > 0 ? 
            <Fragment>
              <Movies 
                width={props.width}
                link={props.link}
                results={data.results}/>
              {
                data.total_pages > 1 ? 
                <Pagination 
                  click={(val)=>{props.click(val)}} 
                  totalpages={data.total_pages} /> : null
              }
            </Fragment> :
            <div className="content-center no-item-result">
              <img src={`/image/${props.img}.svg`} alt={`${props.img} icon`}/>
              <span>{`No ${props.text} Found.`}</span>
            </div> }
      </div>
    </div>
    // dont forget to remove the content-center
  )
}

export default SearchItems
