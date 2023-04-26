import React, { Component } from 'react'

class IntervalClassCounter_useEffect3 extends Component {
  
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }
    AutoIncrementCounter = () =>{
        this.setState( prevState => ({
            count : prevState.count + 1
            }) 
        )
    }
    componentDidMount(){
       this.interval = setInterval(this.AutoIncrementCounter , 1000)
    }
    componentWillUnmount(){
        clearInterval( this.interval )
     }

    componentDidUpdate( prevProps , prevStates ){    
        console.log("componentDidUpdate");
    }

    render(){
        return (
            <div>
                <h2> Count value:- {this.state.count} </h2> 
            </div>
          )
    }
}

export default IntervalClassCounter_useEffect3