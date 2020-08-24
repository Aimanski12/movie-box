import Head from 'next/head'
import Link from 'next/link'

export default function NotFound() {
  
  return (
    <div className='container'>
      <Head>
        <title>Movie Box | Not Found</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>404 - File is not found.</h1>
      <Link href='/'>
        <a>Go Back</a>
      </Link>
      



    </div>
  )
}
