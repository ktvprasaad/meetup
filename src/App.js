import React, { Component } from 'react';
import './App.css';
import EventList from './EventList';
import CitySearch from './CitySearch';
// import Event from './Event';
import NumberOfEvents from './NumberOfEvents';
import { getEvents } from './api';

class App extends Component {
  _isMounted = false;

  state = {
    events: [],
    lat: null,
    lon: null,
    page: null,
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

  render() {
    return (
      <div className="App">
        <CitySearch updateEvents={this.updateEvents}/>
        <NumberOfEvents updateEvents={this.updateEvents}/>
        <EventList events={this.state.events}/>
      </div>
    );
  }
}

export default App;