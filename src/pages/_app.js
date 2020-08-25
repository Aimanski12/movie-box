import '../../styles/globals.css'

// navbar css
import '../../styles/navbar/navbar.css'
import '../../styles/navbar/logo.css'
import '../../styles/navbar/search.css'
import '../../styles/navbar/menu.css'

// header carousel
import '../../styles/header/carousel.css'
import '../../styles/header/swipearrow.css'
import '../../styles/header/landing-header.css'
import '../../styles/button/button.css'


import {AppsDataContext} from '../utils/context/appDataContext'

function MyApp({ Component, pageProps, router }) {
  return(
    <AppsDataContext>
      <Component {...pageProps} key={router.route}/>
    </AppsDataContext>
  )
}

export default MyApp
