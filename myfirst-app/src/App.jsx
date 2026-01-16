import "./App.css";
import Propdrilling from "./concept/Propdrilling";
function App() {
  let money = "500 rupees"
  return (
    <section className="h-screen w-screen bg-green-300">
      <h1 className="text-center font-bold text-3xl">1st layer</h1>
      <Propdrilling money={money}  />
    </section>
  );
}

export default App;
