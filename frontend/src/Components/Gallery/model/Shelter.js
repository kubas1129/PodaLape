import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../styles/styles.css';
import shelter1 from './images/shelter1_thumb.png'
import shelter2 from './images/shelter2_thumb.png'

const Shelter = (props) => {
    return (
        <div className="gallery-tab">
            <img src={props.details.id_shelter % 2 === 0 ? shelter1 : shelter2} alt="tab-image"/>
            <div className="tab-content">
                <h2>{props.details.name_shelter}</h2>
                <ul>
                    <li><b>Miasto: </b>{props.details.city}</li>
                    <li><b>Psów: </b> {props.details.dogs.length}</li>
                </ul>
                <button><Link to={"/shelter-details/" + props.details.id_shelter}>Szczegóły</Link></button>
            </div>
        </div>
    )
};

export default Shelter;