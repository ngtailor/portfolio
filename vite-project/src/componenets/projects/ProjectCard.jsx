import React from 'react'
import {imageUrl} from '../../Utils.js';
import style from './projectCard.module.css'

const ProjectCard = ({project}) => {
  return (
    <div className={style.container}>
    <img src={imageUrl(project.imageSrc)} alt={`image of ${project.title}`} className={style.image}></img>
    <h3 className={style.title}>{project.title}</h3>
    <p className={style.description}>{project.description}</p>
    <ul className={style.skills}>
        {project.skills.map((skill,id)=>(
      <li key={id} className={style.skill}>{skill}</li>
    ))}
    </ul>
    <div className={style.links}>
      <a href={project.demo} className={style.link}>Demo</a>
      <a href={project.source} className={style.link}>Source</a>
    </div>
</div>
  )
}

export default ProjectCard
