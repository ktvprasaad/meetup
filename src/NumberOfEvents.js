import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        displayCount: 32
    } 

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ displayCount: value });
    }

    render() {
        return (
            <div className="NumberOfEvents">
                <input
                    type="text"
                    className="number"
                    value={this.state.displayCount}
                    onChange={this.handleInputChanged}>
                        {this.displayCount}
                </input>
            </div>
        );
    }
}
export default NumberOfEvents;