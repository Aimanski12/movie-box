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

// genre
import '../../styles/genre/genre.css'

// not found
import '../../styles/notfound/notfound.css'

// person 
import '../../styles/person/personmain.css'
import '../../styles/person/person.css'

// movie css
import '../../styles/detail/header.css'
import '../../styles/detail/back.css'
import '../../styles/detail/itemdetails.css'
import '../../styles/detail/item-img.css'
import '../../styles/detail/item-stats.css'
import '../../styles/detail/poster.css'

// search css
import '../../styles/search/header.css'
import '../../styles/search/breadcrumbs.css'
import '../../styles/search/noresult.css'
import '../../styles/search/itemsresult.css'

// intro css
import '../../styles/Intro/intro.css'

import {AppsDataContext} from '../utils/context/appDataContext'

function MyApp({ Component, pageProps, router }) {
  return(
    <AppsDataContext>
      <Component {...pageProps} key={router.route}/>
    </AppsDataContext>
  )
}

export default MyApp
