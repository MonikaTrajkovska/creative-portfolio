import React from 'react'
import './portfolio.css'
import  {SideNav}  from '../SideNav/SideNav'

export const Portfolio=({ handleSectionClick})=>{

    return(
        <div className='portfolio-container'>
            <div className='sidenav-container'> 
            <SideNav  handleSectionClick={ handleSectionClick}/>
          
          
          
            </div> 
        <div className='main-section-container'>
            <h1>Main Section</h1>
        </div>
        </div>
    )
}