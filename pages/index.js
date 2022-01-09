import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Prices</title>
        <meta name="description" content="Web application to view prices of crypto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
    </div>
  )
}
