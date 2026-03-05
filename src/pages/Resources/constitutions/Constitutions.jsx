
import {useState, React, useEffect } from 'react'
import "./constitutions.css"


const names = [
    "ups-constitution-05-10-2023.pdf",
    "ups-constitution-13-10-2020.pdf",
    "ups-constitution-27-02-2020.pdf",
    "ups-constitution-25-02-2015.pdf",
]


export default function Constitutions() {
  return (
    <div className='ups__resources-constitutions'>
        <h1>Current Constitution</h1>
        <div className='ups__resources-constitutions_link_box'>
            <a>TBA</a>
        </div>
        <br></br>
        <h1>Past Constitutions</h1>
        {names.map((doc) => (
            <div key={doc} className='ups__resources-constitutions_link_box'>
                <a href={`/assets/constitutions/${doc}`} target='_blank'>
                {doc.replace('ups-constitution-', '').replace('.pdf', '').replaceAll('-','/')}
                </a>
        </div>
      ))}
    </div>
  )
}