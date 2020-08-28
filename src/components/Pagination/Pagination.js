import React, {useState} from "react";
import ReactPaginate from "react-paginate";
// require("bootstrap/scss/bootstrap.scss");

function PageNum() {
  const {state, setActivePage} = useState({
    // offset: 0,
    // data: [],
    // perPage: 5,
    // pageCounts: 100,
    currentPage: 0
  })

  function handlePageClick (e) {
    const selectedPage = e.selected;

    setActiveState({
      ...state,
      offset: offset
    });
  }

  return (
    <div className='content-center display-pagination'>
      <ReactPaginate
        pageCount={1000}
        previousLabel={"prev"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        marginPagesDisplayed={1}
        pageRangeDisplayed={2}
        onPageChange={()=>handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"} />

    </div>
  )
}

export default PageNum
