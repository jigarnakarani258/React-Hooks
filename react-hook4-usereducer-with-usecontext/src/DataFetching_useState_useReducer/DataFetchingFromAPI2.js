import React, { useEffect, useReducer } from "react";
import axios from 'axios';

// DataFetchingFromAPI2 usind useReducer and useEffect Hook

const initialState = {
    loading : true,
    post : {} ,
    error : ''
};

const reducer = (state , action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                post : action.payload ,
                error : ''
            }
        case 'FETCH_ERROR':
            return {
                loading : false,
                post : {} ,
                error : 'SomeThing Went wrong!!!!'
            }
    
        default:
           return state ;
    }

}
function DataFetchingFromAPI2() {

    const [state,dispatch] = useReducer(reducer,initialState);

    useEffect(
        () => {
            axios
            .get('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => {
                dispatch({ type : 'FETCH_SUCCESS' , payload : response.data});
            })
            .catch(err =>{
                dispatch({ type : 'FETCH_ERROR' });
            })
        },
        []
    )

    return(
        <div>
            <p> 
            {state.loading ? 'Result:- Loading...'    : `Result:- ${state.post.title}`  }
            {state.error   ? `Error:- ${state.error}` :  null}
            </p>
        </div>
    )
    
}

export default DataFetchingFromAPI2;