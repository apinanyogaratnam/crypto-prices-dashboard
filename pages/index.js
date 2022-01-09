import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {

  const [data, setData] = useState([]);

  useEffect(() => {return undefined;});

  const addPriceHandler = async (e, cryptoName, currency) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName}&vs_currencies=${currency}`)
      const price = response.data[cryptoName][currency];

      setData(...data, {cryptoName: price});
    } catch (error) {
      console.log(error);
    }
  };

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
