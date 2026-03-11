import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import { Constitutions } from '.'


export default function Resources() {
    return (
    <div className="ups__resources">
      <Navbar />
      {/* <Guides /> */}
      {/* <Clubroom /> */}
      <Constitutions />
      <Footer />
    </div>
  )
}