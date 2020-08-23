import React from 'react'
import './about.css'
import {about} from '../../constants/about'
export const About=(props)=>{
return(
    <div className="about-container">
        {about.bio}
    </div>
)
}