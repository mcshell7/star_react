import React from "react";

import './random-planet.scss';

const RandomPlanet = () => {
  return(
    <div className="random__planet block-std">
      <div className="random__planet-img">
        <img src=""/>
      </div>
      <div className="random__planet-details">
        <div className="random__planet-title">Planet Random</div>
        <ul className="random__planet-list list--std">
          <li className="random__planet-list__item list--std-item">Population 2000000</li>
          <li className="random__planet-list__item list--std-item">Rotation 1030</li>
          <li className="random__planet-list__item list--std-item">Diameter 394</li>
        </ul>
      </div>

    </div>
  );
};

export default RandomPlanet;