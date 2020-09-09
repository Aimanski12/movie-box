import React, {useState, createContext} from 'react'
import {setFirebase} from '../apis/firebase'
import route from '../common/routes.json'

export const AppsData = createContext()

export function AppsDataContext (props) {

  // routes state
  const [page, setRoutes] = useState({
    active: '',
    urls: route.routes,
    landingHeader: 0,
  })

  function setPageState (newState) {
    setRoutes({
      ...page,
      ...newState
    })
  }

  // update route state
  function setNewState (val) {
    if(val !== page.active){
      setFirebase(val)
      setPageState({
        active: val
      })
    }

  }

  function setPageHeader(val) {
    setPageState({
      landingHeader: val
    })
  }

  return(
    <AppsData.Provider value={{
      page,
      setActiveRoute: setNewState, 
      setHeaderNum: setPageHeader
    }}>
      {props.children}
    </AppsData.Provider>
  )
}

