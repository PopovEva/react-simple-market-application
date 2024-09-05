import React from "react";
import './App.css'; 
import { Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home</Link> |
        <Link to="/Shop">Shop</Link> |{" "}
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default App;
