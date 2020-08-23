import React from 'react'
import {ProjectCard} from './../ProjectCard/ProjectCard'

import {projects} from './../../constants/Projects'
export const Project=({props})=>{
    return(
        <div className='projects-container'>
          
            <div className="industry-skill-container">
       {
          projects.projectList.map(project=> <ProjectCard key={project} project={project}/>)
          
       }
            </div>
        </div>
    )
}