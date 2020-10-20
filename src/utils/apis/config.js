import axios from 'axios'

const url = 'https://api.themoviedb.org/3'
const lang = 'language=en-US'
const api = 'api_key=f79c1f33b89b8f1e137114c46a4df913'

export async function fetchdata(route, page, genre) {
  let tmdbUrl = genre === true ?
    `${url}/discover/movie?${api}&${lang}&include_adult=false&include_video=false&page=${page}&with_genres=${route}` :
    `${url}${route}?${api}&${lang}&page=${page}`

  return await requestData(tmdbUrl)
}

export async function requestData(url) {
  let data;
  await axios.get(url)
    .then(res => {
      data = res.data
    })
    .catch(err => {
      data = false
    })
  return await data
}


export function findUrl(r, l) {
  if (l === 'details') {
    return `${url}${r}?${api}&${lang}`
  } else if (l === 'posters') {
    return `${url}${r}/images?${api}&${lang}&include_image_language=en,null&poster_path=en,null`
  } else if (l === 'video') {
    return `${url}${r}/videos?${api}&${lang}`
  } else if (l === 'cast') {
    return `${url}${r}/credits?${api}`
  } else if (l === 'keyW') {
    return `${url}${r}/keywords?${api}`
  } else if (l === 'sim'){
    return `${url}${r}/similar?${api}&language=en-US&page=1`
  } else if (l === 'pdetails') {
    return `${url}${r}?${api}&language=en-US`
  } else if(l === 'pmovies'){
    return `${url}${r}?${api}&${lang}`
  } else if(l === 'pposters') {
    return `${url}${r}?${api}`
  } 
}

export function searchUrl (r, p, route){
  const ad = '&include_adult=false'
  if(route === 'movies') {
    return `${url}/search/movie?${api}&${lang}&query=${r}&page=${p}${ad}`
  } else if (route === 'tvshows') {
    return `${url}/search/tv?${api}&${lang}&page=${p}&query=${r}${ad}`
  } else if(route === 'people'){
    return `${url}/search/person?${api}&${lang}&query=${r}&page=${p}${ad}`
  }
}

export function filterData (details, posters, video, cast, keywords, similar, pUrl) {
  if(isUn(details) && isUn(posters) && isUn(video) && isUn(cast) && isUn(keywords)) {
    return {data: false}
  } else {
    return {
      data: true,
      details, 
      posters, 
      video, 
      cast,
      keywords,
      similar,
      pUrl
    }
  }
}

// check if the data has a value
export function hasVal (details, movies, posters) {
  if(isUn(details) && isUn(movies) && isUn(posters)) {
    return {data: false}
  } else {
    return {details, movies, posters}
  }
}

// check if the data has a value
function isUn (val) {
  if(val === undefined){
    return true
  } else {
    false
  }
}

