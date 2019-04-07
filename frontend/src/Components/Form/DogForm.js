import React, { Component } from 'react';
import SideBar from "../SideBar/SideBar";
const axios = require('axios');

class DogForm extends Component{

  constructor(props){
    super(props);




  }

  onChange(){

  }

  render(){

    return(
      <div id="container-container">
      <h2>Dodaj pieska</h2>
        <form>
          <p>Imie</p>
          <input type="text" name="name" onChange={this.onChange}/>
          <p>Wiek</p>
          <input type="number" min="1" max="20" name="age" onChange={this.onChange}/>
          <p>Rasa</p>
          <input type="text" name="breed" onChange={this.onChange}/>
          <p>Płeć</p>
          <select name="gender" onChange={this.onChange}>
                  <option></option>
                  <option>Pies</option>
                  <option>Suczka</option>
          </select>
          <p>Kolor</p>
          <input type="text" name="color" onChange={this.onChange}/>
          <p>Waga</p>
          <input type="number" min="1"  max="100" name="weight" onChange={this.onChange}/>

          <br/>
          <input type="submit" value="Dodaj pieska"/>
        </form>
      </div>

    )
  }



}

export default DogForm;
