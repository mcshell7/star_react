import React from "react";
import RandomPlanet from "../random-planet";
import Header from "../header";
import ItemList from "../item-list";
import PersonDetails from "../person-details";
import "./app.scss";

const App = () => {
  return (
    <div className="container">
      <Header />
      <RandomPlanet />
      <div className="row justify-content-md-center ">
        <div className="col-6">
        <ItemList />
        </div>
        <div className="col-6">
        <PersonDetails />
        </div>
      </div>
    </div>
  );
}

export default App;