import React, { useState } from 'react'

function HookWithArray_useState3() {

    const [items , setItems] = useState([])

    const addItem = () => {
        setItems([ 
            ...items,
            {
                id : items.length ,
                number : Math.floor(Math.random()*10)
            }
        ])
    }
 
    return (
        <div>
            <button onClick={addItem} >Add a Number</button>
            <ul>
            {
                items.map( (item) => {
                    return <li key={item.id}> {item.number}</li>
                })
            } 
            </ul>
        </div>
  )
}

export default HookWithArray_useState3