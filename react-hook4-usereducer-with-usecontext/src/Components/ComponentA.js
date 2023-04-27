import React, { useContext } from "react";
import ComponentB from "./ComponentB";
import { countContext } from "../App";

function ComponentA() {

    const { dispatch } = useContext(countContext)

    return(
        <div>
            <h3> ComponentA:- </h3>
            <button onClick={ () => { dispatch({ type : 'Increment'})}}>Increment</button>
            <button onClick={ () => { dispatch({ type : 'Decrement'})}}>Decrement</button>
            <button onClick={ () => { dispatch({ type : 'Reset'})}}>Reset</button>
            <ComponentB/>
        </div>
    )
    
}

export default ComponentA;