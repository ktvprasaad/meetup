import React, { Component } from 'react';

class Event extends Component {
    state = {
        showHideFlag: false,
    } 

    detailsClicked = () => {
        if (this.state.showHideFlag === false ) {
            this.setState({ 
                showHideFlag: true,
             });
        } else {
            this.setState({ 
                showHideFlag: false
            });
        }
    }

    render() {
        const event = this.props.event;
        return (
            <div className="Event">
                <div className="less">
                    <p className="date">{event.local_date}</p>
                    <p className="time">{event.local_time}</p>
                    <p className="name">{event.name}</p>
                </div>
                {this.state.showHideFlag && 
                    <div className="more">
                        <p className="groupName">{event.group.name}</p>
                        <p className="location">{event.group.localized_location}</p>
                    </div>
                }
                <button className="details" onClick={() => this.detailsClicked()}>Details</button>
            </div>
        );
    }
}
export default Event;