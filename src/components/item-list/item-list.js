import React, {Component} from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import "./item-list.scss";

export default class ItemList extends Component {

  swapiService = new SwapiService();

  state = {
    peopleList: null,
  }

  componentDidMount() {
    this.swapiService
      .getAllPeople()
      .then((peopleList) => {
        this.setState({
          peopleList
        });
      });
  }

  renderItems(arr) {
    return arr.map(({id, name}) => {
      return (
        <li className="item__list-item list--std-item"
         key={id}
         onClick={() => this.props.OnItemSelected(id)}>
          <span className="item__list-text">{name}</span>  
        </li>
      )
    })
  }

  render() {

    const { peopleList } = this.state;

    if(!peopleList){
      return <Spinner  />;
    }

    const items = this.renderItems(peopleList);

    return(
      <ul className="item__list block-std list--std">
        {items}
      </ul>
    )
  }

};
