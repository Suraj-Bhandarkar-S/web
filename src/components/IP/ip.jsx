import React from 'react'
import './ip.scss'

export default function ip() {
  return (
    <div className="ip" id="ip">
        <h1>Work In Progress</h1>
        <div className="container">
        <img src={process.env.PUBLIC_URL + '/assets/IP.png'} alt=""/>
        </div>
        <p>More Updates Coming Soon</p>
    </div>
  )
}
