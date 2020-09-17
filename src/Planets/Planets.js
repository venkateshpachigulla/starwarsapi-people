import React from "react";
import Planet from "./Planet/Planet";
import "./Planets.css";

const totalPopulation = (planets) => {
  return planets.reduce(
    (acc, planet) =>
      isNaN(Number(planet.population)) ? acc : Number(planet.population) + acc,
    0
  );
};

export const Planets = ({ planets }) => {
  const totalPopulations = totalPopulation(planets);
  return (
    <div className="Planets">
      {planets.map((planet) => {
        return (
          <Planet
            key={planet.name}
            totalPopulation={totalPopulations}
            planet={planet}
          />
        );
      })}
    </div>
  );
};
