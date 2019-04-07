import React, { Component } from 'react';
import '../styles/styles.css';
import dog1 from './images/dog1_thumb.png';
import dog2 from './images/dog2_thumb.png';
import dog3 from './images/dog3_thumb.png';
import dog4 from './images/dog4_thumb.png';
import dog5 from './images/dog5_thumb.png';
import dog6 from './images/dog6_thumb.png';
import dog7 from './images/dog7_thumb.png';
import dog8 from './images/dog8_thumb.png';


const Dog = (props) => {
    const dogs = [dog1, dog2, dog3, dog4, dog5, dog6,dog7,dog8]
    return (
        <div className="gallery-tab">
            <img src={dogs[props.details.id_dog % 8]} alt="tab-image"/>
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
                <button>Adoptuj</button>
            </div>
            </div>
    );
};


export default Dog;