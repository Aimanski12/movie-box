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

// movie list css
import '../../styles/movielist/movielist.css'

// footer
import '../../styles/footer/footer.css'
import '../../styles/footer/quotes.css'
import '../../styles/footer/footerdesc.css'
import '../../styles/footer/footernav.css'
import '../../styles/footer/footerlinks.css'

// pagination
import '../../styles/pagination/pagination.css'

import {AppsDataContext} from '../utils/context/appDataContext'

function MyApp({ Component, pageProps, router }) {
  return(
    <AppsDataContext>
      <Component {...pageProps} key={router.route}/>
    </AppsDataContext>
  )
}

export default MyApp
