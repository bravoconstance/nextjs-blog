import '../styles/global.css'
import variables from '../styles/variables.module.scss'
import { AppProps } from 'next/app'
import Layout from '../components/layout'
import React from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
