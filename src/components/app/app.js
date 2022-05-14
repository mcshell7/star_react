import React, { Component } from "react";
import RandomPlanet from "../random-planet";
import Header from "../header";
import "./app.scss";
import ErrorIndicator from "../error-indicator";
import PeoplePage from "../people-page/people-page";

export default class App extends Component {

  state = {
    hasError: false,
  }

  componentDidCatch(){
    console.log('componentDidCatch()');
    this.setState({hasError: true});
  }

  render( ) {

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <PeoplePage/>
      </div>
    );
  }
}
