import "./App.css";
import Counter from "./components/hooks/Counter";
import Layout from "./components/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import {FaPhone} from "react-icons/fa"
import Profile from "./pages/Profile";
import EffectHook from "./components/hooks/EffectHook";
function App() {

  
  return (
    <>
      {/* <Layout name>
        <section className="h-screen flex items-center font-extrabold text-5xl text-center">
          i am child
        </section>
        <Home />
        <About />
      </Layout> */}
      {/* <Counter number={2} />
      <Counter number={5} />
      <Counter /> */}
      {/* <Profile/> */}
      <EffectHook/>
    </>
  );
}

export default App;
