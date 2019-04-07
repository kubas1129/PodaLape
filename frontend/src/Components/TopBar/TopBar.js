import React, { Component } from 'react';
import {Link} from 'react-router-dom';
//const axios = require('axios');
import "./styles/styles.css";
import logo from '../../Resources/dogpawheart_logo_white.png';
import logout from '../../Resources/button_logout.svg';

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
                        <li> <Link to="/dogs">Psy</Link> </li>
                        <li> <Link to="/shelters">Schroniska </Link></li>
                        <li> <Link to="/form">Oddaj Psa </Link></li>
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