import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");
  const [secondary, setSecondary] = useState("tried");

  useEffect(() => {
    console.log(`It's ${emotion} around here!`);
  }, [emotion, secondary]);

  useEffect(() => {
    console.log(`It's ${secondary} around here!`);
  }, [secondary]);

  return (
    <div className="App">
      <h1>Current emotion is {emotion}</h1>
      <button onClick={() => setEmotion("sad")}>
        Sad
      </button>
      <button
        onClick={() => setEmotion("excited")}
      >
        Excited
      </button>

      <h2>Current secondary emotion is {secondary}</h2>
      <button
        onClick={() => setSecondary("Grateful")}
      >
        Grateful
      </button>
    </div>
  );
}

export default App;
