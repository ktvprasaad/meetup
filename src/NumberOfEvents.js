import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        displayCount: 32
    } 

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ displayCount: value });

        if (value < 1) {
            alert('Event Count cannot be less than 1');
        } else {
            console.log(value);
            this.props.updateEvents(null, null, value);
        }
    }

    render() {
        return (
            <div className="NumberOfEvents">
                <span>Show</span>
                <input
                    type="number"
                    className="number"
                    value={this.state.displayCount}
                    onChange={this.handleInputChanged}/>
                <span>Events</span>
            </div>
        );
    }
}
export default NumberOfEvents;