import React from "react";

function Title(props) {

    console.log('Rendering title');
    return (
        <div>
            <h3> Title:- {props.title} </h3>
        </div>
    )
}

export default React.memo(Title);