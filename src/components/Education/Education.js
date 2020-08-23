import React from 'react'

// import './about.css'
import {education} from '../../constants/education'
export const Education=({props})=>{
return(
    <div className="about-container">
        {education.bio}
        <p><b>Resume</b><a href={education.resume}>Resume</a></p>
    </div>
)
}
