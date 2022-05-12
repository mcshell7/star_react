import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";

import './person-details.scss';

export default class PersonDetails extends Component {

  swapiService = new SwapiService();
  state = {
    person: null
  }

  componentDidMount(){
    this.updatePerson();
  }

  componentDidUpdate(prevProps){
    if(this.props.personId !== prevProps.personId){
      this.updatePerson();
    }
  }

  updatePerson() {
    const { personId } = this.props;
    if(!personId){
      return;
    }

    this.swapiService
      .getPerson(personId)
      .then((person) => {
      this.setState({person});
    }); 
  }

  render(){

    if(!this.state.person) {
      return <span>Select a person from a list </span>;
    }

    const { id , name, gender, birthYear, eyeColor} = this.state.person;
    

    return (
      <div className="person__details details block-std">
        <div className="person__details-img">
          <img src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}/>
        </div>
        <div className="person__details-details">
          <div className="person__details-title">{name}</div>
          <ul className="person__details-list list--std">
            <li className="person__details-list__item list--std-item">
              <span className="list-term">Gender </span>
              <span>{gender}</span>
            </li>
            <li className="person__details-list__item list--std-item">
              <span className="list-term">Birth Year </span>
              <span>{birthYear}</span>
            </li>
            <li className="person__details-list__item list--std-item">
              <span className="list-term">Eye Color </span>
              <span>{eyeColor}</span>
            </li>
          </ul>
        </div>

      </div>
    )
  }
};