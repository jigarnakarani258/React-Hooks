import React, { useMemo, useState } from "react";
import Title from "../Title";

// useMemo Hook demo
function CounterComponent() {

    const [CounterOfDay, setCounterOfDay] = useState(0);
    const [CounterOfWeek, setCounterOfWeek] = useState(0);

    const increaseCounterOfDay = () => {
            setCounterOfDay(CounterOfDay + 1)
        }

    const DayDivideByWeek = useMemo(
        () => {
            let i=0 ;
            while (i<2000000000) {
                i++;
            }
            return (CounterOfDay % 7) === 0
        }
        ,
        [CounterOfDay]
    )
    
    const increaseCounterOfWeek = () => {
            setCounterOfWeek(CounterOfWeek + 1)
        }
        
    return (
        <div>
            <Title title={'useMemo Hook demo for Improve performance'} />

            <h3> CounterOfDay:- {CounterOfDay} </h3>
            <button
                onClick={increaseCounterOfDay }>
                Increment CounterOfDay
            </button>

            <p> 
                {
                    {DayDivideByWeek} ?
                       `Day Divide By 7 :- ${DayDivideByWeek}` : 
                       `CounterOfDay:- ${CounterOfDay}` 
                }
            </p>

            <h3> CounterOfWeek:- {CounterOfWeek} </h3>
            <button
                onClick={increaseCounterOfWeek}>
                Increment CounterOfWeek
            </button>

        </div>
    )

}

export default CounterComponent;