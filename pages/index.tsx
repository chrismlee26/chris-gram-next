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
        <h1 className="font-bold text-4xl mb-5">chrisgram v2</h1> 
        <p className="text-2xl">Welcome!</p>
        <p>All posts made here are displayed on the hardware photo viewer that is sitting on my desk.</p>
        <p className="mb-5">If you've made it past my terrible single-factor authentication we're probably friends so I trust you to be nice 🙈</p>
        <Feed />
        <p className="italic opacity-40 text-sm mt-10">*chris is not responsible for anything posted here and reserves the right to remove photos of questionable and sub-par quality.</p> 
      </div>
    </div>
  )
}

export default Home
