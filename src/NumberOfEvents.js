import React, { Component } from 'react';

class NumberOfEvents extends Component {

    state = {
        displayCount: 32,
        error: false,
    } 

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ displayCount: value });

        if (value < 1) {
            this.setState({ error: true });
        } else {
            this.setState({ error: false });
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
                {this.state.error && <div className="error">Event count cannot be less than 1!</div>}
            </div>
        );
    }
}
export default NumberOfEvents;