import React, { Component } from 'react';
import '../styles/styles.css';

const Shelter = (props) => {
    return (
        <div className="gallery-tab">
            <img src="doggo.jpg" alt="tab-image"/>
            <div className="tab-content">
                <h2>{props.details.name_shelter}</h2>
                <ul>
                    <li><b>Miasto: </b>{props.details.city}</li>
                    <li><b>Psów: </b> {props.details.dogs.length}</li>
                </ul>
                <button>Szczegóły</button>
            </div>
        </div>
    )
};

export default Shelter;