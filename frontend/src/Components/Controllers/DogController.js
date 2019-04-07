import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar";
import dogs from "./mockdata/dogs";
import Gallery from "../Gallery/Gallery";
import './styles/styles.css';
import TopBar from "../TopBar/TopBar";
const axios = require('axios');

class DogController extends Component{

    constructor(props) {
        super(props);

        this.state = {
            breed: '',
            age: '',
            gender: '',
            weight: '',
            city: '',
            name_shelter: '',
            dogs: {header: "Nasi podopieczni:", content: dogs.slice(0, 6), type: "Dogs"},
            limit: 6
        };

        this.form = {header: "Wybierz wymarzonego pupila", inputs: [
            {input: <input type="text" name="breed" onChange={this.onChange}/>, label: "Rasa: "},
            {input: <input type="number" min="0" max="20" name="age" onChange={this.onChange}/>, label: "Wiek: "},
            {input: <select name="gender" onChange={this.onChange}>
                    <option></option>
                    <option>Pies</option>
                    <option>Suczka</option>
            </select>, label: "Płeć: "},
            {input: <input type="number" min="1" max="100" name="weight" onChange={this.onChange}/>, label: "Waga: "},
            {input: <input type="text" name="city" onChange={this.onChange}/>, label:"Miasto: "},
            {input: <input type="text" name="name_shelter" onChange={this.onChange}/>, label:"Schronisko: "}]};
            /*{input: <div className="radio-box">
                    <span>
                <input type="radio" id="sterilised1" name="sterilised" value={true} checked onChange={this.onChange}>
                </input>
                        <label htmlFor="sterilised1">Tak</label></span>
                    <span>
                <input id="sterilised2" type="radio" name="sterilised" value={false} onChange={this.onChange}>
                </input>
                        <label htmlFor="sterilised2">Nie</label></span>
                </div>, label: "Wysterylizowany: "}
        ];*/

        this.onChange = this.onChange.bind(this);
        this.expand = this.expand.bind(this);
    }

    componentWillMount(){
        fetch("http://localhost:8090/dog/").then(function(response){
            console.log(response);
        }).catch((error) => console.log(error));
    }

    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const self = this;

       this.setState({
            [name]: value
        },function(){


           const upper = this.state.dogs.content.length;

           self.filter();

       });
    };

    filter(){

        const self = this;

        const filtered = dogs.filter(function (dog) {
            const ageFilter = self.state.age === '' ? true : self.state.age >= dog.age;
            const breedFilter = self.state.breed === '' ? true : dog.breed.toLowerCase().indexOf(self.state.breed.toLowerCase()) >= 0;
            const genderFilter = dog.gender.toLowerCase().indexOf(self.state.gender.toLowerCase()) >= 0;
            const weightFilter = self.state.weight === '' ? true : self.state.weight >= dog.weight;
            const cityFilter = dog.city.toLowerCase().indexOf(self.state.city.toLowerCase()) >= 0;
            const shelterFilter = dog.name_shelter.toLowerCase().indexOf(self.state.name_shelter.toLowerCase()) >= 0;

            return breedFilter && ageFilter && genderFilter && weightFilter && cityFilter && shelterFilter;
        });

        this.setState({dogs: {header: "Nasi podopieczni:", type: "Dogs", content: filtered.slice(0, this.state.limit)}});
    }

    expand(){
        const self = this;
        this.setState({limit: this.state.limit + 6}, function(){
            this.setState({dogs: {header: "Nasi podopieczni", type: "Dogs", content: dogs.slice(0, this.state.limit)}}, function(){
                self.filter();
            })
        });

    }


    render(){

        return(
            <div id="content-container">
                <SideBar form={this.form} onSubmit={this.onSubmit}/>
                <Gallery content={this.state.dogs} expand={this.expand}/>
            </div>
        )
    }


}



export default DogController;