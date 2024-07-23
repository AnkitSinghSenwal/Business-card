import './App.css'
import profilePhoto from './assets/dp.png'
// import { useState } from 'react'
// import viteLogo from '/vite.svg'

function App() {
  return (
    <div className='card'>
      <div className="img_container">
        <img src={profilePhoto} alt="Photo" />
      </div>
      <div className="container">
            <h2>Laura Smith</h2>
  
            <p>Frontend Developer</p>
            <p>laurasmith.website</p>
            <div className="buttons">  
                <a href="mailto:laura@smith.com" className="email"><i className="fa fa-envelope"></i> Email</a>
                <a href="https://www.linkedin.com/in/laurasmith" className="linkedin"><i className="fa fa-linkedin"></i> LinkedIn</a>
            </div>
            <h3>About</h3>
            <p className='info_text'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h3>Interests</h3>
            <p className='info_text'>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
        <ul className="social-icons">
            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a href="#"><i className="fa fa-instagram"></i></a></li>
            <li><a href="#"><i className="fa fa-github"></i></a></li>
        </ul>

    </div>
  )
}

export default App
