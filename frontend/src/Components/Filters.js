import React, { Component } from 'react';
//const axios = require('axios');

class Filters extends Component{

    constructor(props){
        super(props);
    }

    onChange(){

    }

    onSubmit(){

    }

    render(){
        return(
            <div id="filters">
                <form onSubmit={this.onSubmit} id="filters-form">

                </form>
            </div>
        )
    }
}