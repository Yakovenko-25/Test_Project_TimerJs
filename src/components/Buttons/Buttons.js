import React from "react";

const Buttons = ({ handleStop, handleStart, handleReset, isCounting }) => {
  return (
    <div className="buttons">
      {isCounting ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Buttons;
