import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function TopRated() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Box | Top Rated Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href='/'>
        <a>Go Back</a>
      </Link>
    </div>
  )
}
