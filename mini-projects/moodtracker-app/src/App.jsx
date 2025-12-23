import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import MoodList from "./components/MoodList";
import MoodDisplay from "./components/MoodDisplay";

function App() {
  const [currentMood, setCurrentMood] = useState(null);
  return (
    <section className="bg-black flex flex-col  text-emerald-600 min-h-screen p-6">
      <Header />
      <MoodList setCurrentMood={setCurrentMood} />
      <MoodDisplay mood={currentMood} />
    </section>
  );
}

export default App;
