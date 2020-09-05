import axios from 'axios'

const url = 'https://api.themoviedb.org/3'
const api = 'api_key=f79c1f33b89b8f1e137114c46a4df913'
const lang = 'language=en-US'

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

function isUn (val) {
  if(val === undefined){
    return true
  } else {
    false
  }
}

