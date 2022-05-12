import React, {Component} from "react";

import SwapiService from "../../services/swapi-service";
import ErorrIndicator from "../error-indicator/error-indicator";
import Spinner from "../spinner";
import './random-planet.scss';

export default class RandomPlanet extends Component {

  swapiService = new SwapiService();
  state = {
    planet: {},
    loading: true,
  };

  constructor() {
    super();
    this.updatePlanet();
  }

  onPlanetLoaded = (planet) =>{
    this.setState({
      planet,
      loading: false,
      error: false
    });
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  };

  updatePlanet = () => {
    const id = Math.floor(Math.random()*25 + 3);
    this.swapiService
      .getPlanet(id)
      .then(this.onPlanetLoaded)
      .catch(this.onError);

  };

  render() {
  const { planet, loading, error } = this.state;


  const hasData = !(loading || error);
  const errorMessage = error ? <ErorrIndicator /> : null;
  const spinner = loading ? <Spinner /> : null;
  const content = hasData ? <PlanetView planet={planet}/> : null;

    return(
        <div className="random__planet block-std">
          {errorMessage}
          {spinner}
          {content}
        </div>
      );
  }
};

const PlanetView = ({ planet }) => {

  const { id, name, population, rotationPeriod, diameter } = planet;

  return (
    <React.Fragment>
      <div className="random__planet-img">
        <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} />
      </div>
      <div className="random__planet-details">
        <div className="random__planet-title">{name}</div>
          <ul className="random__planet-list list--std">
            <li className="random__planet-list__item list--std-item">Population: {population}</li>
            <li className="random__planet-list__item list--std-item">Rotation period: {rotationPeriod}</li>
            <li className="random__planet-list__item list--std-item">Diameter: {diameter}</li>
          </ul>
      </div>
    </React.Fragment>
  );
};
