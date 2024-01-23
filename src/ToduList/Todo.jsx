import React, { useState } from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";

export default function Todo() {
  const [todo, setTodo] = useState([]);

  function addFunc(a) {
    setTodo([...todo, a]);
  }
  return (
    <center>
      <TodoInput add={addFunc} />

      {todo.map((i) => {
        return <TodoList item={i} />;
      })}
    </center>
  );
}
