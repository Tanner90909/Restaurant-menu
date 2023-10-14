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
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
  async function fetchData() {
  let response = await axios.get('https://www.jsonkeeper.com/b/MDXW');
  setMenuData(response.data)
  console.log(response.data)
  };
  fetchData()
}, []);

console.log(menuData);

  return (
    <main className={styles.main}>
      <div className='container mt-5'>
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
            <Accordion menuData={menuData}/>
          </div>
        </div>
        <div className='row my-5'>
          <div className='col-8 text-center'>
            <h1>About Us</h1>
            <p>Welcome to Brunch.js! We are a locally owned and operated brunch and breakfast Restaurant. 
            We were previously software developers who loved writing code in Javascript and hated learning to code with React. 
            However, now that we have been in business for many years using React we have grown to appreciate its purpose and functionality.</p>
          </div>
          <div className='col-4 text-center'><img src="/img/breakfast-image.jpg" alt="breakfast-image" priority /></div>
        </div>
        <h1 className='text-center'>Contact Us</h1>
        <div className='row'>
          <div className='col-12'>
            <Footer />
          </div>
        </div>
      </div>
    </main>
  )
}
