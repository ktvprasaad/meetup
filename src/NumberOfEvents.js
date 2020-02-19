import React, { Component } from 'react';
import { ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

    state = {
        displayCount: 32,
    } 

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ displayCount: value });

        if (value < 1 ) {
            this.setState({
                errorText: "Number shoud be at least 1",
            });
        } else {
            this.setState({
                errorText: '',
            });
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
                <ErrorAlert text={this.state.errorText} /> 
            </div>
        );
    }
}
export default NumberOfEvents;