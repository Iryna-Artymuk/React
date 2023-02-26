import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import "./TodoList.css";
const TodoList = ({ todo, deleteToDo }) => (
  <div className="todoList ">
    <h3> To do list </h3>
    <ul>
      {todo.map((item) => (
        <li key={item.id} className="item">
          <p>{item.name} </p>
          <button onClick={() => deleteToDo(item.id)}>
            <AiOutlineClose />
          </button>
        </li>
      ))}
    </ul>
  </div>
);

export default TodoList;
