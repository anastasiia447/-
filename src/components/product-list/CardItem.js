import { useDispatch, useSelector } from "react-redux";
import StarIcon from "./StarIcon";
import HeartIcon from "./HeartIcon";
import CartIcon from "./CartIcon";

function CardItem(props) {
  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToWishList = () => {
    dispatch({
      type: "addToWishList",
      product: props,
    });
  };

  const addToCart = () => {
    dispatch({
      type: "addToCart",
      product: props,
    });
  };

  const removeFromWishList = () => {
    dispatch({
      type: "removeFromWishList",
      product: props,
    });
  };

  const removeFromCart = () => {
    dispatch({
      type: "removeFromCart",
      product: props,
    });
  };

  const isFavorite = favorites.map((elem) => elem.id).includes(props.id);
  const onClickWishList = () => {
    if (isFavorite) {
      removeFromWishList();
    } else addToWishList();
  };

  const isCart = cart.map((elem) => elem.id).includes(props.id);
  const onClickCart = () => {
    if (isCart) {
      removeFromCart();
    } else addToCart();
  };

  return (
    <div className="col-lg-4-col-md-6">
      <section className="card-container">
        <div className="content">
          <div className="image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="container-rating-price">
            <div className="rating">
              <span className="rating-value">{props.rating}</span>
              <StarIcon />
            </div>
            <div className="product-price">{props.price}</div>
          </div>
          <div className="name-description-container">
            <h3 className="product-name" title={props.brand}>
              {props.brand}
            </h3>
            <p className="product-description" title={props.title}>
              {props.title} {props.category}
            </p>
          </div>
        </div>
        <div className="wish-add">
          <button
            className="wishlist-button product-button"
            onClick={onClickWishList}
          >
            <HeartIcon fill={"none"} stroke={"black"} />
            <span className="button-title">{`${
              isFavorite ? "Remove" : "Wishlist"
            } `}</span>
          </button>
          <button className="add-button product-button" onClick={onClickCart}>
            <CartIcon />
            <span className="button-title">{`${
              isCart ? "Remove" : "Add to cart"
            } `}</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export default CardItem;