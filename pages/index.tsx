import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>chrisgram v2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>chrisgram v2</h1> 
      <Feed />
    </div>
  )
}

export default Home
