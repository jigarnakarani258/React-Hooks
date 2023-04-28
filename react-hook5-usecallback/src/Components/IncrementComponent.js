import React from "react";

function IncrementComponent(props) {

    console.log(`Rendering Increment Component - ${props.children}`);
    return (
        <div>
            <button onClick={props.onClickHandlarFun}>
                {props.children}
            </button>
        </div>
    )
}

export default React.memo(IncrementComponent);