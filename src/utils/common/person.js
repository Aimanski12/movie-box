export function getGender(val){
  return val === 1 ? 'Female' : 'Male'
}

export function filterAKA (val) {
  if(!val || val === undefined || val === null){
    return <span className="stat-desc">Not given</span>
  } else if(val.length < 1) {
    return <span className="stat-desc">Not given</span>
  } else {
    return val.map((p, i) => {
      return ( <span className="stat-desc" key={i}>{p}</span>) })
  }
}


export function getDeathday (val) {
  if(val === null || val === '') {
    return 
  } else {
    return (
      <div className="stat-wrapper">
        <span className="stat-header">Deathday</span>
        <span className="stat-desc">{val}</span>
      </div>)
  }
}