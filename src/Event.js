import React, { Component } from 'react';

class Event extends Component {
    state = {
        showHideFlag: false,
        events: [
            {
                id: '267887413',
                name: 'Lower Manhattan and Brooklyn Night Photography Workshop',
                yes_rsvp_count: 1
            }
        ]
    } 

    detailsClicked = () => {
        if (this.state.showHideFlag === false ) {
            this.setState({ 
                showHideFlag: true,
                events: [
                    {
                        id: '267887413',
                        name: 'Lower Manhattan and Brooklyn Night Photography Workshop',
                        yes_rsvp_count: 1,
                        group: {
                            name: 'Philadelphia Travel Photography',
                            urlname: 'Philadelphia-Travel-Photography',
                            who: 'Photographers',
                            localized_location: 'Philadelphia, PA',
                        },
                        link: 'https://www.meetup.com/Philadelphia-Travel-Photography/events/267887413/',
                        description: '<p>Join for a fun afternoon and evening photography workshop.</p>',
                        visibility: 'public',
                    }
                ]
             });
        } else {
            this.setState({ 
                showHideFlag: false,
                events: [
                    {
                        id: '267887413',
                        name: 'Lower Manhattan and Brooklyn Night Photography Workshop',
                        yes_rsvp_count: 1
                    }
                ]
            });
        }
    }

    render() {
        return (
            <div className="Event">
                <ul className="events">
                    {this.state.events.map(event => 
                        <li key={event.id}>{event.name}</li>
                    )}
                    <button className="details" onClick={() => this.detailsClicked()}>Details</button>
                </ul>
            </div>
        );
    }
}
export default Event;