import Increment from "../Increment component/Increment";
import { products } from "./ProductData";
import React from "react";
import "./Products.css";

function Products() {
  return (
    <div className="product-container">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.img} alt={product.name} />
          <h1>{product.name}</h1>
          <h2>${product.price}</h2>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <Increment />
        </div>
      ))}
    </div>
  );
}

export default Products;
