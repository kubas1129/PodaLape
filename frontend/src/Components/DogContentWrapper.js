import React, { Component } from 'react';
//const axios = require('axios');

class DogContentWrapper extends Component{

    constructor(props) {
        super(props);

        this.input = [
            <input type="text" name="race"/>,
            <input type="number" min="0" max="20" name="age"/>,
            <select name="gender">
                <option>Pies</option>
                <option>Suczka</option>
            </select>,
            <input type="number" min="1" max="100" name="weight"/>,
            <div>
                <input type="radio"  name="sterilised" value="huey" checked>
                    <label htmlFor="huey">Tak</label>
                </input>
                <input type="radio" name="sterilised" value="dewey">
                    <label htmlFor="dewey">nie</label>
                </input>
            </div>
        ]
    }

    render(){

        return(
            <div>
                Dogcontent
            </div>
        )
    }


}



export default DogContentWrapper;