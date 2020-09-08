import React from 'react'
import {quotes} from '../../../utils/common/quotes.json'

function FooterQuotes(props) {
  const selQuote = quotes.filter((q, i)=>{
    return i === props.quote
  })
  
  return (
    <div className="content-center quotes">
      <h3>{selQuote[0].quote}</h3>
      <span className='author'>- {selQuote[0].author} -</span>
    </div>
  )
}

export default FooterQuotes
