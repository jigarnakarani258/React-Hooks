import React , {useContext} from "react";
import { countContext } from "../App";

function ComponentC() {

    const { dispatch } = useContext(countContext)

    return(
        <div>
            <h3> ComponentC:- </h3>
            <button onClick={ () => { dispatch({ type : 'Increment'})}}>Increment</button>
            <button onClick={ () => { dispatch({ type : 'Decrement'})}}>Decrement</button>
            <button onClick={ () => { dispatch({ type : 'Reset'})}}>Reset</button>
        </div>
    )
    
}

export default ComponentC;