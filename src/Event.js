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
        return (
            <div className="Event">
                <div className="less">
                    <p className="name">{event.name}</p>
                    <p className="date"><span>On </span>{event.local_date}
                        <span> @ </span>{event.local_time}
                    </p>
                    { event.rsvp_limit > 0 && <ResponsiveContainer height={180}>
                        <PieChart width={150} height={150}>
                        <Legend align="left"/>
                            <Pie data={this.getCount()} 
                                cx={100} cy={75} innerRadius={40} outerRadius={50} label>
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
                        <p className="groupName"><span>Name: </span>{event.group.name}</p>
                        <p className="location"><span>Where: </span>{event.group.localized_location}</p>
                        <p className="location">
                            <a href={event.link} target="_blank"><span>More about the event</span></a>
                        </p>
                    </div>
                }
                <button className="details" onClick={() => this.detailsClicked()}>Details</button>
            </div>
        );
    }
}
export default Event;