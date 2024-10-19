import React from "react";
import { Link } from "react-router-dom";
import { cuisineData } from "../data/data";
import './CuisineList.css';

const CuisineList = () => {
  return (
    <div>
      <h2>Choose a Cuisine</h2>
      <div className="cuisine-list">
        {cuisineData.map((cuisine) => (
          <Link to={`/restaurants/${cuisine.id}`} key={cuisine.id}>
            <button>{cuisine.name}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CuisineList;
