import React from 'react'
import './SectionContainer.css'
import {About} from "./../About/About"
import {Skills} from './../Skills/Skills'
import { Project } from '../Project/Project'
import { Education } from '../Education/Education'
export const SectionContainer=({ handleSectionClick,about,skills,selectedSection,selectedHeading,selectedQuote,projects,education})=>{
    return(
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{selectedHeading}</h1>
                <p className="main-quote">{selectedQuote}</p>
            </div>
            <div className="section-component">
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