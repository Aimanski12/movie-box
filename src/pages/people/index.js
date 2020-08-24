import Head from 'next/head'
import Link from 'next/link'

export default function People() {
  
  return (
    <div className='container'>
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
