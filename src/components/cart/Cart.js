import React from "react";
import { useSelector } from "react-redux";
import CardItem from "../product-list/CardItem";

export function Cart() {
  const cart = useSelector((state) => state.cart);
  if (cart.length === 0) {
    return <h2>There's nothing in your cart yet. Try adding some products!</h2>
  }

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <CardItem
            image={item.image}
            title={item.title}
            rating={item.rating}
            price={item.price}
            category={item.category}
            brand={item.brand}
            id={item.id}
          />
        ))}
      </ul>
    </div>
  );
}