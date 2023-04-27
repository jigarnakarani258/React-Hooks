import React , {useContext} from "react";

import {userContext , chanelContext} from './ComponentA'

function ComponentC() {

    const user = useContext(userContext) ;
    const chanel = useContext(chanelContext);

    return(
        <div>
            <h2> useContext hook demo </h2>
            <div> {user} - {chanel} </div>
        </div>
    )
    
}

export default ComponentC;