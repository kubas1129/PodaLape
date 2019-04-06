import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {
            responseString: "Welcome!"
    }
    }

    componentDidMount(){
        axios.get("localhost:8080").then((response) =>
        {
            console.log(response);
            //this.setState({responseString: response})
        }).catch((error) => alert(error));

    }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
            <h1>{this.state.responseString}</h1>
        </header>
      </div>
    );
  }
}

export default App;
