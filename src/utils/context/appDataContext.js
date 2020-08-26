import React, {useState, createContext} from 'react'
import route from '../common/routes.json'

export const AppsData = createContext()

export function AppsDataContext (props) {

  // routes state
  const [routes, setRoutes] = useState({
    active: 'Home',
    urls: route.routes
  })

  // page data state
  const [pageData, setPageData] = useState({
    isSet: false,
    data: {}
  })

  // update route state
  function setNewState (val) {
    if(val !== routes.active){
      setRoutes({
        ...routes, 
        active: val
      })
    }
  }

  // set the page date state
  function setData (val) {
    if(!pageData.isSet) {
      setPageData({
        isSet: true,
        data: val
      })
    }
  }

  // set the page date state to off 
  function setOffData () {
    if (pageData.isSet) {
      setPageData({
        ...pageData,
        isSet: false,
      })
    }
  }

  return(
    <AppsData.Provider value={{
      routes,
      setActiveRoute: setNewState, 
      data: pageData.data,
      setData: setData,
      setOffData: setOffData
    }}>
      {props.children}
    </AppsData.Provider>
  )
}