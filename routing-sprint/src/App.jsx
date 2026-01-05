import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import PageNotFound from "./pages/PageNotFound";

function App() {

  const maintainance = false
  if(maintainance){
    return <h1>webstite is under maintainance</h1>
  }
  return (
    <>
      {/* ///creating paths for websites */}
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/about"} element={<About />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}

export default App;

{
  /* //Route are self close content will be injected as prop this has 2 props a.path b.element */
}
