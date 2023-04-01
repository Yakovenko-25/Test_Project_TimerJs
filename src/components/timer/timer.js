import React from "react";

const Timer = ({ minutes, seconds }) => {
  return (
    <div className="timer">
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </div>
  );
};



export default Timer;
