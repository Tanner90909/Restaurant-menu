"use client"
import styles from './page.module.css'
import React from 'react'
import axios from 'axios'
import Logo from './components/Logo'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import Accordion from './components/Accordion'
import Footer from './components/Footer'
import { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default function Home() {
  const [state, setState] = useState([]);

  useEffect(() => {
  async function axiosCall() {
  let response = await axios.get('https://www.jsonkeeper.com/b/MDXW');
  setState(response)
  console.log(state)
  };
  axiosCall()
}, []);


console.log(state.data)

  return (
    <main className={styles.main}>
      <div className='container'>
        <div className='row'>
          <div className='col-4 text-start'>
            <div className='Logo'>
              <Logo />
            </div>
          </div>
          <div className='col-8'>
            <div className='NavBar'>
              <NavBar />
            </div>
          </div>
        </div>
        <div className='row mt-5'>
          <div className='col-12'>
            <Carousel />
          </div>
        </div>
        <div className='row text-center mt-5'>
          <h1>Menu</h1>
          <div className='col-12'>
            <Accordion />
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}
