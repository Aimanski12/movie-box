import Head from 'next/head'
import Link from 'next/link'

export default function Popular() {
  
  return (
    <div className='container'>
      <Head>
        <title>Movie Box | Popular Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Link href='/'>
        <a>Go Back</a>
      </Link>
      



    </div>
  )
}
