"use client"
import styles from './page.module.css'
import React from 'react'
import axios from 'axios'

export default function Home() {
  let axiosCall = axios.get('https://www.jsonkeeper.com/b/MDXW');
  console.log(axiosCall);

  return (
    <main className={styles.main}>
      
    </main>
  )
}
