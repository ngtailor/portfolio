import React from 'react';
import styles from './experience.module.css'
import Skills from '../../data/skills.json';
import History from '../../data/history.json'
import {imageUrl} from '../../Utils.js';

const Experience = () => {
  return (
  <section className={styles.container} id="experience">
    <h2 className={styles.title} >Experience</h2>
    <div className={styles.content}>
        <div className={styles.Skills}>
            {
                Skills.map((skill,id)=>{
                    return(
                        <div key={id} className={styles.skill}>
                            <div className={styles.imageContainer}>
                                <img src={imageUrl(skill.imageSrc)} alt={skill.title}></img>
                            </div>
                            <p>{skill.title}</p>

                        </div>
                    )
                })
            }
        </div>
        <ul className={styles.history}>
            {
                History.map((historyItem,id)=>{
                    return(
                        <li key={id} className={styles.historyItem}>
                            <img src={imageUrl(historyItem.imageSrc)} alt={historyItem.role}></img>
                            <div className={styles.historyItemDetails}>
                                <h3>{`${historyItem.role},${historyItem.organisation}`}</h3>
                                <p>{`${historyItem.startDate}-${historyItem.endDate}`}</p>
                                <ul>
                                    {historyItem.experiences.map((exp,id)=>{
                                        return(
                                        <li key={id}>{exp}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                    )
                })
            }

        </ul>
    </div>
  </section>
  )
}

export default Experience
