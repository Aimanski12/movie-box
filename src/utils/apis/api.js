import {findUrl, requestData, fetchdata, filterData} from './config'

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
  const route = `${page}/${id}`
  const details = await requestData(findUrl(route, 'details'))
  const posters = await requestData(findUrl(route, 'posters'))
  const video = await requestData(findUrl(route, 'video'))
  const cast = await requestData(findUrl(route, 'cast'))
  const keywords = await requestData(findUrl(route, 'keyW'))

  // filter the return calue
  return filterData(details, posters, video, cast, keywords)
  
}
