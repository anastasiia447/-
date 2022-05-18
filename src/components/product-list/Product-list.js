import "./product-item.css";
import CardItem from "./CardItem.js";

export function Productlist(props) {
  if (props.list.length === 0) {
    return <h1>Sorry, no products found :(</h1>
  }

  return (
    <div className="product-list row">
      {props.list.map((item) => (
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