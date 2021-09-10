import React from "react";
import PropTypes from "props-type";
// import "./styles.scss";
import TodoList from "./components/TodoList";

TodoFeature.PropTypes = {};

function TodoFeature(props) {
  const todoList = [
    { id: 1, active: "eat" },
    { id: 2, active: "Sleep" },
    { id: 3, active: "Code" }
  ];

  return (
    <div>
      <h3>TODO LIST</h3>
      {/* props là todolist truyền vào mảng cũng là todolist luôn */}
      <TodoList todoList={todoList}></TodoList>
    </div>
  );
}

export default TodoFeature;
