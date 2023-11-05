import React from 'react'
import style from './projects.module.css'
import Project from  '../../data/project.json'
import ProjectCard from './ProjectCard.jsx';

const Projects = () => {
  return (
    <section id='projects' className={style.container}>
        <h2 className={style.title}>Projects</h2>
        <div className={style.projects}>
            {Project.map((project,id)=>{
                return <ProjectCard key={id} project={project}/> 
            })}
        </div>
    </section>
  )
}

export default Projects
