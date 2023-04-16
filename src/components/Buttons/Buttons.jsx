import React from "react";
import styled from "styled-components";

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 10px;
  & button {
    width: 100px;
    height: 60px;
    padding: 5px;
    color: #e9ecf2;
    background-color: #a61f12;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 24px;
    border-radius: 5px;
    border: 0;
    &:hover {
      color: #a61f12;
      background-color: #e9ecf2;
      border: 1px solid #a61f12;
    }
  }
`;

const Buttons = ({ handleStop, handleStart, handleReset, isCounting }) => {
  return (
    <ButtonsWrapper>
      {isCounting ? (
        <button onClick={handleStop}>Stop</button>
      ) : (
        <button onClick={handleStart}>Start</button>
      )}
      <button onClick={handleReset}>Reset</button>
    </ButtonsWrapper>
  );
};

export default Buttons;
