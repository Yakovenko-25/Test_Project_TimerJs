import React from "react";

const InputValue = ({setMinutes}) => {
  return (
    <section className="inputValue">
      <div className="minutes">
        <p>Set time (in seconds)</p>
        <input type="text" onInput={setMinutes} placeholder="seconds"/>
      </div>
    </section>
  );
};

export default InputValue;