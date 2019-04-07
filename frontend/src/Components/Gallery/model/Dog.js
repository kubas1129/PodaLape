import React, { Component } from 'react';
import '../styles/styles.css';


const Dog = (props) => {
    return (
        <div className="gallery-tab">
            <img src="doggo.jpg" alt="tab-image"/>
            <div className="tab-content">
                <h2>{props.details.name}</h2>
                <ul>
                    <li><b>Rasa</b>: {props.details.breed === '' ? "Brak" : props.details.breed}</li>
                    <li><b>Wiek</b>: {props.details.age} lat(a)</li>
                    <li><b>Waga</b>: {props.details.weight} kg</li>
                    <li><b>Płeć</b>: {props.details.gender}</li>
                    <li><b>Schronisko</b>: {props.details.name_shelter}</li>
                    <li><b>Miasto</b>: {props.details.city}</li>
                </ul>
                <button>Szczegóły</button>
            </div>
            </div>
    );
};


export default Dog;