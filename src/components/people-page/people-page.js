import React, { Component } from "react";
import ErrorIndicator from "../error-indicator";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import './people-page.scss';

export default class PeoplePage extends Component{

  state={
    selectedPerson: 3,
    hasError: false
  };

  componentDidCatch(){
    this.setState({
      hasError: true
    });
  }

  OnPersonSelected = (selectedPerson) =>{
    this.setState({
      selectedPerson: selectedPerson
    });
  };

  render(){

    if(this.state.hasError){
      return <ErrorIndicator />;
    }
    
    return (
      <div className="row justify-content-md-center ">
          <div className="col-6">
            <ItemList OnItemSelected={this.OnPersonSelected}/>
          </div>
          <div className="col-6">
            <PersonDetails personId={this.state.selectedPerson}/>
          </div>
        </div>
    );
  }
}