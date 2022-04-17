import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../components/Layout'

import {HeaderWrapper} from "../styles/home/Header"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <HeaderWrapper>
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </HeaderWrapper>
  )
}

export default MyApp
