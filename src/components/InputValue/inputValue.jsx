import React from "react";
import styled from "styled-components";

const inputValue = styled.section`
    background-color: black;
    width: 100;
`;

const minutes = styled.div`
    display: flex;
    background-color: black;
    flex-direction: column;
`;

const inputText = styled.input`

`


const InputValue = ({setMinutes}) => {
  return (
    <inputValue>
      <minutes>
        <p>Set time (in seconds)</p>
        <input type="text" onInput={setMinutes} placeholder="seconds"/>
      </minutes>
    </inputValue>
  );
};

export default InputValue;