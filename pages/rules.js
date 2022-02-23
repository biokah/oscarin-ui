import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/layout/Layout';

export default function Rules() {
    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap" rel="stylesheet" />
          </Head>
          <div className={styles.container}>
            <Layout />
          </div>
        </>
    )
  }