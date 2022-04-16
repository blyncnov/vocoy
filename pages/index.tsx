import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Typecript with Next js</title>
        <meta name="Typecript Next js practice" content="Typecript with Next js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

    </>
  )
}

export default Home
