import React from "react"
import { useParams, useSearchParams } from "react-router-dom";

function Home(props) {

    // let [params] = useSearchParams();
    let {name, surname} = useParams();

    console.log(name, surname);

    return(
        <div>
            <h1>This is home page</h1>
            {/* <p>Welcome  {params.get("name")} {params.get("surname")} </p> */}
            <p>Welcome  {name} {surname} </p>
        </div>
    )
}

export default Home;