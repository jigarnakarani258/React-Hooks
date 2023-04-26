import React, { useState } from 'react'

function HookCounter_useState1() {

    const [count , setCount] = useState(0)

    const IncrementByFive = () => {
      for(let i=0 ; i<5 ; i++){
        setCount(prevCount => prevCount + 1 )
      }
    }
  
    return (
    <div>

        <h2> Count value:- {count} </h2>  
        <button onClick={ () => { setCount(prevCount => prevCount + 1) } }>
          Increment
        </button>

        <button onClick={ () => { setCount(prevCount => prevCount - 1) } }>
          Decrement
        </button>

        <button onClick={ () => { setCount(0) } }>
          Reset
        </button>

        <button onClick={ () => { IncrementByFive() } }>
          IncrementByFive
        </button>
    </div>
  )
}

export default HookCounter_useState1