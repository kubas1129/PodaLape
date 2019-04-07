import React, { Component } from 'react';
import './styles/styles.css';
const axios = require('axios');

class DogForm extends Component{

  constructor(props){
    super(props);


    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event){
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
          [name]: value
      });
  }

  onSubmit(event){
    event.preventDefault();
    console.log(this.state)
  }

  render(){

    return(
      <div id="form-container">
      <h2>Oddaj pieska</h2>
        <form onSubmit={this.onSubmit}>
          <label>Imie
              <input type="text" name="name" onChange={this.onChange}/></label>
          <label>Wiek
              <input type="number" min="1" max="20" name="age" onChange={this.onChange}/></label>
          <label>Rasa
              <input type="text" name="breed" onChange={this.onChange}/></label>
          <label>Płeć
              <select name="gender" onChange={this.onChange}>
                  <option>Pies</option>
                  <option>Suczka</option>
          </select></label>
          <label>Kolor
              <input type="text" name="color" onChange={this.onChange}/></label>
          <label>Waga
              <input type="number" min="1"  max="100" name="weight" onChange={this.onChange}/></label>
          <input type="submit" value="Dodaj pieska"/>
        </form>
      </div>

    )
  }



}

export default DogForm;
