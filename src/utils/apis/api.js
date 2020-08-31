import axios from 'axios'

const url = 'https://api.themoviedb.org/3'
const api = 'f79c1f33b89b8f1e137114c46a4df913'

async function fetchdata (route, page, genre) {
  let tmdbUrl = genre === true ? 
      `${url}/discover/movie?api_key=${api}&language=en-US&include_adult=false&include_video=false&page=${page}&with_genres=${route}` :
        `${url}${route}?api_key=${api}&language=en-US&page=${page}`

  let data;
  await axios.get(tmdbUrl)
    .then(res => {
      data = res.data
    })
    .catch(err => {
      console.log(err)
    })
  return await data
}

export async function homeDataPage () {
  const popular = await fetchdata('/movie/popular', 1)
  const toprated = await fetchdata('/movie/top_rated', 1)
  const upcoming = await fetchdata('/movie/upcoming', 1)
  return { popular, toprated, upcoming }
}

export async function tvDataPage () {
  const popular = await fetchdata('/tv/popular', 1)
  const on_air = await fetchdata('/tv/on_the_air', 1)
  return { popular, on_air }
}

export async function trendingDataPage () {
  const day = await fetchdata('/trending/all/day', 1)
  const week = await fetchdata('/trending/all/week', 1)
  return { day, week }
}
 
export async function discoverDataPage () {
  const popular = await fetchdata('/movie/popular', 1)
  const toprated = await fetchdata('/movie/top_rated', 1)
  const upcoming = await fetchdata('/movie/upcoming', 1)
  return { popular, toprated, upcoming }
}

export async function getDataPage (route, page) {
  const data = await fetchdata(route, page)
  return { data }
}

export async function findGenre (id, page) {
  let data = await fetchdata(id, page, true)
  return { data }
}