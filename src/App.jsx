import { useState, useEffect } from "react";
import { getPadTime } from "./lib/getPadTime";
import Timer from "./components/timer/timer.jsx";
import InputValue from "./components/InputValue/inputValue.jsx";
import Buttons from "./components/Buttons/Buttons.jsx";
import styled from "styled-components";

const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 28px;
  width: 100vw;
  height: 100vh;
  background-color: #E9ECF2;
`


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
      if (timeLeft === 0) setTimeLeft(inputMinutes);
      
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
      <AppWrapper>
        <InputValue setMinutes={setMinutes}/>
        <Timer minutes={minutes} seconds={seconds}/>
        <Buttons handleStop={handleStop} handleStart={handleStart} handleReset={handleReset} isCounting={isCounting}/>
      </AppWrapper>
    );
  }
  
  export default App;
  