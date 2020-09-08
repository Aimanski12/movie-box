import {findUrl, requestData, fetchdata, filterData, hasVal, searchUrl} from './config'

// function to fetch the home page data
export async function homeDataPage () {
  const popular = await fetchdata('/movie/popular', 1)
  const toprated = await fetchdata('/movie/top_rated', 1)
  const upcoming = await fetchdata('/movie/upcoming', 1)
  return { popular, toprated, upcoming }
}

// function to fetch tv show data
export async function tvDataPage () {
  const popular = await fetchdata('/tv/popular', 1)
  const on_air = await fetchdata('/tv/on_the_air', 1)
  return { popular, on_air }
}

// function to fetch the trending data page
export async function trendingDataPage () {
  const day = await fetchdata('/trending/all/day', 1)
  const week = await fetchdata('/trending/all/week', 1)
  return { day, week }
}
 
// function to fetch the discover page
export async function discoverDataPage () {
  const popular = await fetchdata('/movie/popular', 1)
  const toprated = await fetchdata('/movie/top_rated', 1)
  const upcoming = await fetchdata('/movie/upcoming', 1)
  return { popular, toprated, upcoming }
}

// function to fetch data for for movies when
// clicking the next page
export async function getDataPage (route, page) {
  const data = await fetchdata(route, page)
  return { data }
}

// function for fetch data for movies by genre
export async function findGenre (id, page) {
  const data = await fetchdata(id, page, true)
  return { data }
}

// function for fetch video details
export async function findVideo (page, id) {
  let route = `${page}/${id}`

  let details = await requestData(findUrl(route, 'details'))
  if(!details){
    if(page === '/movie') {
      route = `/tv/${id}`
      details = await requestData(findUrl(route, 'details'))
    } else {
      route = `/movie/${id}`
      details = await requestData(findUrl(route, 'details'))
    }
  }
  const posters = await requestData(findUrl(route, 'posters'))
  const video = await requestData(findUrl(route, 'video'))
  const cast = await requestData(findUrl(route, 'cast'))
  const keywords = await requestData(findUrl(route, 'keyW'))
  const similar = await requestData(findUrl(route, 'sim'))
  const pUrl = page

  // filter the return calue
  return filterData(details, posters, video, cast, keywords, similar, pUrl)
}

export async function findPerson(id) {
  const details = await requestData(findUrl(`/person/${id}`, 'pdetails'))
  const movies = await requestData(findUrl(`/person/${id}/movie_credits`, 'pmovies'))
  const posters = await requestData(findUrl(`/person/${id}/images`, 'pmovies'))

  return hasVal(details, movies, posters)
}

// search data from the key word
export async function searchMovie (val, page) {
  let query = encodeURIComponent(val)
  const movies = await requestData(searchUrl(query, page, 'movies'))
  const tvshows = await requestData(searchUrl(query, page, 'tvshows'))
  const people = await requestData(searchUrl(query, page, 'people'))
  return {movies, tvshows, people}
}

// link o get another data
export async function getAnotherData (page, query, route) {
  let q = encodeURIComponent(query)
  return await requestData(searchUrl(q, page, route))
}