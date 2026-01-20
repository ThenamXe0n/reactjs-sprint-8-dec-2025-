import React, { useContext } from "react";
import { BiPlusCircle } from "react-icons/bi";
import ProductContext from "../contextApi/ProductContexApi";

const FeaturedProducts = () => {
  const { product, cartItems, setCartItems } = useContext(ProductContext);
 

  function handleAddToCart(item) {
    setCartItems((prev) => [...prev, item]);
    alert("item added");
  }

  return (
    <div>
      <h3>cart items count = {cartItems.length}</h3>
      <ol>
        {product.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>{" "}
            <span>
              <BiPlusCircle
                onClick={() => {
                  handleAddToCart(item);
                }}
                size={32}
              />
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FeaturedProducts;
