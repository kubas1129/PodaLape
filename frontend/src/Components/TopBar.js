import React, { Component } from 'react';
//const axios = require('axios');
import "../Styles/styles.css";
import logo from '../Resources/dogpawheart_logo_white.png';
import logout from '../Resources/button_logout.svg';

class TopBar extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <header>
                <div id="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <nav>
                    <ul>
                        <li> Psy </li>
                        <li> Schroniska </li>
                        <li> O nas </li>
                    </ul>
                </nav>
                <div id="logout-section">
                    <img src={logout} alt="logout"/>
                </div>
            </header>
        )
    }
}

export default TopBar;