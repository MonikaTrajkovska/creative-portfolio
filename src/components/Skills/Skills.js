import React from 'react'
 import {skills} from '../../containers/skills'
 import { SkillCard } from '../SkillCard/SkillCard'
import './Skills.css'

export const Skills=(props)=>{
    return(
        <div className="skills-container">
          
         
            
            <h4>Front-end</h4>
            <div className="skill-container">
            
       {
          skills.frontend.map(skill=> <SkillCard key={skill} skill={skill}/>)
          
       }
   </div>
        <h4>Back-end</h4>
        <div className="skill-container">
       {
          skills.backend.map(skill=> <SkillCard key={skill} skill={skill}/>)
          
       }
    </div>
     
       <h4>Concept and skills</h4>
       <div className="skill-container">  
       {
          skills.concept.map(skill=> <SkillCard key={skill} skill={skill}/>)
          
       }
      </div>
           
        </div>
    )
}