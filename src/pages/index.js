import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '../../styles/Home.module.css'

export default function Trending() {
  const router = useRouter()
  

  const title = 'john'

  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Box | {router.query.movie} Movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Home Page</h1>
      <Link href='/[movies]/[movie]/[movie-item]' as={`/popular/movie/${title}`}>
        <a>Go to movie john</a>
      </Link>
      <Link href='/[movies]/this-week' as={`/trending/this-week`}>
        <a>Go to trending this week</a>
      </Link>
      



    </div>
  )
}
