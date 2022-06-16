import logo from "./logo.png";
import "./header.css";
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
    </div>
  );
}