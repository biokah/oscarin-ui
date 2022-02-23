import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Layout } from '../components/layout/Layout';

export default function Ranking() {
    return (
        <>
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;600&display=swap" rel="stylesheet" />
          </Head>
          <div className={styles.container}>
            <Layout>
                <p>La ceremonia de los Premios Óscar se llevará a cabo el domingo 27 de marzo de 2022. Durante el evento, actualizaremos los resultados tan pronto como se vayan anunciando, y este ranking se actualizará conforme a los resultados de los participantes.</p>
                <table>

                </table>
            </Layout>
          </div>
        </>
    )
  }