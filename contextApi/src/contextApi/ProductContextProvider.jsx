import React, { useEffect, useState } from "react";
import ProductContext from "./ProductContexApi";
import axios from "axios";

const ProductContextProvider = ({ children }) => {
  const [product, setProduct] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  async function fetchAllProducts() {
    try {
      let response = await axios.get("https://dummyjson.com/products");
      //   console.log(response.data);
      setProduct(response.data.products);
    } catch (error) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{ product, setProduct, cartItems, setCartItems }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
