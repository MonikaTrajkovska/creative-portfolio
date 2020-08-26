import React from 'react'
import './sidenav.css'
 import Profile from '../assets/Profile.JPEG'


export const SideNav=({ handleClick})=>{
    return(
       
        <div >
           <img className='picture' src={Profile} alt='profile'/>  
          <h2 className="name">Monika Trajkovska Mladenovski</h2>
          <p className="subtitle">Web Developer</p>
          <div className="sections">
              <p className="sections-element" onClick={()=> handleClick("about")}>About Me</p>
              <p className="sections-element" onClick={()=> handleClick("skills")}>Skills</p>
              <p className="sections-element"onClick={()=> handleClick("projects")} >Projects</p>
              <p className="sections-element"onClick={()=> handleClick("education")} >Education</p>
          </div>
       </div>
    )
}