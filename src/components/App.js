import React from 'react'
import './App.css'
import { Portfolio } from './Portfolio/Portfolio'
// import {SideNav} from './SideNav/SideNav'
import {about} from '../containers/about'
import {skills} from '../containers/skills'
import {projects} from '../containers/Projects'
import {education} from '../containers/education'

class  App extends React.Component{
    constructor(){
        super()
        this.state={
            selectedSection:"",
            selectedHeading:"",
            about:null,
            skills:null,
            projects:null,
            education:null,
            
        }
    }
    componentDidMount(){
        this.setState({
            selectedSection:"about",
           
            education,
            about,
            skills,
            projects,
            
            selectedHeading:about.heading,
            
        })
    }

    handleClick=(section)=>{
       this.setState({
        selectedSection:section,
        
        selectedHeading:this.state[section].heading,
       
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
            
             projects={this.state.projects}
              handleClick={this.handleClick}/>
             {/* <SideNav/> */}
            </div>
        )
    }
}
export default App