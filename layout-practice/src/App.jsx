import { AiOutlinePlus } from "react-icons/ai";
import "./App.css";
import ButtonTile from "./components/ui/ButtonTile";
import MyButton from "./components/ui/MyButton";
import ContentCard from "./components/cards/ContentCard";
import avengerPoster from "./assets/tumbnail1.png";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Layout>
        <Home/>
      </Layout>
    </>
  );
}

export default App;
