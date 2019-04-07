import React, {Component} from "react";
import shelters from "./mockdata/shelters";
import SideBar from "../SideBar/SideBar";
import Gallery from "../Gallery/Gallery";
import './styles/styles.css';
//const axios = require('axios');

class ShelterController extends Component{

    constructor(props){
        super(props);

        this.state = {
            name_shelter: "",
            city: "",
            limit: 6,
            shelters: {header: "Schroniska", type: "Shelters", content: shelters.slice(0,6)}
        };


        this.form =
        {header: "Znajdź najbliższe schronisko", inputs: [
            {input: <input type="text" name="name_shelter" onChange={this.onChange}/>, label: "Nazwa: "},
            {input: <input type="text" name="city" onChange={this.onChange}/>, label:"Miasto: "},
            ]
            //{input: <input type="text" name="name_shelter" onChange={this.onChange}/>, label:"Odległość: "}]};
        };

        this.onChange = this.onChange.bind(this);
        this.expand = this.expand.bind(this);
    }

    /*
    componentWillMount(){
        fetch("http://localhost:8090/dog/").then(function(response){
            console.log(response);
        }).catch((error) => console.log(error));
    }*/

    onChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        const self = this;

        this.setState({
            [name]: value
        },function(){

            self.filter();

        });
    };

    filter(){

        const self = this;

        const filtered = shelters.filter(function (shelter) {
            const cityFilter =shelter.city.toLowerCase().indexOf(self.state.city.toLowerCase()) >= 0;
            const shelterFilter = shelter.name_shelter.toLowerCase().indexOf(self.state.name_shelter.toLowerCase()) >= 0;

            return cityFilter && shelterFilter;
        });

        this.setState({shelters: {header: "Schroniska:", type: "Shelters", content: filtered.slice(0, this.state.limit)}});
    }

    expand(){
        const self = this;
        this.setState({limit: this.state.limit + 6}, function(){
            this.setState({shelters: {header: "Schroniska", type: "Shelters", content: shelters.slice(0, this.state.limit)}}, function(){
                self.filter();
            })
        });

    }

    render(){
        return (
            <div id="content-container">
                <SideBar form={this.form}/>
                <Gallery content={this.state.shelters} expand={this.expand}/>
            </div>
        )
    }
}

export default ShelterController;