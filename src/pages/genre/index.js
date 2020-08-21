import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

export default function Genre() {
  
  return (
    <div className={styles.container}>
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
