import React from "react";
import { useSelector } from "react-redux";
import CardItem from "../product-list/CardItem";

export function Favorites() {
  const favorites = useSelector((state) => state.favorites);
  if (favorites.length === 0) {
    return <h2>You haven't added any products to your favorites</h2>
  }

  return (
    <div>
      <h1>My favorites</h1>
      <div className="product-list-row">
        {favorites.map((item) => (
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
      </div>
    </div>
  );
}