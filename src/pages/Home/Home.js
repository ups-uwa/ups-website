import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import { Header, Info, Photos } from '../Home'

export default function Home() {
  return (
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>,
    <div className="Home">
      <Navbar />
      <Header />
      <Info />
      <Photos />
      <Footer />
    </div>
  )
}