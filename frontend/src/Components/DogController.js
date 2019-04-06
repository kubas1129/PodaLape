import React, { Component } from 'react';
import ShelterContentWrapper from "./ShelterContentWrapper";
import SideBar from "./SideBar";
//const axios = require('axios');

class DogController extends Component{

    constructor(props) {
        super(props);

        this.state = {
            breed: '',
            age: '',
            gender: '',
            weight: '',
            sterilised: '',
        };

        this.input = [
            <input type="text" name="breed" onChange={this.onChange}/>,
            <input type="number" min="0" max="20" name="age" onChange={this.onChange}/>,
            <select name="gender" onChange={this.onChange}>
                <option>Pies</option>
                <option>Suczka</option>
            </select>,
            <input type="number" min="1" max="100" name="weight" onChange={this.onChange}/>,
            <div>
                <input type="radio" id="sterilised1" name="sterilised" value={true} checked onChange={this.onChange}>
                </input>
                <label htmlFor="sterilised1">Tak</label>
                <input id="sterilised2" type="radio" name="sterilised" value={false} onChange={this.onChange}>
                </input>
                <label htmlFor="sterilised2">Nie</label>
            </div>,
            <input type="submit" value="Sprawdz"/>
        ];

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    onSubmit(event){
        event.preventDefault();
        console.log(this.state);
    }

    componentDidMount(){
        console.log("Dogs retreived")
        //axios.get("pieski");
    }

    render(){

        return(
            <div>
                <SideBar form={this.input} onSubmit={this.onSubmit}/>
            </div>
        )
    }


}



export default DogController;