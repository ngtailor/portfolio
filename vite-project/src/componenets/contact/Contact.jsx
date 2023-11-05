import React from 'react'
import style from './contact.module.css';
import {imageUrl} from '../../Utils.js';

const Contact = () => {
  return (
    <footer id='contact' className={style.container}>
        <div className={style.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>

        </div>
        <ul className={style.links}>
            <li className={style.link}>
                <img src={imageUrl('contact/emailIcon.png')} alt='Email icon'></img>
                <a href='mailto:ngtailor7071@gmail.com'>ngtailor7071@gmail.com</a>
            </li>
            <li className={style.link}>
                <img src={imageUrl('contact/linkedinIcon.png')} alt='Linkedin icon'></img>
                <a href='https://www.linkedin.com/in/nageshwer-tailor-7141011a0/'>Linkedin Profile</a>
            </li>
            <li className={style.link}>
                <img src={imageUrl('contact/githubIcon.png')} alt='Git icon'></img>
                <a href='https://github.com/ngtailor'>Github Profile</a>
            </li>
        </ul>
      
    </footer>
  )
}

export default Contact
