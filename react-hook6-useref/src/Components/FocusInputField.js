import React, { useEffect, useRef, useState } from "react";

// when Login page lodding on browser that time focus on useename field
function FocusInputField() {

    const [userName , setUserName] = useState('')
  const inputRef = useRef(null);

  useEffect(
    () => { inputRef.current.focus();}
    , []
  )

  return (
    <div>
      UserName:-
       <input
        type="text" 
        value ={userName} 
        ref={inputRef}
        onChange={ event => setUserName(event.target.value)}
      ></input>
      <p> username is :- {userName} </p>
    </div>
  );
}

export default FocusInputField;
