import React, { Component } from 'react';
//const axios = require('axios');
import "./styles/styles.css";



class SideBar extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <aside>
                <h2>{this.props.form.header}</h2>
                <form onSubmit={this.props.onSubmit}>
                    {this.props.form.inputs.map((element, index) => <label key={index} className="input-label">{element.label}{element.input}</label>)}
                </form>
            </aside>
        )
    }

}

export default SideBar;