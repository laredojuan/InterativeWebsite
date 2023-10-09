import React from "react";
import "../../components/App.css";
import { Link } from "react-router-dom";
import "./product.css";

function Products() {
  return (
    <React.Fragment>
      <h1 className="games">
        <div className="snake-link">
          <Link to="/snake" className="snake-text">
            Snake Game
          </Link>
        </div>
      </h1>
    </React.Fragment>
  );
}

export default Products;
