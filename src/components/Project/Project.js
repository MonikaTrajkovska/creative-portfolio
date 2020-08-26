import React from 'react'
import {ProjectCard} from './../ProjectCard/ProjectCard'

import {projects} from '../../containers/Projects'
export const Project=({props})=>{
    return(
        <div className='projects'>
          
            <div className="skill-container">
       {
          projects.projectList.map(project=> <ProjectCard key={project} project={project}/>)
          
       }
            </div>
        </div>
    )
}