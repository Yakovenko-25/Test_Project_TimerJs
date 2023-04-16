import React from "react";
import styled from "styled-components";

const Input = styled.section`

`;

const Minutes = styled.div`
    display: flex;
    background-color: black;
    flex-direction: column;
    & p{
      text-size: 50px;
    }
`; 

const inputText = styled.input`

`


const InputValue = ({setMinutes}) => {
  return (
    <Input>
      <Minutes>
        <p>Set time (in seconds)</p>
        <input type="text" onInput={setMinutes} placeholder="seconds"/>
      </Minutes>
    </Input>
  );
};

export default InputValue;