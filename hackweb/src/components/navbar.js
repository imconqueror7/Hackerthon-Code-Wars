import React from 'react'
import Link from 'next/link'
import styles from '../styles/navbar.css'
const navbar = () => {
  return (
    <>
 <div className="flex flex-wrap">
    <div>LOGO</div>
    <div>Home</div>
    <div>Team</div>
    <div>Contact Us</div>
    <div className="Signup"> Sigup</div>
    <div className='Login'> Login</div>
    </div>

    
    </>
  )
}

export default navbar