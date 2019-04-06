import React, { Component } from 'react';
import TopBar from './Components/TopBar';
import './Styles/styles.css';
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
      <TopBar/>
    );
  }
}

export default App;
