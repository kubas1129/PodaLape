import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import DogController from "./Components/Controllers/DogController";
import ShelterController from "./Components/Controllers/ShelterController";
const axios = require('axios');

class App extends Component {

  render(){
    return (
        <div id="container">
            <TopBar/>
            <ShelterController/>
        </div>
    );
  }
}

export default App;
