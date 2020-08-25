import Head from 'next/head'
import Navbar from '../components/Navbars/Navbars'

export default function Upcoming() {
  
  return (
    <div className='main-container content-center'>
      <Head>
        <title>Movie Box | Upcoming Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="main">
        <Navbar />  
        <div className="div1"></div>
        <div className="div2"></div>
      </div>



    </div>
  )
}
