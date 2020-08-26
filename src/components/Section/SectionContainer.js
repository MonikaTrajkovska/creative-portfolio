import React from 'react'
import './SectionContainer.css'
import {About} from "../About/About"
import {Skills} from '../Skills/Skills'
import { Project } from '../Project/Project'
import { Education } from '../Education/Education'
export const SectionContainer=({ handleClick,about,skills,selectedSection,selectedHeading,selectedQuote,projects,education})=>{
    return(
        <div className="section">
            <div className="section-heading">
                <h1 className="heading">{selectedHeading}</h1>
                
            </div>
            <div className="component">
                {
                   { about: <About/>,
                    skills:<Skills/>,
                    projects:<Project/>,
                    education:<Education/>
                   }[selectedSection]
                }
            </div>
        </div>
    )
}