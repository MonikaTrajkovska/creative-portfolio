import React from 'react'
 import {skills} from './../../constants/skills'
 import { SkillCard } from '../SkillCard/SkillCard'
import './Skills.css'

export const Skills=(props)=>{
    return(
        <div className='skills-container'>
          
          <div className="industry-skill-container">
            
            <h4>Front-end</h4>
          
            
       {
          skills.frontend.map(skill=> <SkillCard key={skill} skill={skill}/>)
          
       }
   </div>
        <h4>Back-end</h4>
        <div className="industry-skill-container">
       {
          skills.backend.map(skill=> <SkillCard key={skill} skill={skill}/>)
          
       }
    </div>
     
       <h4>Concept and skills</h4>
       <div className="industry-skill-container">  
       {
          skills.concept.map(skill=> <SkillCard key={skill} skill={skill}/>)
          
       }
      </div>
           
        </div>
    )
}