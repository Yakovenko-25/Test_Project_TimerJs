import React from "react";
import styled from "styled-components";

const InputBox = styled.section`
  & p {
    font-size: 35px;
    margin: 0;
    color: red;
  }
`;

const Minutes = styled.div`
    display: flex;
    flex-direction: column;
    & input[type=text] {
      padding: 10px;
      align-self: flex-end;
      width: 35%;
      background: transparent;
      border: 1px solid #000;
      border-bottom-right-radius: 10px;
      border-top-left-radius: 10px;
      font-size: 20px;
      &:focus {
        background-color: #A61F12;
        color: white;
        border: 1px solid transparent;
        border-top-left-radius: 10px;
        outline-style: none;
        &::-moz-placeholder {
          color: transparent;
        }
        &::placeholder {
          color: transparent;
        }
      }
    }
    
`; 


const InputValue = ({setMinutes}) => {
  return (
    <InputBox>
      <Minutes>
        <p>Set time (in seconds)</p>
        <input type="text" onInput={setMinutes} placeholder="seconds"/>
      </Minutes>
    </InputBox>
  );
};

export default InputValue;