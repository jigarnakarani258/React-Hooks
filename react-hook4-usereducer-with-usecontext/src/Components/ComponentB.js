import React, { useContext } from "react";
import ComponentC from "./ComponentC";
import { countContext } from "../App";

function ComponentB() {

    const { dispatch } = useContext(countContext)

    return(
        <div>
            <h3> ComponentB:- </h3>
            <button onClick={ () => { dispatch({ type : 'Increment'})}}>Increment</button>
            <button onClick={ () => { dispatch({ type : 'Decrement'})}}>Decrement</button>
            <button onClick={ () => { dispatch({ type : 'Reset'})}}>Reset</button>
            <ComponentC/>
        </div>
    )
    
}

export default ComponentB;