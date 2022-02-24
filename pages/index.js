// import Image from 'next/image'
import styles from "../styles/Home.module.css";
import { Layout } from "../components/layout/Layout";
import { LargeCard } from "../components/LargeCard/LargeCard";
import { MediumCard } from "../components/MediumCard/MediumCard";
import { SmallCard } from "../components/SmallCard/SmallCard";
import { Welcome } from "../components/Welcome/Welcome"

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Layout>
          <LargeCard />
          <MediumCard />
          <SmallCard />
          <Welcome />
        </Layout>
        
      </div>
    </>
  );
}
