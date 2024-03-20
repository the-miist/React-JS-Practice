import { Component } from "react";

export default class CounterClass extends Component {

    state = {
        counter: 0
    }

    render() {
        return(
        <>
            <h1>Counter: {this.state.counter}</h1>
            <button onClick={()=>{
               this.setState({counter:this.state.counter+1})
            }}>+</button>
            <button onClick={()=>{
              this.setState({counter:this.state.counter-1})
            }}>-</button>
        </>
        )
    }


}  