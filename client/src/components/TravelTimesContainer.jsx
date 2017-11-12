import React, { Component } from 'react'
import TravelTime from "./TravelTime.jsx"

export default class TravelTimesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {timeModules: props.timeModules};
  }

  componentWillReceiveProps = (nextProps) => this.setState({timeModules: nextProps.timeModules});
    
  getTime = () => {
    var date = new Date();
    this.setState({time: date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()})
  }

  runClock = () => setInterval(this.getTime, 1000);

  componentWillMount = () => this.runClock()
    
  
   

  render() {
    return (
      <div className="TravelTimes">
          <div className="CurrentTime">{this.state.time}</div>
          {this.state.timeModules.map((mod, index) => <TravelTime {...mod} key={index} />) }
      </div>
    )
  }
}
