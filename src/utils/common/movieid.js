import genre from './genre.json'

export function checkifvalid (query, path) {
  let routeUrl = ["tv-shows", "trending", "discover", "popular", "top-rated", "upcoming", "popular", "top-rated", "upcoming", "people", "genre", "movies", "popular", "on-air", "today", "this-week"]
  let wpath = path.split('/')
  let result;

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

// thif function will loop into the given routes
// and then see if any of the array contains the 
// q_url value and returns true if there is.
function isValidUrl (q_url, routes){
  let url = routes.find(r => {
    return r === q_url
  })
  return url === undefined ? false : true
}

function valReturn (page, movie, query, id) {
  if (page && movie) {
    return {
      isTrue: true,
      route: query.movies === 'tv-shows' ? '/tv' : '/movie',
      _id: id
    }
  } else {
    return {
      isTrue: false
    }
  }
}