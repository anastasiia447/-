import logo from "./logo.png";
import "./header.css";
import { BreadCrumbsList } from "./brd-crum-list/BrdCrList";
import { Link } from "react-router-dom";

export function Header() {
  const breadCrumbsTitles = ["eCommerce", "Electronics"];
  return (
    <div className='header-block'>
      <Link to="/store">
        <div className="logo-block">
          <img src={logo} alt="logo" />
          <h1 className="header-name-logo">Online Store</h1>
        </div>
      </Link>
      <div className="navigation">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 6.25L8.61984 1L16.2397 6.25V14.5C16.2397 15.3284 15.4816 16 14.5464 16H2.6933C1.75811 16 1 15.3284 1 14.5V6.25Z"
            stroke="#7E72F2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.68909 16V8H11.5505V16"
            stroke="#7E72F2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <BreadCrumbsList list={breadCrumbsTitles} />
      </div>
    </div>
  );
}