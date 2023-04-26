import React, { useEffect, useState } from "react";
import axios from 'axios';

function DataFetchingFromAPI() {

    const [data,setData] = useState([]);

    useEffect(
        () => {
            axios
            .get('https://jsonplaceholder.typicode.com/posts/')
            .then(response => {
                setData(response.data)
            })
            .catch(err =>{
                console.log(err);
            })
        },
        []
    )

    return(
        <div>
            <h3> Post-Data length:- {data.length} , Below post title list :-</h3>
            <ul>
                {
                    data.map( post => {
                        return <li key={post.id}> {post.id} :- {post.title} </li>
                    })
                }
            </ul>
        </div>
    )
    
}

export default DataFetchingFromAPI;