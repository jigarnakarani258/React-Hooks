import React, { useState } from 'react'

function HookwithObject_useState2() {

    const [name , setName] = useState({ firstName : '' , lastName : ''})
 
    return (
        <form>
            firstName:-<input 
                type="text" 
                value={name.firstName}
                onChange={ (event) => setName({...name ,firstName : event.target.value }) }
            />
            lastName:-<input 
                type="text" 
                value={name.lastName}
                onChange={ (event) => setName({...name ,lastName : event.target.value }) }
            />
            <h2>  firstName :- {name.firstName}  lastName :- {name.lastName} </h2>
        </form>
  )
}

export default HookwithObject_useState2