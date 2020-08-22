import React from 'react'
import './App.css'
import { Portfolio } from './Portfolio/Portfolio'
// import {SideNav} from './SideNav/SideNav'

class  App extends React.Component{
    constructor(){
        super()
        this.state={
            selectedSection:"",
        }
    }

    handleSectionClick=()=>{
        alert('Bitton clik')
    }
    render(){
        return(
            <div className="App">
             <Portfolio handleSectionClick={this.handleSectionClick}/>
             {/* <SideNav/> */}
            </div>
        )
    }
}
export default App