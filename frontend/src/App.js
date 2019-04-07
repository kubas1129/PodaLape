import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import DogController from "./Components/Controllers/DogController";
import ShelterController from "./Components/Controllers/ShelterController";
import {Route, Redirect, Switch} from "react-router-dom";
import {BrowserRouter} from 'react-router-dom';
import DogForm from "./Components/Form/DogForm";
import ShelterView from './Components/Views/ShelterView'
const axios = require('axios');

class App extends Component {

  render(){
    return (
        <div id="container">
            <BrowserRouter >
                <TopBar/>
                <Switch>
                <Route path="/dogs" render={() => <DogController/>}/>
                <Route path="/shelters" render={() => <ShelterController/>}/>
                    <Route path="/shelter-details/:shelterId" component={ShelterView}/>
                <Redirect from='{*}' to='/dogs'/>
                </Switch>
            </BrowserRouter>
        </div>
    );
  }
}

export default App;
