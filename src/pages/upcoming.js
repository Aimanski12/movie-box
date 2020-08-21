import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

export default function Upcoming() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Box | Upcoming Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href='/'>
        <a>Go Back</a>
      </Link>
    </div>
  )
}
