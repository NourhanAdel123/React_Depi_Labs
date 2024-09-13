import React, { useState } from "react";
import initialProducts from "./ProductData";
import "./CardsStyle.css";
import CounterUsingHooks from "../CounterUsingHooks/CounterUsingHooks";
import "./CardsStyle.css";

function Products() {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = () => {
    const newProduct = {
      id: products.length + 1,
      name: "Apple iPhone 14",
      price: 799.0,
      category: "Smartphones",
      img: "https://media.wired.com/photos/6332360740fe1e8870aa3bc0/master/pass/iPhone-14-Review-Gear.jpg",
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div className="cards">
      <button onClick={addProduct} className="add-product-button">
        Add New Product
      </button>
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.img} alt={product.name} className="card-img" />
          <h1 className="card-name">{product.name}</h1>
          <h2 className="card-price">${product.price}</h2>
          <p className="card-category">Category: {product.category}</p>
          <CounterUsingHooks />
        </div>
      ))}
    </div>
  );
}

export default Products;
