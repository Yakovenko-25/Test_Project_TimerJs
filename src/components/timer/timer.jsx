import React from "react";
import styled from "styled-components";

const TimerWrapper = styled.div`
    color: #F23E2E;
    font-size: 120px;
`

const Timer = ({ minutes, seconds }) => {
  return (
    <TimerWrapper>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </TimerWrapper>
  );
};



export default Timer;
