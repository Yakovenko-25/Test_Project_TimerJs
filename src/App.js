import { useState, useEffect } from "react";
import { getPadTime } from "./helpers/getPadTime";
import "./style.css";

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

  function setMinutes(event) {
    setTimeLeft(event.target.value);
    setInputMinutes(event.target.value);
  }

  return (
    <div className="app">
      <section className="inputValue">
        <div className="minutes">
          <p>Set time (in seconds)</p>
          <input type="text" onInput={setMinutes} />
        </div>
      </section>
      <div className="timer">
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className="buttons">
        {isCounting ? (
          <button onClick={handleStop}>Stop</button>
        ) : (
          <button onClick={handleStart}>Start</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
