import genre from './genre.json'

// validate if both of the queries are valid
export function checkifvalid (query) {
  const validGenre = checkDetails('link', query.genre)
  const validId = checkDetails('id', Number(query.id))
  
  if (checkIfTrue(validGenre) && checkIfTrue(validId)) {
    return true
  } else {
    return false
  }
}

// check if both of return value is not empty
function checkIfTrue (obj) {
  if(obj !== undefined) {
    return true
  } else {
    return false
  }
}

// check if the query params are in the listed genre
function checkDetails (arg, query) {
  const data = genre.genre

  return data.find(d => {
    if(arg === 'link') {
      return d.link === query
    } else {
      return d.id === query
    }
  })
}

export function findTitle (val) {
  let title = genre.genre.find(d => {
                return d.id === Number(val)
              })
  return title === undefined ? '' : title.name
}