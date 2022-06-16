import axios from "axios";
import { useEffect, useState } from "react";
import { Filter } from "./components/filter/Filter.js";
import { Search } from "./components/search/Search.js";
import { Productlist } from "./components/product-list/Product-list.js";
import { backendUrl } from "./constants";
import products from "./components/product-list/products.json";

function App() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchData, setSearchData] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(85000);
  const [minRating, setMinRating] = useState(0);
  const [maxRating, setMaxRating] = useState(5);
  const [totalProducts, setTotalProducts] = useState(0);
  const [categoriesFilter, setCategoriesFilter] = useState([]);
  const [brandsFilter, setBrandsFilter] = useState([]);
  const [isFiltersOpened, setIsFiltersOpened] = useState(true);

  useEffect(() => {
    const queryParams = new URLSearchParams({
      _limit: 10,
      _page: currentPage,
      q: searchData,
      price_lte: maxPrice,
      price_gte: minPrice,
      rating_lte: maxRating,
      rating_gte: minRating,
    });

    brandsFilter.forEach((f) => {
      queryParams.append("brand", f);
    });

    categoriesFilter.forEach((f) => {
      queryParams.append("category", f);
    });

    axios.get(`${backendUrl}products?${queryParams.toString()}`).then((res) => {
      setProducts(res.data);
      setTotalProducts(Number(res.headers["x-total-count"]));
    });
  }, [
    brandsFilter,
    categoriesFilter,
    currentPage,
    maxPrice,
    minPrice,
    maxRating,
    minRating,
    searchData,
  ]);

  useEffect(() => {
    setCurrentPage(1);
  }, [
    brandsFilter,
    categoriesFilter,
    maxPrice,
    minPrice,
    maxRating,
    minRating,
    searchData,
  ]);

  return (
    <div className="container">
      <div className="row">
          <div className={isFiltersOpened ? "col-md-4-col-ms-6" : "col-md-1 col-ms-2"}>
          <Filter
            isOpened={isFiltersOpened}
            setIsOpened={setIsFiltersOpened}
            minPrice={minPrice}
            maxPrice={maxPrice}
            setMinPrice={setMinPrice}
            setMaxPrice={setMaxPrice}
            minRating={minRating}
            maxRating={maxRating}
            setMinRating={setMinRating}
            setMaxRating={setMaxRating}
            categoriesFilter={categoriesFilter}
            brandsFilter={brandsFilter}
            setCategoriesFilter={setCategoriesFilter}
            setBrandsFilter={setBrandsFilter}
          />
        </div>
          <div className={isFiltersOpened ? "col-md-8-col-ms-6" : "col-md-11 col-ms-10" }>
          <Search
            searchData={searchData}
            setSearchData={setSearchData}
            totalProducts={totalProducts}
          />
          <Productlist list={products} />
        </div>
      </div>
    </div>
  );
}

export default App;