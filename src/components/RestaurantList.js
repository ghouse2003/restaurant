import React from "react";
import { useParams, Link } from "react-router-dom";
import { restaurantsData } from "../data/data";
import './RestaurantList.css'

const RestaurantList = () => {
  const { cuisineId } = useParams();
  const filteredRestaurants = restaurantsData.filter(
    (restaurant) => restaurant.cuisine_id === parseInt(cuisineId)
  );

  return (
    <div>
      <h2>Restaurants</h2>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => (
          <div key={restaurant.id} className="restaurant-card">
            <h3>{restaurant.name}</h3>
            <img src={restaurant.menu[0].imgSrc} alt={restaurant.name} />
            <p>{restaurant.description}</p>
            <Link to={`/restaurant/${restaurant.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
