import { React, Component } from "react";

export default class Timer extends Component {

    constructor() {
        super();
    }
    
    intervalId = null;

    state = {
        time: 1,
        isGoing: false
    }

    componentDidMount() {

    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    handleStart = () => {
        this.setState({isGoing: true});

        this.intervalId = setInterval(() => {
            this.setState({time: this.state.time + 1});
        }, 1000);
    }

    handleStop = () => {
        clearInterval(this.intervalId);
        this.setState({isGoing: false});
    }

    render() {
        let btn = this.state.isGoing ? <button onClick={this.handleStop}>Стоп</button> : <button onClick={this.handleStart}>Старт</button>;

        return (
            <div>
                <p>{this.state.time}</p>
                {btn}
            </div>
        );
    }
}