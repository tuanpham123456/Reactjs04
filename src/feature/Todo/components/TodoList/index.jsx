import React from "react";
import PropTypes from "props-type";
import "./styles.scss";

TodoList.PropTypes = {
  todoList: PropTypes.array
};

TodoList.defaultProps = {
  todoList: []
};

function TodoList({ todoList }) {
  return (
    <ul>
      {todoList.map((todo) => (
        <li key={todo.id}>{todo.active}</li>
      ))}
    </ul>
  );
}

export default TodoList;
