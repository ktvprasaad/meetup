import React, { Component } from 'react';
import {
    PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer
  } from 'recharts';

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

    getCount = () => {
        const rsvpCounts = [];
        rsvpCounts.push({name: 'Reservations', value: this.props.event.yes_rsvp_count }, 
                        {name: 'Free Slots', value: ( this.props.event.rsvp_limit - this.props.event.yes_rsvp_count)});
        return rsvpCounts;
    }

    render() {
        const event = this.props.event;
        let colors = ['#ca9d82','#82ca9d'];
        console.log(event.rsvp_limit, event.yes_rsvp_count, event.rsvp_limit - event.yes_rsvp_count);
        return (
            <div className="Event">
                <div className="less">
                    <p className="name">{event.name}</p>
                    <p className="date">Date: {event.local_date}
                        <span className="time"> Time: {event.local_time}</span>
                    </p>
                    { event.rsvp_limit && <ResponsiveContainer height={180}>
                        <PieChart width={100} height={100}>
                        <Legend />
                            <Pie data={this.getCount()} 
                                cx={200} cy={80} innerRadius={40} outerRadius={60}>
                                	{
                                        this.getCount().map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={colors[index]}/>
                                        ))
                                    }
                            </Pie>
                            <Tooltip />
                        </PieChart>

                    </ResponsiveContainer> }
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