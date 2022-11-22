import Head from 'next/head'
import Image from 'next/image'
import '../styles/Home.module.css'
import Calc from './Calc'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Calc</title>
        <meta name="description" content="Calculator App - Frontend Mentor" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Calc/>
      <footer className="footer">
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
