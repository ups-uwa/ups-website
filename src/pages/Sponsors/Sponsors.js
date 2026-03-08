import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer'
import Explainer from './explainer/Explainer';
import Spons from './spons/Spons.jsx';


export default function Sponsors() {
  return (
    <div className="Sponsors">
      <Navbar />
      <Explainer />
      <Spons />
      <Footer />
    </div>
  )
}