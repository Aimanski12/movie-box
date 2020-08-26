
// function to filter the number of text to render
export function filterText (txt, width) {
  let t;
  if(width < 368){
    t = sortText(txt, 18)
  } else if (width < 468) {
    t = sortText(txt, 24)
  } else if (width < 568) {
    t = sortText(txt, 30)
  } else if (width < 668) {
    t = sortText(txt, 35)
  } else if (width < 768) {
    t = sortText(txt, 40)
  } else if (width < 868) {
    t = sortText(txt, 45)
  } else if (width < 968) {
    t = sortText(txt, 50)
  } else {
    t = txt
  }
  return t
}

// sort text according to its number of words
function sortText(txt, num){
  let t;
  const length = txt.split(' ').length
  if(length > num) {
    t = txt.split(" ").splice(0, num).join(' ')
    return t + ' . . .'
  } else {
    t = txt
  }
  return t
}