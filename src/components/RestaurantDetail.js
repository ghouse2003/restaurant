import React from "react";
import { useParams } from "react-router-dom";
import { restaurantsData } from "../data/data";
import './RestaurantDetail.css'; // Import the CSS file

const RestaurantDetail = () => {
  const { id } = useParams();
  const restaurant = restaurantsData.find(
    (restaurant) => restaurant.id === parseInt(id)
  );

  return (
    <div className="restaurant-detail"> {/* Add class here */}
      <h2>{restaurant.name}</h2>
      <p>{restaurant.description}</p>
      <p>Address: {restaurant.address}</p>
      <p>Phone: {restaurant.phone}</p>
      <h3>Menu</h3>
      <ul>
        {restaurant.menu.map((item, index) => (
          <li key={index}>
            <img src={item.imgSrc} alt={item.name} /> {item.name} - ₹{item.price}
          </li>
        ))}
      </ul>
      <h3>Reviews</h3>
      <ul>
        {restaurant.ratings.map((rating, index) => (
          <li key={index}>
            <p>{rating.revName}: {rating.comment} <span className="rating">({rating.rating} stars)</span></p> {/* Added class for rating */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantDetail;
