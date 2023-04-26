import React, { useEffect, useState } from "react";
import axios from 'axios';

function Datafetching_using_parameter() {

    const [post,setPost] = useState([]);
    const [postId,setPostId] = useState(1);
    const [postIdFromButton,setPostIdFromButton] = useState(1);

    const onClickButtonForGetPostID = () => {
        setPostIdFromButton(postId)
    }
    useEffect(
        () => {
            axios
            .get(`https://jsonplaceholder.typicode.com/posts/${postIdFromButton}`)
            .then(response => {
                setPost(response.data)
            })
            .catch(err =>{
                console.log(err);
            })
        },
        [postIdFromButton]
    )

    return(
        <div>
            <input 
                type="text"
                value={postId}
                onChange={(event) => setPostId(event.target.value)}
            ></input>
            <button onClick={() => onClickButtonForGetPostID()}>Get postId data</button>
            <h2>{post.title}</h2>
            <p>{post.userid}</p>
            <p>{post.body}</p>
        </div>
    )
}

export default Datafetching_using_parameter;