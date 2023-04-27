import type { AppProps } from 'next/app'
import {Montserrat} from 'next/font/google'
import 'src/global.css'

const montserrat = Montserrat({
  subsets:["latin"],
  variable: "--font-mont"
})

export default function MyApp({ Component, pageProps }) {
  return 
  <main className={`${montserrat.variable} font-mont`}>
  <Component {...pageProps} />
  </main>
}