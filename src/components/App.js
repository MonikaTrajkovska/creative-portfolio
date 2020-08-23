import React from 'react'
import './App.css'
import { Portfolio } from './Portfolio/Portfolio'
// import {SideNav} from './SideNav/SideNav'
import {about} from '../constants/about'
import {skills} from './../constants/skills'
import {projects} from './../constants/Projects'
import {education} from './../constants/education'

class  App extends React.Component{
    constructor(){
        super()
        this.state={
            selectedSection:"",
            selectedHeading:"",
            selectedQuote:"",
            about:null,
            skills:null,
            projects:null,
            education:null,
            
        }
    }
    componentDidMount(){
        this.setState({
            selectedSection:"about",
            selectedSection:"education",
            education,
            about,
            skills,
            projects,
            
            selectedHeading:about.heading,
            selectedQuote:about.quote
        })
    }

    handleSectionClick=(sectionName)=>{
       this.setState({
        selectedSection:sectionName,
        
        selectedHeading:this.state[sectionName].heading,
        selectedQuote:this.state[sectionName].quote
    })
}
    render(){
        return(
            <div className="App">
             <Portfolio
             about={this.state.about}
             skills={this.state.skills}
             education={this.state.education}
             selectedSection={this.state.selectedSection}
             selectedHeading={this.state.selectedHeading}
             selectedQuote={this.state.selectedQuote}
             projects={this.state.projects}
              handleSectionClick={this.handleSectionClick}/>
             {/* <SideNav/> */}
            </div>
        )
    }
}
export default App