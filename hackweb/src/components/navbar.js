import React from 'react'
import styles from '../styles/navbar.css'
const navbar = () => {
  return (
    <>
    <div className={styles.navbar}>
    <div>LOGO</div>
    <div>Home</div>
    <div>Team</div>
    <div>Contact Us</div>
    <div className="Signup"></div>
    <div className='Login'></div>
    </div>
    </>
  )
}

export default navbar