import React, { useState } from "react";
import "./todo.css";

export default function TodoInput(props) {
  let [input, setInput] = useState("");
  return (
    <div className="input_container">
      <input
        type="text"
        className="Todo_box"
        placeholder="Enter Your Massage"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button
        className="add_btn"
        onClick={() => {
          props.add(input);
          setInput("");
        }}
      >
        OK
      </button>
      <h3>{input}</h3>
    </div>
  );
}
