import React, { Component } from 'react'

class ClassCounter_useEffect1 extends Component {
  
    constructor(){
        super();
        this.state = {
            count : 0,
            name : ''
        }
    }

    IncrementCounter = () =>{
        this.setState( prevState => ({
            count : prevState.count + 1
            }) 
        )
    }

    componentDidMount(){
        document.title = `Clicks ${this.state.count} times..`
    }

    componentDidUpdate( prevProps , prevStates ){
        if(prevStates.count !== this.state.count){
            console.log("update document title");
            document.title = `Clicks ${this.state.count} times!!`
        }
    }

    render(){
        return (
            <div>
                <h2> Count value:- {this.state.count} and name :- {this.state.name} </h2> 
                <div>
                    Name :- 
                    <input 
                        type="text" 
                        value={this.state.name} 
                        onChange={(event) => {  this.setState( { name : event.target.value}) } }
                    ></input>
                </div> 
                <div>
                    <button onClick={ () =>  this.IncrementCounter() }>
                    Increment
                    </button>
                </div>
            </div>
          )
    }
}

export default ClassCounter_useEffect1