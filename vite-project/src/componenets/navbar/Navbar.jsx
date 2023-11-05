import React,{useState} from 'react'
import styles from './navbar.module.css'
import  {imageUrl} from '../../Utils.js'

const Navbar = () => {
    const [menuOpen,setMenuOption]=useState(false)
  return (
    <nav className={styles.navbar}>
        <a className={styles.title} href='/'>Portfolio</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={ menuOpen ?imageUrl('nav/menuIcon.png'): imageUrl('nav/closeIcon.png')} 
            alt='menu-button'
            onClick={()=>setMenuOption(!menuOpen)}/>
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`} onClick={()=>setMenuOption(false)}>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#projects'>Projects</a>
                </li>
                <li>
                    <a href='#contact'>Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
