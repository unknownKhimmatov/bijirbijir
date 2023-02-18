import React from 'react'
import "./app.css"
// importend companenta
import HomePage from './companents/home/HomePage';

// importend imges
import logo from "./logo.png"



function App1() {
  return (
    <div className='container'>
        <div className="nav-container flex padding">
            <h2>Modern Shop</h2>
            <img src={logo} alt="" />
            <a href="tel:+998 (95) 955 59 37">+998 (95) 955 59 37</a>
        </div>
    <HomePage/>
    </div>
  )
}

export default App1