import React, { Component } from 'react'

class ClassMouse_useEffect2 extends Component {
  
    constructor(){
        super();
        this.state = {
            X : 0,
            Y : 0
        }
    }

    logMousePosition = (event) =>{
        this.setState({
            X : event.clientX ,
            Y : event.clientY
            })
    }

    componentDidMount(){
        window.addEventListener('mousemove',this.logMousePosition)
    }

    render(){
        return (
            <div>
                <h2> X value:- {this.state.X} and Y :- {this.state.Y} </h2> 
            </div>
          )
    }
}

export default ClassMouse_useEffect2