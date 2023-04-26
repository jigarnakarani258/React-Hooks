import React, { useState , useEffect} from 'react'

function HookCounter_useEffect1() {

    const [count , setCount] = useState(0)
    const [name , setName] = useState('')

    useEffect(
      () => { 
         console.log("update document title");
         document.title = `Clicks ${count} times..`
        },
      [count]
    )
  
    return (
    <div>
        <h2> Count value:- {count} </h2>  
        <div>
          Name :- 
          <input 
            type="text" 
            value={name} 
            onChange={(event) => {  setName(event.target.value) } }
          ></input>
        </div>
        <button onClick={ () => { setCount(prevCount => prevCount + 1) } }>
          Increment
        </button>
    </div>
  )
}

export default HookCounter_useEffect1