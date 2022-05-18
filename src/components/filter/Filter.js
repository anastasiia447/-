import axios from "axios";
import { useEffect, useState } from "react";
import "./filter.css";
import { FilterList } from "./filter-list/FilterList.js";
import { backendUrl } from "../../constants";
import { DoubleSlider } from "../double-slider";

export function Filter({
  isOpened,
  setIsOpened,
  minPrice,
  maxPrice,
  setMinPrice,
  setMaxPrice,
  minRating,
  maxRating,
  setMinRating,
  setMaxRating,
  setCategoriesFilter,
  setBrandsFilter,
  categoriesFilter,
  brandsFilter,
}) {
  const [categoriesList, setCategoriesList] = useState([]);
  const [brandsList, setBrandsList] = useState([]);

  useEffect(() => {
    axios.get(`${backendUrl}categories`).then((res) => {
      setCategoriesList(
        res.data.map((category) => {
          return {
            title: category,
            value: '',
          };
        })
      );
    });
    axios.get(`${backendUrl}brands`).then((res) => {
      setBrandsList(
        res.data.map((brand) => {
          return {
            title: brand,
            value: '',
          };
        })
      );
    });
  }, []);

  function clearAllFilters() {
    setCategoriesFilter([]);
    setBrandsFilter([]);
  }

  return (
    <div className="filters-container">
      <div className="filters-header">
        {isOpened ? <h2>Filters</h2> : null}
          <button title={isOpened ? 'Close filters' : 'Open filters'} className="collapse-filters-btn" onClick={() => setIsOpened(!isOpened)}>
          <svg className={isOpened ? '' : 'rotate'}
            width="16"
            height="13"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.90919 1.01861L1.12124 6.51335L6.88861 12.0297"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.90919 1.01861L1.12124 6.51335L6.88861 12.0297"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="filters" style={{ display: isOpened ? "block" : "none", }}>

        <div className="price-range">
          <h3 className="filter-title">
            Price ({minPrice} - {maxPrice})
          </h3>
          <div className="prices">
            <DoubleSlider
              domain={[0, 85000]}
              min={minPrice}
              max={maxPrice}
              step={100}
              onChange={({ min, max }) => {
                setMinPrice(min);
                setMaxPrice(max);
              }}
            />
          </div>
        </div>
        <div className="rating-range">
          <h3 className="filter-title">
            Rating ({minRating} - {maxRating})
          </h3>
          <div className="ratings">
            <DoubleSlider
              domain={[0, 5]}
              min={minRating}
              max={maxRating}
              step={0.01}
              onChange={({ min, max }) => {
                setMinRating(min);
                setMaxRating(max);
              }}
            />
          </div>
        </div>
        <div className="divider"></div>
        <FilterList
          list={categoriesList}
          title="Category"
          setFilter={setCategoriesFilter}
          filters={categoriesFilter}
        />
        <div className="divider"></div>
        <FilterList
          list={brandsList}
          title="Brand"
          setFilter={setBrandsFilter}
          filters={brandsFilter}
        />
      </div>
      <div className="btn" style={{ display: isOpened ? "block" : "none", }}>
        <button className="btn-filters" onClick={clearAllFilters}>
          <span className="btn-title">clear all filters</span>
        </button>
      </div>
    </div>
  );
}