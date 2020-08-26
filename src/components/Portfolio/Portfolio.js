import React from 'react'
import './portfolio.css'
import  {SideNav}  from '../SideNav/SideNav'
import { SectionContainer } from '../Section/SectionContainer'

export const Portfolio=({ handleClick,about,skills,selectedSection,selectedHeading,projects,education})=>{

    return(
        <div className='portfolio'>
            <div className='sidenav-container'> 
            <SideNav  handleClick={ handleClick}/>
          
          
          
            </div> 
        <div className='main-section-container'>
           <SectionContainer
            about={about}
            education={education}
            skills={skills}
            projects={projects}
            selectedSection={selectedSection}
            selectedHeading={selectedHeading}
            />
        </div>
        </div>
    )
}