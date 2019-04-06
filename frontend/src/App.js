import React, { Component } from 'react';
import TopBar from './Components/TopBar/TopBar';
import './Components/TopBar/styles/styles.css';
import DogContentWrapper from "./Components/DogController";
const axios = require('axios');

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            responseString: "Welcome!"
        }

    }

    componentDidMount() {
        axios.get("http://localhost:8090/").then((response) => {
            console.log(response);
            //this.setState({responseString: response})
        });
    }



  render(){
    return (
        <div id="container">
            <TopBar/>
            <DogContentWrapper/>
        </div>
    );
  }
}

export default App;
