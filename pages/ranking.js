import Head from "next/head";
// import Image from 'next/image'
import styles from "../styles/Home.module.css";
import { Layout } from "../components/layout/Layout";

export default function Ranking() {
  return (
    <>
      <div className={styles.container}>
        <Layout>
          <p>
            La ceremonia de los Premios Óscar se llevará a cabo el domingo 27 de
            marzo de 2022. Durante el evento, actualizaremos los resultados tan
            pronto como se vayan anunciando, y este ranking se actualizará
            conforme a los resultados de los participantes.
          </p>
          <table></table>
        </Layout>
      </div>
    </>
  );
}
