import { useRef, useState } from "react";

export default function Counter() {
    // const [counter, setCounter] = useState(0);
    // let counter = 0; 

    const counterRef = useRef();
        
    return(
        <>
            <h1>Counter: </h1><h1 ref={counterRef}>0</h1>
            <button onClick={()=>{
                let c =  Number(counterRef.current.innerText);
                c = c+1;
                counterRef.current.innerText = c;
                // counter = counter+1;
                // setCounter(counter+1);
                // console.log(counter);
            }
            }>+</button>
            <button onClick={()=>{
                counterRef.current.innerText = Number(counterRef.current.innerText)-1;
                // counter=counter-1;
                // setCounter(counter-1);
                // console.log(counter);
            }}>-</button>
        </>
    )

}