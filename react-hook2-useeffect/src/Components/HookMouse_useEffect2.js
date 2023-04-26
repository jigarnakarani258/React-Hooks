import React, { useState , useEffect} from 'react'

function HookMouse_useEffect2(){

    const [X , setX] = useState(0)
    const [Y , setY] = useState(0)

    const logMousePosition = (event) => {
        console.log('Mouse move event called');
        setX(event.clientX);
        setY(event.clientY)
      }

    useEffect(
      () => { 
        //Here add event code(ComponentDidMount and ComponentDidUpdate method code)
        console.log(` X value:- ${X} and Y :- ${Y}`);
        window.addEventListener('mousemove' ,logMousePosition )


        //return cleanup :- remove event code( ComponentWillUnmount method code)
        return () => {
          console.log('Component Unmount clean-up code');
          window.removeEventListener('mousemove' ,logMousePosition)
        }

        },
      []
    )
  
    return (
    <div>
        <h2> X value:- {X} and Y :- {Y} </h2> 
    </div>
    )
}

export default HookMouse_useEffect2