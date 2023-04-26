import React, { useState , useEffect} from 'react'
import HookMouse_useEffect2 from './HookMouse_useEffect2';

function MouseContainer(){

    const [display , setDisplay] = useState(true);
  
    return (
    <div>
        <button onClick={ () => { setDisplay(!display) } }> 
        Display Mouse Move Cordinates
        </button> 
        {display && <HookMouse_useEffect2/>}
    </div>
    )
}

export default MouseContainer