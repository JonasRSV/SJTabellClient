import React, { Component } from 'react'

export class TravelTime extends Component {
  render() {
    
    return (
      <div className="TravelTime">
        <div className="departure">
          <div className="departurei">{this.props.departure}</div>
        </div>
        <div className="stopsDestination">
          <div className="destination">
            <div className="destinationi">{this.props.destination}</div>
          </div>
          <div className="stops">
            <div className="stopsi"> </div>
          </div>
        </div>
      </div>
    )
  }
}

export default TravelTime
