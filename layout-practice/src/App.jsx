import { AiOutlinePlus } from "react-icons/ai";
import "./App.css";
import ButtonTile from "./components/ui/ButtonTile";
import MyButton from "./components/ui/MyButton";
import ContentCard from "./components/cards/ContentCard";
import avengerPoster from "./assets/tumbnail1.png";

function App() {
  return (
    <>
      <h1>this is heading</h1>
      <ButtonTile title={"Music"} />
      <MyButton title={"create"} icon={<AiOutlinePlus />} />
      <ContentCard
        title={"Avengers Doomsday LEAK Trailer Breakdown & Review"}
        img={avengerPoster}
        channelName={"PJ Explained"}
        views={"256k"}
        time={"9hours"}
      />
      <ContentCard
        title={"Avengers infinity"}
        img={"https://tse4.mm.bing.net/th/id/OIP.zNDZbJ1vd_HW_D_3F1zaYgHaLH?pid=Api&P=0&h=220"}
        channelName={"Dummy"}
        views={"50M"}
        time={"1 year"}
      />
    </>
  );
}

export default App;
