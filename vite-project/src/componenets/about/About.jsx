import React from 'react';
import {imageUrl} from '../../Utils.js';
import styles from './about.module.css'

const About = () => {
  return (
   <section className={styles.container} id="about">
    <h1 className={styles.title}>About</h1>
    <div className={styles.content}>
        <img src={imageUrl("about/boy.webp")} alt="Me sitting with a laptop" className={styles.aboutImage}></img>
        <ul className={styles.aboutItems}>
            <li  className={styles.aboutItem} ><img src={imageUrl("about/cursorIcon.png")} alt="Cursor Icon"></img>
                <div className={styles.aboutItemText}>
                    <h3>Frontend Developer</h3>
                    <p>Innovative software Engineer with more than 2 years of
                        experience in building and maintaining responsive
                        websites and standalone educational portals. Proficient
                        in HTML , CSS , JAVASCRIPT plus modern libraries like
                        REACT JS and Redux.</p>
                </div>
            </li>
        </ul>
    </div>
   </section>
  )
}

export default About
