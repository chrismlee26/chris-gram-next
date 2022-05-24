import type { NextPage } from 'next'
import Head from 'next/head'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Head>
        <title>chrisgram v2</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center">
        <h1>chrisgram v2</h1> 
        <Feed />
      </div>
    </div>
  )
}

export default Home
