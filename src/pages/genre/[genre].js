import Head from 'next/head'
import {useRouter} from 'next/router'
import Link from 'next/link'

export default function Genre() {

  const router = useRouter()

  console.log(router.query)
  const genre = ['action', 'drama']
  if(router.query.genre !== undefined){

    if(router.query.genre !== 'action' && router.query.genre !== 'drama'){
      router.replace('/404', `/genre/${router.query.genre}`)
      // console.log('asdf')
    }
  }
  
  return (
    <div className='container'>
      <Head>
        <title>Movie Box | Genre Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Link href='/'>
        <a>Go Back</a>
      </Link>
      



    </div>
  )
}
