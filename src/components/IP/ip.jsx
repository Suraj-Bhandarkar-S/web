import React from 'react'

export default function ip() {
  return (
    <div className="ip" id="ip">
        <div className="container">
        <img src={process.env.PUBLIC_URL + '/assets/IP.png'} alt=""/>
        </div>
    </div>
  )
}
