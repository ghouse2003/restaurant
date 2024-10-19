import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CuisineList from "./components/CuisineList";
import RestaurantList from "./components/RestaurantList";
import RestaurantDetail from "./components/RestaurantDetail";
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Restaurant Finder</h1>
        <Routes>
          <Route path="/" element={<CuisineList />} />
          <Route path="/restaurants/:cuisineId" element={<RestaurantList />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
