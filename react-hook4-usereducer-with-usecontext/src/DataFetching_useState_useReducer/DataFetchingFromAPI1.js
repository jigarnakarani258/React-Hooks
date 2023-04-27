import React, { useEffect, useState } from "react";
import axios from 'axios';

// DataFetchingFromAPI1 usind useState and useEffect Hook
function DataFetchingFromAPI1() {

    const [loading,setLoading] = useState(true);
    const [post,setPost] = useState({});
    const [error,setError] = useState('');

    useEffect(
        () => {
            axios
            .get('https://jsonplaceholder.typicode.com/posts/2')
            .then(response => {
                setLoading(false);
                setPost(response.data);
                setError('');
            })
            .catch(err =>{
                setLoading(false);
                setPost({});
                console.log(err);
                setError('SomeThing Went wrong!!!!');
            })
        },
        []
    )

    return(
        <div>
            <p> 
            {loading ? 'Result:- Loading...'  : `Result:- ${post.title}`  }
            {error   ? `Error:- ${error}`     :  null}
            </p>
        </div>
    )
    
}

export default DataFetchingFromAPI1;