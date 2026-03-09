import React, { useState } from 'react'

import "./socials_bar.css"

export default function Socials_bar() {

    return (
    <div className='ups__socials'>
        <a href="https://instagram.com/upsuwa/" target="_blank" rel="noopener">
            <img src="/assets/instagram.svg" alt="Instagram"/>
        </a>
        <a href="https://discord.com/invite/AZZyMqB" target="_blank" rel="noopener">
            <img src="/assets/discord.svg" alt="Discord"/>
        </a>
        <a href="https://facebook.com/UPSuwa/" target="_blank" rel="noopener">
            <img src="/assets/facebook.svg" alt="Facebook"/>
        </a>
        <a href="mailto:universityphysicssociety@gmail.com" rel="noopener">
            <img src="/assets/icon-mail.svg" alt="Email"/>
        </a>
    </div>
  )
}



