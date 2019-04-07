import React, { Component } from 'react';
import Dog from './model/Dog';
import './styles/styles.css';
import button from '../../Resources/button_more.svg';

class Gallery extends Component{

    constructor(props){
        super(props);

    }



    render(){
        return (
            <main>
                {this.props.content.content.length > 0 ?
                <div>
                <h1>{ this.props.content.header }</h1>
                <div id="gallery">
                    {this.props.content.type === "Dogs" ? this.props.content.content.map((dog, index) => {return <Dog key={index} details={dog}/>}) : "Not Dogs, but: " + this.props.type}
                </div>
                <div id="expand" onClick={this.props.expand}><img src={button} alt="arrow"/></div>
                </div> : <h1>Brak wyników spełniających podane wymagania!</h1>}
            </main>
        )
    }

}

export default Gallery;