import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'

export default function Movie() {
  const router = useRouter()
  
  console.log(router.query)


  return (
    <div className='container'>
      <Head>
        <title>Movie Box | {router.query.movie} Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Movie Details</h1>
      <Link href='/'>
        <a>Go Back</a>
      </Link>
      



    </div>
  )
}
