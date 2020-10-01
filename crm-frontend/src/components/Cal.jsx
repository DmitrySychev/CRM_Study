import React, { Component } from 'react';
import Calendar from 'react-calendar';
 

class Cal extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          onChange={(e) => this.props.date(e, this.state.date)}
          value={this.state.date}
          calendarType="US"
          textAlign='center'
          prev2Label={null}
          next2Label={null}
          
        />
      </div>
    );
  }
}

export default Cal;