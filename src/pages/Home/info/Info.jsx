
import {useState, React, useEffect } from 'react'
import "./info.css"

import Socials_bar from '../../../components/socials_bar/Socials_bar';

export default function Info() {

  return (
    <div className='ups__home-info'>
        <div className='ups__home-info_container'>
            <div>
                <h1>Welcome to the UWA University Physics Society</h1>
                <p>The University Physics Society, est. 1965, represents all students studying or interested in Physics at the University of Western Australia (Guild affiliated).</p>
                <p>We offer a wide range of social, educational and professional activities from Cocktail Nights and Ping Pong tournaments to Study Nights and Physics Demonstrations. Come check out our clubroom on the Physics building 2nd floor and follow our socials to stay in the loop on how you can get involved!</p>
            </div>

            {/* Don't know if we want to do a sign up form. Making it secure etc seems difficult */}
            <div className='ups__home-info_container-signup'>
                <a href='https://docs.google.com/forms/d/e/1FAIpQLSdXBbH7limOVxM2zEMVdjtZ5pKa7uShUvHsCNf82H27INQ0lg/viewform?fbzx=4221658672631148117'>
                    Sign up for an Annual Membership! Don't know if this actually works.
                </a>
            </div>
            <Socials_bar />

            {/* -----Replaced by Socials_bar, kept for reference----- */}
            {/* <div className='ups__home-info_container-icons'>
                <a href="https://instagram.com/upsuwa/" target="_blank" rel="noopener">
                    <img src="/assets/instagram.svg" alt="Instagram"/>
                </a>
                <a href="https://discord.com/invite/AZZyMqB" target="_blank" rel="noopener">
                    <img src="/assets/discord.svg" alt="Discord"/>
                </a>
                <a href="https://facebook.com/UPSuwa/" target="_blank" rel="noopener">
                    <img src="/assets/facebook.svg" alt="Facebook"/>
                </a>
            </div> */}
        </div>
    </div>
  )
}
