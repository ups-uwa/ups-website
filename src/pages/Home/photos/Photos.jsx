
import {useState, React, useEffect } from 'react'
import "./photos.css"

export default function Photos() {

  const photoList = [
    "/assets/demos1.jpg",
    "/assets/freshers1.jpg",
    "/assets/demos2.jpg",
    "/assets/demos4.jpg",
    "/assets/profpints1.jpg",
    "/assets/astro1.jpg",
    "/assets/demos3.jpg",
    "/assets/tea1.jpg",
    "/assets/freshers2.jpg",
  ]

  return (
    <div className='ups__home-photos'>
        <div className='ups__home-photos_container'>
           <div className="ups__home-photos_container-photogrid">
                {photoList.map((pic) => (
                  <div className='ups__home-photos_container-photogrid-photo'>
                      <img src={pic} alt={pic.replace('/assets/', '')}/>
                            
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}
