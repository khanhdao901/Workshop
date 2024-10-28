import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <div className="logo">
            <Link to={"/"}>
              <img src="public/header/Frame 168.jpg" alt="Logo" />
            </Link>
          </div>
        </div>

        <div className="col text-center">
          <div className="menu">
            <ul className="nav justify-content-center">
              <li className="nav-item">
                <a style={{ color: "black" }} className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a style={{ color: "black" }} className="nav-link" href="">
                  Shop
                </a>
              </li>
              <li className="nav-item">
                <a style={{ color: "black" }} className="nav-link" href="">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a style={{ color: "black" }} className="nav-link" href="">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="col">
          <div className="d-flex justify-content-end">
            <div className="icon me-2">
              <img
                src="public/header/person_24dp_FILL0_wght400_GRAD0_opsz24 1.jpg"
                alt=""
              />
            </div>
            <div className="icon me-2">
              <img src="public/header/akar-icons_search.jpg" alt="" />
            </div>
            <div className="icon me-2">
              <img
                src="public/header/favorite_24dp_FILL0_wght400_GRAD0_opsz24 1.jpg"
                alt=""
              />
            </div>
            <div className="icon">
              <img
                src="public/header/shopping_cart_24dp_FILL0_wght400_GRAD0_opsz24 1.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
