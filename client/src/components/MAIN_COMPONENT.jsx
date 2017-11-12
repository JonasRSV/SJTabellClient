import React, { Component } from 'react';
import {render} from 'react-dom';
import TravelTimesContainer from "./TravelTimesContainer.jsx";
import axios from "axios";

const mockStop = {
  name: "UlfsTrädgård"
}

const mockModule = {
  Stops: {
    Stop: [mockStop, mockStop, mockStop, mockStop]
  },
  time: "12:1:1",
  direction: "Bålsta",
  stop: "Handen",
  name: "Pendeltåg"

}

const mockModules = [mockModule, mockModule, mockModule]

//Get Yer Own API KEYS
const ResRobotAPIKey = "";
const ResRobotsPlatsAPIKey = "";
const RealtidsInfoAPIKey = "";

const handenTerminalenId = "740098490"
const handenId = "740069465"

export default class MAIN_COMPONENT extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staticTimeModules: [],
      dynamicTimeModules: []
    }
  }


  componentWillMount = () => this.getTimeModules();

  getTimeModulesMock = () => this.setState({staticTimeModules: mockModules, dynamicTimeModules: mockModules});
    
  getTimeModules = () => {
    axios.get(`https://api.resrobot.se/v2/departureBoard?key=${ResRobotAPIKey}&id=${handenId}&format=json`).then(res => {
      this.setState({staticTimeModules: res.data.Departure});
    }).catch(error => {
      console.log("Unable to connect to SL resrobot api reason: " + error);
    })

    axios.get(`https://api.resrobot.se/v2/departureBoard?key=${ResRobotAPIKey}&id=${handenTerminalenId}&format=json`).then(res => {
      this.setState({staticTimeModules: res.data.Departure});
    }).catch(error => {
      console.log("Unable to connect to SL resrobot api reason: " + error);
    })
  }

  time2Value = time => {
    var time = time.split(":");

    var value = time[0] * 3600;
    value += time[1] * 60;
    value += time[2];

    return value;
  }

  formatModule = (staticM) => {

    staticM = staticM.map(mod => {
      console.log(mod);
      return {
        type: mod.name,
        destination: mod.direction.split("(")[0],
        departure: mod.time,
        stops: mod.Stops.Stop.map(stop => stop.name),
        station: mod.stop
      }
    });


    staticM = staticM.sort((mod1, mod2) => {return this.time2Value(mod1.departure) - this.time2Value(mod2.departure)});

    return staticM
  }

  render() {
    console.log(this.state);
    return (
      <div className="container"> 
        <TravelTimesContainer timeModules={this.formatModule(this.state.staticTimeModules)} />
      </div>
    )
  }
}
