import React, { useCallback, useState } from "react";
import Title from "./Title";
import IncrementComponent from "./IncrementComponent";

// useCallback Hook demo
function ParentComponent() {

    const [age, setAge] = useState(21);
    const [salary, setSalary] = useState(35000);


    const increaseAge = useCallback(
        () => {
            setAge(age + 1)
        }
        ,
        [age]
    )

    const increaseSalary = useCallback(
        () => {
            setSalary(salary + 1000)
        }
        ,
        [salary]
    )

    console.log('Rendering Parent Component');

    return (
        <div>
            <Title title={'useCallback Hook demo for Improve performance'} />

            <h3> Age:- {age} </h3>
            <IncrementComponent
                onClickHandlarFun={increaseAge}>
                Increment Age
            </IncrementComponent>

            <h3> Salary:- {salary} </h3>
            <IncrementComponent
                onClickHandlarFun={increaseSalary}>
                Increment Salary
            </IncrementComponent>

        </div>
    )

}

export default ParentComponent;