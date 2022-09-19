import React, {forwardRef} from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Input = forwardRef<HTMLInputElement>((props, ref) => <input {...props} ref={ref} />);
Input.displayName = "ForwardRefInput";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Input />
       </main> 
    </div>
  )
}

export default Home
