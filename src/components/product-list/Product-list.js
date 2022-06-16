import "./product-item.css";
import CardItem from "./CardItem.js";
import productsJson from "./products.json";
import React, { useEffect, useState } from 'react';

export function Productlist(props) {
  const [products, setProducts] = useState(productsJson.products);
  const [filteredProducts, setFilteredProducts] = useState(productsJson.products);
  console.log(productsJson.products);
  useEffect(() => {
    setFilteredProducts(
      productsJson.products.map((item) => {
        return item
      })
    )
  }, [props]);
  if (products.length === 0) {
    return <h1>Sorry, no products found :(</h1>
  }
  
  return (
    <div className="product-list-row">
      {filteredProducts.map((item) => (
        <CardItem
          image={item.images[0]}
          title={item.title}
          rating={item.rating}
          price={item.price}
          category={item.category}
          brand={item.brand}
          id={item.id}
          key={item.id}
        />
      ))}
    </div>
  );
}