"use client"
import styles from './page.module.css'
import React, { useState } from 'react'
import axios from 'axios'
import Logo from './components/Logo'
import NavBar from './components/NavBar'
import Carousel from './components/Carousel'
import Accordion from './components/accordion'
import Footer from './components/Footer'
import { FetchMenuItems } from './components/api'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

export default function Home() {
  let axiosCall = axios.get('https://www.jsonkeeper.com/b/MDXW');
  console.log(axiosCall);

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
        <div className='row'>
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
