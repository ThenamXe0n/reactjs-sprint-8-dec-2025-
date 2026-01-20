import React, { useContext} from "react";
import ProductContext from "../contextApi/ProductContexApi";
import { Link } from "react-router";

const NavBar = () => {
  const { cartItems } = useContext(ProductContext);
  return (
    <header>
      <h4>Home</h4>
      <h4>product</h4>
      <h4>
        <Link to={"/my-cart-items"}> cart items</Link>{" "}
        <span className="p-4 text-white bg-black">{cartItems?.length}</span>
      </h4>
    </header>
  );
};

export default NavBar;
