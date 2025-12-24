import { useState } from "react";
import Header from "./components/Header";
import MoodButton from "./components/MoodButton";
import MoodDisplay from "./components/MoodDisplay";
import MoodList from "./components/MoodList";

function App() {
  const [currentMood, setCurrentMood] = useState(null);
  return (
    <section className="h-screen w-screen bg-black text-emerald-700 p-8">
      <Header currentMood={currentMood} />
      <MoodList currentMood={currentMood} setCurrentMood={setCurrentMood}  />
      {currentMood && <MoodDisplay currentMood={currentMood}  />}
    </section>
  );
}

export default App;
