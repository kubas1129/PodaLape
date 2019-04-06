import React, { Component } from 'react';
//const axios = require('axios');

class SideBar extends Component{

    constructor(props){
        super(props);

    }

    render(){
        return (
            <aside>
                <form onSubmit={this.props.onSubmit}>
                    {this.props.form.map((input, index) => <label key={index}>{input}</label>)}
                </form>
            </aside>
        )
    }

}

export default SideBar;