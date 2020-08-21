import Head from 'next/head'
import Link from 'next/link'
import styles from '../../../styles/Home.module.css'

export default function People() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Box | People</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>People page</h1>
      <Link href='/people/person/[person]' as={`/people/person/${'john'}`}>
        <a>Go to john</a>
      </Link>
      



    </div>
  )
}
