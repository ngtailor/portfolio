import React from 'react'
import  {imageUrl} from '../../Utils.js'
import styles from './hero.module.css'


const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi,I'am Nageshwer Tailor</h1>
            <p className={styles.description}> I am  React JS Front-end Developer with 2 years Experience usnig React ,javascript and Redux.
              Reach out if you'd like to learn more  </p>
              <a href="#contact" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={imageUrl("hero/heroImages.png")} alt="Hero image of me" className={styles.heroImg}></img>
        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
    </section>
  )
}

export default Hero
