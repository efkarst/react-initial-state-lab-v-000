import React, { Component } from 'react';

export default class Bomb extends Component {
    constructor(props) {
        super(props)
        this.state = {
            secondsLeft: this.props.initialCount
        }
    }

    render() {
        let message = this.state.secondsLeft.toString() + " seconds left before I go boom!";

        if(this.state.secondsLeft == 0) {
            message = "Boom!"
        }

        return (
            <div>{message}</div>
        )
    }
}
