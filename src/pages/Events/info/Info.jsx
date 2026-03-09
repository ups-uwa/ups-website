
import {useState, React, useEffect } from 'react'
import "./info.css"

export default function Info() {

  return (
    <div className='ups__events-info'>
        <div className='ups__events-info_container'>
            <div>
                <h1>Events and activities</h1>
                <img src='/assets/freshers3.jpg'id='fresher'/>
                <p id='intro-para'>UPS regularly runs numerous events, including ping-pong tournaments, study nights, star-gazing, physics demonstrations, guest lectures, and quiz nights. Some of our most iconic annual events are the Profs and Pints night, where you can get to know your professors in a more casual setting, and our end of year Cocktail Night, to celebrate completing our toils for the year.</p>
                <img src='/assets/profpints1.jpg'id='profs'/>
                <p id='o-day-para'>If you are new to UWA and attending O-day at the start of the year, come find our stall to get signed up, grab some UPS merch and get some refreshing Dipping Dots, ice cream frozen with liquid nitrogen.</p>
                
                <p id='socials-para'>To keep up to date and see what events are coming up, follow us on Instagram, Facebook or check the
                    <a href='http://uwastudentguild.com/clubs/university-physics-society#events' target='_blank' rel='noopener'> Guild website</a>. 
                </p>
            </div>  
        </div>
    </div>
  )
}
