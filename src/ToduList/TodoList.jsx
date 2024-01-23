import React from "react";

export default function TodoList(props) {
  return (
    <>
      <h2 className="">
        {props.item}
        <span>
          <i class="fa-solid fa-delete-left icon-delete"></i>
        </span>
      </h2>
    </>
  );
}
