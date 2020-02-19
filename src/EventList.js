import React, { Component } from 'react';
import Event from './Event';
import { WarningAlert } from './Alert';


class EventList extends Component {
    
    state = {
        warnText: "No Events to display for this city, please select some other city.",
    } 

    render() {
        return (
            <div className="cityEvents">
                <ul className="EventList">
                    {this.props.events.map(event => 
                    <li key={event.id}>
                        <Event event={event} />
                    </li>
                    )}
                </ul>
                { this.props.events.length === 0 && <WarningAlert  text={this.state.warnText}/>}
            </div>
        );
    }
}

export default EventList;