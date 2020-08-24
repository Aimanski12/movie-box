import Head from 'next/head'
import Link from 'next/link'

export default function Genre() {
  
  return (
    <div className='container'>
      <Head>
        <title>Movie Box | Movie by Genre</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Link href='/genre/[genre]' as={`/genre/${'action'}`}>
        <a>Action</a>
      </Link>
      <Link href='/genre/[genre]' as={`/genre/${'drama'}`}>
        <a>Drama</a>
      </Link>
      <Link href='/genre/[genre]' as={`/genre/${'western'}`}>
        <a>Western</a>
      </Link>
      



    </div>
  )
}
