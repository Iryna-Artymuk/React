import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import './TodoList.css';
const TodoList = props => {
  const { todo, deleteToDo, completed, ToggleComplete } = props;

  return (
    <div className="todoList ">
      <h3> To do list </h3>
      <ul>
        {todo.map(item => {
          return (
            <li key={item.id} className="item">
              <input
                type="checkbox"
                className="TodoList__checkbox"
                checked={completed}
                onChange={() => ToggleComplete(item.id)}
              />

              <p>{item.name} </p>

              <button onClick={() => deleteToDo(item.id)}>
                <AiOutlineClose />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default TodoList;
