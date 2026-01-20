import React, { useContext } from "react";
import ProductContext from "../contextApi/ProductContexApi";

const MyCartPage = () => {
  const { cartItems } = useContext(ProductContext);
  return (
    <div>
      <h3>my cart items</h3>
      <ol>
        {cartItems.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span> <span>${item.price}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default MyCartPage;
