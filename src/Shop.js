import React from "react";
import './App.css'; 
import { Link, Outlet } from "react-router-dom";

const Shop = () => {
  return (
    <div className="shop-container">
    <h1 className="shop-header">Shop Categories</h1>
    <nav className="shop-nav">
       <Link to="/Shop/1" className="shop-link">dairy</Link> |{" "}
      <Link to="/Shop/2" className="shop-link">fish</Link> |{" "}
      <Link to="/Shop/3" className="shop-link">meat</Link> |{" "}
      <Link to="/Shop/" className="shop-link">Start</Link> |{" "}
      </nav>
      <div className="shop-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Shop;
