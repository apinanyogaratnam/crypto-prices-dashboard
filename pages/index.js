import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {

  const [data, setData] = useState([]);
  const [cryptoNameInput, setCryptoNameInput] = useState('');
  const [currencyInput, setCurrencyInput] = useState('');

  useEffect(() => {return undefined;});

  const addPriceHandler = async (e, cryptoName, currency) => {
    e.preventDefault();

    try {
      const response = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${cryptoName}&vs_currencies=${currency}`);
      const price = response.data[cryptoName][currency];

      setData([...data, {cryptoName, price, currency}]);
    } catch (error) {
      console.log(error);
    }

    setCryptoNameInput('');
    setCurrencyInput('');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Prices</title>
        <meta name="description" content="Web application to view prices of crypto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <form className={styles['input-container']}>
        <input type="text" name="cryptoName" placeholder="Crypto Name" value={cryptoNameInput} onChange={(e) => setCryptoNameInput(e.target.value)} />
        <input type="text" name="currency" placeholder="Currency (usd or cad)" value={currencyInput} onChange={(e) => setCurrencyInput(e.target.value)} />
        <button type="submit" onClick={(e) => addPriceHandler(e, cryptoNameInput, currencyInput)}>Add Price</button>
      </form>

      {
        data.map((cryptoObject, index) => {
          console.log(index);
          return (
            <div className={styles['currency-container']} key={index}>
              <h1 className={styles.spacing}>{cryptoObject.cryptoName}</h1>
              <h3 className={styles.spacing}>{cryptoObject.price}</h3>
              <h3>{cryptoObject.currency}</h3>
            </div>
          );
        })
      }
    </div>
  )
}
