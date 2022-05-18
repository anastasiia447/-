import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import HeartIcon from "../product-list/HeartIcon";
import CartIcon from "../product-list/CartIcon";
import SearchIcon from "./SearchIcon";
import "./search.css";

export function Search({ setSearchData, searchData, totalProducts }) {
  const [searchValue, setSearchValue] = useState(searchData);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSearchData(searchValue.trim());
    }, 300);
    return () => {
      clearTimeout(timeout);
    };
  }, [setSearchData, searchValue]);

  const favorites = useSelector((state) => state.favorites);
  const cart = useSelector((state) => state.cart);

  return (
    <div className="header-search">
      <div className="result-search-icon">
        <div className="search-result">
          {totalProducts > 0 ? `${totalProducts} results found` : ""}
        </div>
        <div className="btn-fav-cart">
          <Link to="/favorites">
            <button className="btn-favorite">
              <HeartIcon fill={"none"} stroke={"white"} />
              {favorites.length > 0 ? (
                <span className="total-items-in-wishList">
                  {favorites.length}
                </span>
              ) : null}
            </button>
          </Link>
          <Link to="/cart">
            <button className="btn-cart">
              <CartIcon />
              {cart.length > 0 ? (
                <span className="total-items-in-cartItem">{cart.length}</span>
              ) : null}
            </button>
          </Link>
        </div>
      </div>
      <div className="search-box">
        <input
          type="search"
          className="input"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
        />
        <SearchIcon />
      </div>
    </div>
  );
}