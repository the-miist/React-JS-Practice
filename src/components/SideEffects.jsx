import { useEffect, useState } from "react"

export default function SideEffects() {

    // 1
    // useEffect(()=>{
    //     console.log("Hello")    
    // })

    // useEffect(()=>{
    //     console.log("Hello")    
    // }, [])


    const[counter1, setCounter1] = useState(0);
    const[counter2, setCounter2] = useState(0);

    useEffect(()=>{
        console.log("Hello")    
    }, [counter1])

    return(

        <>
            <h1>useEffect demo</h1>
            
            <h1>
            Counter: {counter1}
            </h1>
            <button onClick={()=>{
                setCounter1(counter1+1);
            }}>increment 1</button>

            <h1>
            Counter: {counter2}
            </h1>
            <button onClick={()=>{
                setCounter2(counter2+1);
            }}>increment 2</button>
        </>
    )
}