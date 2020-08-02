import React, { Component } from "react";
import "./Counter.css";
import CounterButton from "../counterButton/CounterButton";

class Counter extends Component {
    //Define the Initial state in the contructor
    //state => counter 0
    constructor() {
        super();
        this.state = {
            counter: 0,
        };
    }

    render = () => {
        return (
            <div className="counterButon">
                {/*<button onClick={this.increment}>+1</button>*/}
                <CounterButton by={100} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="count">{this.state.counter}</span>
                <div>
                    <button className="reset" onClick={this.reset}>
                        Reset
                    </button>
                </div>
            </div>
        );
    };

    reset = () => {
        this.setState({
            counter: 0,
        });
    };

    increment = (by) => {
        this.setState((prevState) => {
            return { counter: prevState.counter + by };
        });
    };

    decrement = (by) => {
        this.setState((prevState) => {
            return { counter: prevState.counter - by };
        });
    };
}

export default Counter;
