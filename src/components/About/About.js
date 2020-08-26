import React from 'react'
import './about.css'
import {about} from '../../containers/about'
export const About=(props)=>{
return(
    <div className="about">
        {about.bio}
  
       <p>Email: {about.email}</p> 
      
       <p>Phone number: {about.phone}</p> 
        <p>Location: {about.location}</p> 
        <div className="info">
        <p><b>Resume</b>: <a href={about.resume}>Resume</a></p>
       <p><b>GitHub</b>: <a href={about.github}>GitHub</a></p>
       <p><b>LinkedIn</b>: <a href={about.linkedin}>LinkedIn</a></p> 
        </div>
   
    </div>
)
}