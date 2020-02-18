import React, { Component } from 'react';
import { WarningAlert, ErrorAlert } from './Alert';

class NumberOfEvents extends Component {

    state = {
        displayCount: this.props.events.length? this.props.events.length: 32,
    } 

    handleInputChanged = (event) => {
        const value = event.target.value;
        this.setState({ displayCount: value });

        if (value < 0 ) {
            this.setState({
                errorText: "Number shoud be at least 1.",
                warnText: '',
            });
        } else if (value == 0){
            this.setState({
                errorText: '',
                warnText: "No events to display for you have selected city.",
            });
            this.props.updateEvents(null, null, value);
        } else {
            this.setState({
                errorText: '',
                warnText: '',
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
                {this.state.displayCount === 0 || <WarningAlert text={this.state.warnText} />}
            </div>  
        );
    }
}
export default NumberOfEvents;