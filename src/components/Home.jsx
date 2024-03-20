import React from "react"

function Home(props) {

    let name = "Hardik";

    console.log(props)
    // function getName() {
    //     return name;
    // }

    return(
        <div>
            <h1>This is home page</h1>
            <p>Welcome {props.details.fName} {props.details.lName}! Wassup!</p>
        </div>
    )
}

export default Home;