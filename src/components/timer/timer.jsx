import React from "react";
import styled from "styled-components";

const timer = styled.div`
    color: #F23E2E;
    font-size: 120px;
`

const Timer = ({ minutes, seconds }) => {
  return (
    <timer>
      <span>{minutes}</span>
      <span>:</span>
      <span>{seconds}</span>
    </timer>
  );
};



export default Timer;
