import genre from './genre.json'
import {addComma} from './common'

// this function checks if the route query has valid values
export function checkifvalid (query, path) {
  let routeUrl = ["tv-shows", "trending", "discover", "popular", "top-rated", "upcoming", "popular", "top-rated", "upcoming", "people", "genre", "movies", "popular", "on-air", "today", "this-week", 'search']
  let wpath = path.split('/')
  // console.log(query, wpath)

  if(Object.keys(query).length > 0){
    let page = isValidUrl(query.movies, routeUrl)
    let movie = checkMovies(query.movie, routeUrl)
    return valReturn(page, movie, query.movies, query._id)
  } else {
    let page = isValidUrl(wpath[1], routeUrl)
    let movie = checkMovies(wpath[2], routeUrl)
    return valReturn(page, movie, wpath[1], wpath[3])
  }
}

// loop into the genre and see if the route 
// contains the value of the given route
function checkMovies(q_url, routes){
  let r = routes
  for(let x = 0; x < genre.genre.length; x++){
    r.push(genre.genre[x].link)
  }
  return isValidUrl(q_url, r)
}

// this function will loop into the given routes
// and then see if any of the array contains the 
// q_url value and returns true if there is.
function isValidUrl (q_url, routes){
  let url = routes.find(r => {
    return r === q_url
  })
  return url === undefined ? false : true
}

// this function returns an object that contains 
// the data for the route and the id or false
function valReturn (page, movie, query, id) {
  if (page && movie) {
    return {
      isTrue: true,
      route: query === 'tv-shows' ? '/tv' : '/movie',
      _id: id
    }
  } else {
    return {
      isTrue: false
    }
  }
}

// function to get the get the budget and revenue
export function getFigure (val) {
  if(isNaN(val)) {
    return 'Not given'
  } else {
    if(val > 0)  {
      return `$ ${addComma(val)}`
    } else {
      return 'Not given'
    }
  }
}

// function to format text into a regular one line with space
export function formatText (val) {
  let text = '';
  if(val.length < 1){
    text = 'Not Given'
  } else {
    for (let x = 0; x < val.length; x++){
      text += val[x].name === '' ? 'Not Given' :`${val[x].name} `
    }
  }
  return text
}

// function to calculate the runtime
// and return into a by hour/minute format
export function getRuntime(val) {
  let h = Math.floor(val/60) 
  let m = val%60
  let hr = h < 1 ? '' : `${h.toString()}h `
  let min = m < 1 ? '' : ` ${m.toString()}m`
  return `${hr} ${min}`
}

// function to check the producer
export function prodCountries(pc1, pc2) {
  if(pc1) {
    if(pc1.length > 0){
      return pc1.map((p, i) => {
        return ( <span className="stat-desc" key={i}>{p.name}</span> )
      })
    } else {
      return <span className="stat-desc">Not Given</span>
    }
  } else if(pc2){
    if(pc2.length > 0){
      return <span className="stat-desc">{pc2[0]}</span>
    }
  } else {
    return <span className="stat-desc">Not Given</span>
  }
}

// extract producers data
export function producers (val) {
  if(!val || val === undefined || val === null) {
    return <span className="stat-desc">Not given</span>
  } else if(val.length < 1) {
    return <span className="stat-desc">Not given</span>
  } else {
    return val.map((p, i) => {
      return ( <span className="stat-desc" key={i}>{p.name}</span>) })
  }
}
