import React, { Component } from 'react';

class Event extends Component {
    state = {
        showHideFlag: false,
        events: [
            {
                created: 1578946208000,
                duration: 25200000,
                id: '267887413',
                name: 'Lower Manhattan and Brooklyn Night Photography Workshop',
                date_in_series_pattern: false,
                status: 'upcoming',
                time: 1583092800000,
                local_date: '2020-03-01',
                local_time: '15:00',
                updated: 1578946208000,
                utc_offset: -18000000,
                waitlist_count: 0,
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
                        created: 1578946208000,
                        duration: 25200000,
                        id: '267887413',
                        name: 'Lower Manhattan and Brooklyn Night Photography Workshop',
                        date_in_series_pattern: false,
                        status: 'upcoming',
                        time: 1583092800000,
                        local_date: '2020-03-01',
                        local_time: '15:00',
                        updated: 1578946208000,
                        utc_offset: -18000000,
                        waitlist_count: 0,
                        yes_rsvp_count: 1,
                        group: {
                            created: 1414085495000,
                            name: 'Philadelphia Travel Photography',
                            id: 17816862,
                            join_mode: 'open',
                            lat: 39.959999084472656,
                            lon: -75.1500015258789,
                            urlname: 'Philadelphia-Travel-Photography',
                            who: 'Photographers',
                            localized_location: 'Philadelphia, PA',
                            state: 'PA',
                            country: 'us',
                            region: 'en_US',
                            timezone: 'US/Eastern'
                        },
                        link: 'https://www.meetup.com/Philadelphia-Travel-Photography/events/267887413/',
                        description: '<p>Join for a fun afternoon and evening photography workshop.</p>',
                        visibility: 'public',
                        member_pay_fee: false
                    }
                ]
             });
        } else {
            this.setState({ 
                showHideFlag: false,
                events: [
                    {
                        created: 1578946208000,
                        duration: 25200000,
                        id: '267887413',
                        name: 'Lower Manhattan and Brooklyn Night Photography Workshop',
                        date_in_series_pattern: false,
                        status: 'upcoming',
                        time: 1583092800000,
                        local_date: '2020-03-01',
                        local_time: '15:00',
                        updated: 1578946208000,
                        utc_offset: -18000000,
                        waitlist_count: 0,
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