import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { data } from "../data";

function ProductPage() {
  console.log("Product Page Rendered", data.products);
  const [productList, setProductList] = useState(data.products);
  const [loading, setLoading] = useState(true);
  const itemPerPage = 100;
  const totalProducts = 194;
  const [skip, setSkip] = useState(0);

  async function fetchProductsData() {
    try {
      let response = await fetch(
        `https://dummyjson.com/products?limit=${itemPerPage}&skip=${skip}`
      );
      let data = await response.json();
      console.log("Fetched products data", data.products);
      setProductList(data.products);
      setLoading(false);
    } catch (err) {
      alert(`Error fetching products data, ${err}`);
      setLoading(false);
    }
  }

  function handleNextPage() {
  setSkip((prev)=>(prev+itemPerPage));
  alert(`Next page clicked, skip is now ${skip + itemPerPage}`);
  }


  function handlePreviousPage(){
    setSkip((prev)=>prev-itemPerPage)
alert(`Prev page clicked, skip is now ${skip - itemPerPage}`)
  }

  useEffect(() => {
    fetchProductsData();
  }, [skip]);

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
      {/* ========================card listed here======================= */}
      {!loading ? (
        <section className="w-[90vw] gap-5 min-h-[60vh] h-full mx-auto grid grid-rows-2 grid-cols-3">
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
      <div className="my-16 flex items-center justify-between max-w-[80vw] mx-auto">
        <button onClick={handlePreviousPage} className="bg-black px-4 py-2 rounded-md text-white ">
          prev
        </button>
        <button disabled={skip>totalProducts} onClick={handleNextPage} className="bg-black disabled:bg-black/40 px-4 py-2 rounded-md text-white ">
          next
        </button>
      </div>
    </div>
  );
}

export default ProductPage;
