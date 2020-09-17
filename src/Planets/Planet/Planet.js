import React from "react";
import "./Planet.css";

const Planet = ({ planet, totalPopulation }) => {
  let stringLength;
  if (isNaN(Number(planet.population))) {
    stringLength = 0.01;
  } else {
    stringLength = planet.population / totalPopulation;
  }
  return (
    <div
      className="Planet"
      style={{
        width: `${stringLength * 100}px`,
        height: `${stringLength * 100}px`,
      }}
      title={planet.name}
    ></div>
  );
};

export default Planet;
