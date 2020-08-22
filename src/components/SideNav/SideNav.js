import React from 'react'
import './sidenav.css'
 import Profile from '../assets/Profile.JPEG'


export const SideNav=({ handleSectionClick})=>{
    return(
       
        <div >
           <img className='avatar' src={Profile} alt='avatar'/>  
          <h2 className="main-name">Monika Trajkovska Mladenovski</h2>
          <p className="subtitle">Web Developer</p>
          <div className="sections-list">
              <p className="sections-list-element" onClick={()=> handleSectionClick("about")}>About Me</p>
              <p className="sections-list-element" onClick={()=> handleSectionClick("skills")}>Skills</p>
              <p className="sections-list-element"onClick={()=> handleSectionClick("projects")} >Projects</p>
          </div>
       </div>
    )
}