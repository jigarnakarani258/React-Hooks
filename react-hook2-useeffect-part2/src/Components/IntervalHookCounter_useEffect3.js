import React, { useState,useEffect } from 'react'

function IntervalHookCounter_useEffect3() {
  
    const [ count , setCount ] = useState(0);

    const AutoIncrementCounter = () =>{
        setCount( prevCount => prevCount+ 1 )
    }

    useEffect(
        () => {
            const Interval = setInterval( AutoIncrementCounter , 1000 ) 
            return () => {
                clearInterval(Interval);
            }
        },
        [count]
    )

    return (
        <div>
            <h2> Count value:- {count} </h2> 
        </div>
        )
    
}

export default IntervalHookCounter_useEffect3