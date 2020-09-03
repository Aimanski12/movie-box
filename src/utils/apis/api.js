import axios from 'axios'

const url = 'https://api.themoviedb.org/3'
const api = 'f79c1f33b89b8f1e137114c46a4df913'
const lang = 'language=en-US'

async function fetchdata (route, page, genre) {
  let tmdbUrl = genre === true ? 
      `${url}/discover/movie?api_key=${api}&${lang}&include_adult=false&include_video=false&page=${page}&with_genres=${route}` :
        `${url}${route}?api_key=${api}&${lang}&page=${page}`

  return await requestData(tmdbUrl)
}
      
async function requestData(url){
  let data;
  await axios.get(url)
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

// movie details
// https://api.themoviedb.org/3/movie/71712?api_key=f79c1f33b89b8f1e137114c46a4df913&language=en-US

// movie posters
// https://api.themoviedb.org/3/movie/278/images?api_key=f79c1f33b89b8f1e137114c46a4df913&language=en-US&include_image_language=null

// movie cast
// https://api.themoviedb.org/3/movie/278/credits?api_key=f79c1f33b89b8f1e137114c46a4df913

// keywords
// https://api.themoviedb.org/3/movie/278/keywords?api_key=f79c1f33b89b8f1e137114c46a4df913

// videos
// https://api.themoviedb.org/3/movie/718444/videos?api_key=f79c1f33b89b8f1e137114c46a4df913&language=en-US

export async function findVideo (page, id) {
  let route = `${page}/${id}`
  
  let details = await requestData(findUrl(route, 'details'))
  let posters = await requestData(findUrl(route, 'posters'))
  let video = await requestData(findUrl(route, 'video'))
  let cast = await requestData(findUrl(route, 'cast'))
  let keywords = await requestData(findUrl(route, 'keyW'))
  // console.log('details', details)
  console.log('posters', posters)
  // console.log('video', video)
  // console.log('cast', cast)
  // console.log('keywords', keywords)
  return { details, posters, video, cast }

}


function findUrl (r, l) {
  if(l === 'details') {
    return `${url}${r}?api_key=${api}&${lang}`
  } else if(l === 'posters') {
    return `${url}${r}/images?api_key=${api}&${lang}&include_image_language=en,null&poster_path=en,null`
  } else if(l === 'video') {
    return `${url}${r}/videos?api_key=${api}&${lang}`
  } else if (l === 'cast') {
    return `${url}${r}/credits?api_key=${api}`
  } else if (l=== 'keyW') {
    return `${url}${r}/keywords?api_key=${api}`
  }
}
