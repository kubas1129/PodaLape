import React, { Component } from 'react';
import DogForm from "../Form/DogForm";
import './styles/styles.css';
import shelter1 from "./images/shelter1_thumb.png"
import shelter2 from "./images/shelter2_thumb.png"

class ShelterView extends Component{

    constructor(props){
        super(props);

        this.state = {
            shelter: {dogs: []},
            length: 0,
            image: ""
        }

    }

    componentDidMount() {
        const {match: {params}} = this.props;

        const self = this;
        const id = this.props.match.params.shelterId

        fetch("http://localhost:8090/shelter/" + id).then(function(response){
            response.json().then(function(data){
                self.setState({shelter: data, length: data.dogs.length, image: data.id_shelter % 2 === 0 ? shelter1 : shelter2});

            });
        }).catch((error) => console.log(error));

    }

    render(){
        return(
            <div id="shelter-details">
                <div id="shelter-content">
                    <h2>{this.state.shelter.name_shelter}</h2>
                    <img src={this.state.image} alt="shelter" />
                    <p>{this.state.shelter.city}</p>
                    <b>Dostępne psy: </b> {this.state.length}
                        <ul>
                            {this.state.shelter.dogs.map((dog, index) => { return (
                                <li key={index}><span><b>{dog.name}</b>{" (" + dog.breed + ", " + dog.age + " lat(a), " + dog.gender + ")"}</span><button>Adoptuj</button></li>
                            )
                            })}
                        </ul>


                </div>
               <DogForm/>
            </div>
        )
    }
}

export default ShelterView;