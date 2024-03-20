import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    // let counter = 0; 
        
    return(
        <>
            <h1>Counter: {counter}</h1>
            <button onClick={()=>{
                // counter = counter+1;
                setCounter(counter+1);
                console.log(counter);
            }
            }>+</button>
            <button onClick={()=>{
                // counter=counter-1;
                setCounter(counter-1);
                console.log(counter);
            }}>-</button>
        </>
    )

}