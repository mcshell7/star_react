import React, { Component } from "react";
import RandomPlanet from "../random-planet";
import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import "./app.scss";

export default class App extends Component {

  state = {
    selectedPerson: 4
  }

  OnItemSelected = () => {
  }
  OnPersonSelected = (id) =>{
    this.setState({
      selectedPerson: id
    });
  }

  render( ) {
    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <div className="row justify-content-md-center ">
          <div className="col-6">
          <ItemList OnItemSelected={this.OnPersonSelected}/>
          </div>
          <div className="col-6">
          <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
      </div>
    );
  }
}
