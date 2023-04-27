import React from "react";
import ComponentB from "./ComponentB";

const userContext = React.createContext();
const chanelContext = React.createContext();

function ComponentA() {
    return(
        <div>
            <userContext.Provider value='Jigar'>
                <chanelContext.Provider value='InfoTech'>
                    <ComponentB/>
                </chanelContext.Provider>
            </userContext.Provider>
        </div>
    )
    
}

export default ComponentA;
export {userContext , chanelContext}