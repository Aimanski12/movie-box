import React, {useState, createContext} from 'react'
import route from '../common/routes.json'

export const AppsData = createContext()

export function AppsDataContext (props) {
  const [routes, setRoutes] = useState({
    active: 'Home',
    urls: route.routes
  })

  function setNewState (val) {
    if(val !== routes.active){
      setRoutes({
        ...routes, 
        active: val
      })
    }
  }

  return(
    <AppsData.Provider value={{
      routes,
      setActiveRoute: setNewState
    }}>
      {props.children}
    </AppsData.Provider>
  )
}