import React, { Component } from 'react';
import DogForm from "../Form/DogForm";
import './styles/styles.css';

class ShelterView extends Component{

    constructor(props){
        super(props);

        this.state = {
            shelter: {dogs: []},
            length: 0
        }

    }

    componentDidMount() {
        const {match: {params}} = this.props;

        const self = this;
        const id = this.props.match.params.shelterId

        fetch("http://localhost:8090/shelter/" + id).then(function(response){
            response.json().then(function(data){
                self.setState({shelter: data, length: data.dogs.length});
            });
        }).catch((error) => console.log(error));

    }

    render(){
        return(
            <div id="shelter-details">
                <div id="shelter-content">
                    <h2>{this.state.shelter.name_shelter}</h2>
                    <p>{this.state.shelter.city}</p>
                    <p><b>Dostępne psy: </b> {this.state.length}
                        <ul>
                            {this.state.shelter.dogs.map((dog, index) => { return (
                                <li key={index}><span><b>{dog.name}</b>{" (" + dog.breed + ", " + dog.age + " lat(a), " + dog.gender + ")"}</span><button>Adoptuj</button></li>
                            )
                            })}
                        </ul>
                    </p>

                </div>
               <DogForm/>
            </div>
        )
    }
}

export default ShelterView;