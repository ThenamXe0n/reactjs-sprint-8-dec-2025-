import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { data } from "../data";

function ProductPage() {
  console.log("Product Page Rendered", data.products);
  const [productList, setProductList] = useState(data.products);
  const [loading, setLoading] = useState(true);

  async function fetchProductsData() {
    try {
      let response = await fetch("https://dummyjson.com/pructs?limit=2");
      let data = await response.json();
      console.log("Fetched products data", data.products);
      setProductList(data.products);
      setLoading(false);
    } catch (err) {
      alert(`Error fetching products data, ${err}`);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProductsData();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center p-4 bg-black text-white">
        Product Page
      </h1>
      <button
        onClick={fetchProductsData}
        className="bg-black p-3 text-white m-5"
      >
        load product...
      </button>
      {!loading ? (
        <section className="w-[90vw] gap-5 min-h-screen h-full mx-auto grid grid-cols-5">
          {productList.length > 0 ? (
            productList.map((item, idx) => (
              <ProductCard
                key={idx}
                productname={item.title}
                price={item.price}
                poster={item.thumbnail}
                category={item.category}
              />
            ))
          ) : (
            <p>No product found</p>
          )}
        </section>
      ) : (
        <section className="h-screen bg-red-400 fixed top-0 left-0 text-4xl w-screen flex items-center justify-center">
          <p className="animate-bounce">LOADING...</p>
        </section>
      )}
    </div>
  );
}

export default ProductPage;
