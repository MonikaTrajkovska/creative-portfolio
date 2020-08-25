// import React from 'react'

// // import './about.css'
// import {education} from '../../constants/education'
// export const Education=({props})=>{
// return(
//     <div className="about-container">
//         <h5><i class="fas fa-angle-right"></i>  {education.bio}</h5>
//        <p>{education.description}</p> 
//        <h5><i class="fas fa-angle-right"></i>  {education.marketing}</h5>
//        <p>{education.skill}</p> 
//        <h5><i class="fas fa-angle-right"></i>  {education.faculty}</h5>
//        <p>{education.faculty_description}</p> 
//     </div>
// )
// }
import React from 'react'
 import {education} from './../../constants/education'
 import { EducationCard } from '../Education/EducationCard'
 import './../Skills/Skills.css'

export const Education=(props)=>{
    return(

          
        <div className="skills-container">
            
          
          <h4>SEMOS EDUCATION,Skopje,North Macedonia</h4>
           <div className="industry-skill-container">
       {
          education.semos.map(educations=> <EducationCard key={educations} education={educations}/>)
          
       }
  </div> 
        <h4>Digital Marketing Academy “Creative Hub</h4>
        <div className="industry-skill-container">
       {
          
            education.marketing.map(educations=> <EducationCard key={educations} education={educations}/>)
            
         
          
       }
    </div>
     
       <h4>Faculty of Philology “Blaze Koneski”-University “St. Cyril and Methodius” Skopje</h4>
       <div className="industry-skill-container">  
       {
          education.faculty.map(educations=> <EducationCard key={educations} education={educations}/>)
          
       }
      </div> 
          </div>

    )
}