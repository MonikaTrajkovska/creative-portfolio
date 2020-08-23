import React from 'react'
 import {skills} from './../../constants/skills'
 import { SkillCard } from '../SkillCard/SkillCard'
import './Skills.css'

export const Skills=(props)=>{
    return(
        <div className='skills-container'>
            <h1>Front-end</h1>
            <div className="industry-skill-container">
       {
          skills.frontend.map(skill=> <SkillCard key={skill} skill={skill}/>)
          
       }
        <h1>Back-end</h1>
            <div className="industry-skill-container">
       {
          skills.backend.map(skill=> <SkillCard key={skill} skill={skill}/>)
          
       }
       </div>
       <h1>Concept and skills</h1>
            <div className="industry-skill-container">
       {
          skills.concept.map(skill=> <SkillCard key={skill} skill={skill}/>)
          
       }
       </div>
            </div>
        </div>
    )
}