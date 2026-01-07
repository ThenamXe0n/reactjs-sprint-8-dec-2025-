import "./App.css";
import { Routes, Route, Outlet } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";
import ProductPage from "./pages/ProductPage";
import NavBar from "./components/NavBar";
import Layout from "./components/Layout";

function App() {
  const maintainance = false;
  if (maintainance) {
    return <h1>webstite is under maintainance</h1>;
  }
  return (
    <>
      {/* ///creating paths for websites */}

      {/* <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route
            path="settings"
            element={
              <>
                <h1 className="text-2xl text-center">settings</h1>
                <Outlet />
              </>
            }
          >
            <Route
              index
              element={
                <>
                  <div className="p-64 bg-black text-white"> Dashboad</div>
                </>
              }
            />
            <Route path="profile" element={<h1 className="bg-black text-4xl text-white">Mindcoder profile</h1>}/>
          </Route>
        </Route>

      </Routes> */}

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<ProductPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

{
  /* //Route are self close content will be injected as prop this has 2 props a.path b.element */
}
