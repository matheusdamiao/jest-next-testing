import Head from "next/head";
import Image from "next/image";

import styles from "@/pages/index.module.css";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Testing with Jest and Testing-Library </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button>agende sua consultu</button>
      <footer>olá</footer>
      <CTA />
    </div>
  );
}
