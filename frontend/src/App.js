import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import DogController from "./Components/Controllers/DogController";
const axios = require('axios');

class App extends Component {

  render(){
    return (
        <div id="container">
            <TopBar/>
            <DogController/>
        </div>
    );
  }
}

export default App;
