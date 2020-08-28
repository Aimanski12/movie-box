import axios from 'axios'




// let url = 'https://api.themoviedb.org/3/movie/551?api_key=f79c1f33b89b8f1e137114c46a4df913'


// url = `https://api.themoviedb.org/3/movie/551/images?api_key=${api}&language=en-US`


// // videos
// url = `https://api.themoviedb.org/3/movie/692/videos?api_key=${api}&language=en-US`

// // movie
// url = `https://api.themoviedb.org/3/movie/605116?api_key=${api}&language=en-US`


// url = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`

// // url = `https://api.themoviedb.org/3/trending/all/day?api_key=${api}`

// // genre
// url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api}&language=en-US`


// url = `https://api.themoviedb.org/3/movie/551/images?api_key=${api}&language=en-US`

// // popular
// url = `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=10`

// // movie cast
// url = `https://api.themoviedb.org/3/movie/551/credits?api_key=${api}`

// // all person
// url = `https://api.themoviedb.org/3/person/popular?api_key=${api}&language=en-US&page=1`

// // all movie from a person
// url = `https://api.themoviedb.org/3/person/1245/movie_credits?api_key=${api}&language=en-US`

// // person details
// url = `https://api.themoviedb.org/3/person/1245?api_key=${api}&language=en-US`


// // trending week
// url = `https://api.themoviedb.org/3/trending/all/week?api_key=${api}`
// url = `https://api.themoviedb.org/3/trending/all/week?api_key=${api}&page=3`

// // tv
// url = `https://api.themoviedb.org/3/tv/popular?api_key=${api}&language=en-US&page=1`
// // tv current on air
// url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api}&language=en-US&page=1`


// url = `https://api.themoviedb.org/3/movie/popular?api_key=${api}&language=en-US&page=1&genre_ids=99`

// // movie by genre
// url = `https://api.themoviedb.org/3/discover/movie?api_key=${api}&language=en-US&with_genres=28`


const url = 'https://api.themoviedb.org/3'
const api = 'f79c1f33b89b8f1e137114c46a4df913'


async function fetchdata (page) {
  let tmdbUrl = `${url}${page}?api_key=${api}&language=en-US&page=1`
  
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

// 'https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>'

export async function homeDataPage () {
  const popular = await fetchdata('/movie/popular')
  const toprated = await fetchdata('/movie/top_rated')
  const upcoming = await fetchdata('/movie/upcoming')
  return { popular, toprated, upcoming }
}

export async function tvDataPage () {
  const popular = await fetchdata('/tv/popular')
  const on_air = await fetchdata('/tv/on_the_air')
  return { popular, on_air }
}

export async function trendingDataPage () {
  const day = await fetchdata('/trending/all/day')
  const week = await fetchdata('/trending/all/week')
  return { day, week }
}

 
export async function discoverDataPage () {
  const popular = await fetchdata('/movie/popular')
  const toprated = await fetchdata('/movie/top_rated')
  const upcoming = await fetchdata('/movie/upcoming')
  return { popular, toprated, upcoming }
}