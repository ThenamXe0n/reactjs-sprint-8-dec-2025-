import "./App.css";
import NavBar from "./components/NavBar";
import MyButton from "./components/MyButton"
function App() {
  return (
    <>
      <NavBar /> //self closing component tag
      <h1>React js sprint</h1>
      <p>we are learning about react components</p>
      <img src="./react-logo.png" alt="react logo" />
      <MyButton />
    </>
  );
}

export default App;
