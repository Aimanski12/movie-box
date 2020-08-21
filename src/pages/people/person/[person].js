import Head from 'next/head'
import Link from 'next/link'
import {useRouter} from 'next/router'
import styles from '../../../../styles/Home.module.css'

export default function Person() {
  const router = useRouter()
  const person = router.query

  console.log(person.person)
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Movie Box | People - {person.person}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <Link href='/'>
        <a>Go Back</a>
      </Link>
      



    </div>
  )
}
