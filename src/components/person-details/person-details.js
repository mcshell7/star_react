import React from "react";

import './person-details.scss';

const PersonDetails = () => {
  return (
    <div className="person__details details block-std">
      <div className="person__details-img">
        <img src=""/>
      </div>
      <div className="person__details-details">
        <div className="person__details-title">Planet Random</div>
        <ul className="person__details-list list--std">
          <li className="person__details-list__item list--std-item">Population 2000000</li>
          <li className="person__details-list__item list--std-item">Rotation 1030</li>
          <li className="person__details-list__item list--std-item">Diameter 394</li>
        </ul>
      </div>

    </div>
  )
};

export default PersonDetails;