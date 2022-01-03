import React from "react";
import { RiUser3Fill, RiShoppingCart2Fill } from "react-icons/ri";
import { GoGlobe } from "react-icons/go";
import {
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header className="header ">
        <div className="header__top d--flex bg--primary">
          <div className="container">
            <ul className="d--flex">
              <li>
                <RiUser3Fill /> <Link to="/">Login</Link> /{" "}
                <Link to="/">Register</Link>
              </li>
              <li>
                <button>
                  <RiShoppingCart2Fill />
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__main">
          <div className="container">
            <div className="header__main__bottom d-grid">
              <img src="./images/logo.png" alt="" />
              <nav>
                <ul className=" d--flex">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/">Checkout</Link>
                  </li>
                </ul>
              </nav>

              <ul className="socialmedia d--flex">
                <li>
                  <a href="#">
                    <AiFillFacebook />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <AiOutlineTwitter />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <AiFillLinkedin />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <AiFillYoutube />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <GoGlobe />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
