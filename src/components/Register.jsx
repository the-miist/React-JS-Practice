import React from "react"

export default class Register extends React.Component {

    render() {

        return(
            <>
                <h1>This is register page</h1>
                <p>Hi {this.props.name}, Please register!</p>
            </>
        )
    }

}