import '../styles/globals.css'
import type { AppProps } from 'next/app'

import Layout from '../components/Layout'
import { HeaderWrapper } from "../styles/home/Header"

import { store } from '../redux/store'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <HeaderWrapper>
        <Layout>
            <Component {...pageProps} />
        </Layout>
        </HeaderWrapper>
      </Provider>
  )
}

export default MyApp
