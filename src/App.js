import { useState, useEffect } from "react";
import { getPadTime } from "./lib/getPadTime";
import "./App.css";
import Timer from "./components/timer/timer";
import InputValue from "./components/InputValue/InputValue";
import Buttons from "./components/Buttons/Buttons";

function App() {
  const [timeLeft, setTimeLeft] = useState(120);
  const [isCounting, setIsCounting] = useState(false);
  const [inputMinutes, setInputMinutes] = useState(120);

  const minutes = getPadTime(Math.floor(timeLeft / 60));
  const seconds = getPadTime(timeLeft - minutes * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting &&
        setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0));
    }, 1000);

    if (timeLeft === 0) setIsCounting(false);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft, isCounting]);

  const handleStart = () => {
    if (timeLeft === 0) setTimeLeft(5);
    
    setIsCounting(true);
  };

  const handleStop = () => {
    setIsCounting(false);
  };

  const handleReset = () => {
    setIsCounting(false);
    setTimeLeft(inputMinutes);
  };

  const setMinutes = (event) => {
    const value = event.target.value;
    setTimeLeft(value);
    setInputMinutes(value);
  }

  return (
    <div className="app">
      <InputValue setMinutes={setMinutes}/>
      <Timer minutes={minutes} seconds={seconds}/>
      <Buttons handleStop={handleStop} handleStart={handleStart} handleReset={handleReset} isCounting={isCounting}/>
    </div>
  );
}

export default App;
