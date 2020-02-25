import React, { Component } from 'react';
import moment from 'moment';
import {
  ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
} from 'recharts';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';
import { WarningAlert } from './Alert';


class App extends Component {
  _isMounted = false;

  state = {
    events: [],
    lat: null,
    lon: null,
    page: null,
    warnText: '',
  }

  componentDidMount() {
    this._isMounted = true;
    this.updateEvents();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  
  updateEvents = (lat, lon, page) => {
    // getEvents(lat, lon).then(events => this.setState({ events }));
    if (lat && lon) {
      getEvents(lat, lon, this.state.page)
      .then(events => {
          if ( this._isMounted ) {
            this.setState({ events, lat, lon });
          }
        });
    } else if (page) {
      getEvents(this.state.lat, this.state.lon, page)
      .then(events => {
        if ( this._isMounted ) {
          this.setState({ events, page })
        }
      });
    } else {
      getEvents(this.state.lat, this.state.lon, this.state.page)
      .then(events => {
        if ( this._isMounted ) {
          this.setState({ events })
        }
      });
    }
  }

  addWarning = () => {
      this.setState({ warnText: "No Internet!! Events are shown from cache & may not be up to date!" });
  }

  removeWarning = () => {
    this.setState({ warnText: '' });
  }

  countEventsOnADate = (date) => {
    let count = 0;
    for (let i = 0; i < this.state.events.length; i += 1) {
      if (this.state.events[i].local_date === date) {
        count += 1;
      }
    }
    return count;
  }
  
  getData = () => {
    const next7Days = []; // Create empty array for the next 7 days
    const currentDate = moment(); // Today
    // Loop 7 times for next 7 days
    for (let i = 0; i < 7; i += 1) {
      currentDate.add(1, 'days'); // Add 1 day to current date, currentDate changes
      const dateString = currentDate.format('YYYY-MM-DD'); // Format the date
      // Use the countEventsOnADate function to count #events on this date
      const count = this.countEventsOnADate(dateString);
      next7Days.push({ date: dateString, number: count }); // Add this date and number to the list
    }
    return next7Days;
  }

  render() {
    window.addEventListener('offline', this.addWarning);
    window.addEventListener('online', this.removeWarning);
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents}/>
        <NumberOfEvents updateEvents={this.updateEvents}/>
        <ResponsiveContainer className="grid" height={400}>
          <ScatterChart
            margin={{ 
              top: 20, right: 20, bottom: 20, left: 20,
            }}
          >
            <CartesianGrid />
            <XAxis type="category" dataKey="date" name="date" />
            <YAxis type="number" dataKey="number" name="number of events" allowDecimals={false}/>
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter data={this.getData()} dataKey="# of Events on Date" fill="#8884d8" />
          </ScatterChart>
        </ResponsiveContainer>
        <WarningAlert text={this.state.warnText}/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;