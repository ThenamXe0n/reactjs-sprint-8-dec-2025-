import "./App.css";
import FeaturedProducts from "./components/FeaturedProducts";
import NavBar from "./components/NavBar";
import ProductContextProvider from "./contextApi/ProductContextProvider";
import { Route, Routes } from "react-router";
import MyCartPage from "./pages/MyCartPage";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<FeaturedProducts />} />
        <Route path="/products" element={<div>products</div>}/>
        <Route path="/my-cart-items" element={<MyCartPage/>}/>
      </Routes>
    </>
  );
}

export default App;
