import React, { Component } from "react";
import CounterButton from "./components/counterButton/CounterButton";
import Counter from "./components/counter/Counter";
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Counter />
            </div>
        );
    }
}

export default App;
