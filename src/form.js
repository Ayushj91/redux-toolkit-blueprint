import { useState } from "react";
import { useDispatch } from 'react-redux'

import { useSelector } from "react-redux";
import { deletetodo, addtodo, toggletodo } from "./features/todo/todoslice";

function TodoForm() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addtodo({
        title: inputValue,
        completed: false,
      })
    );

    setInputValue("");
  };

  const handleTodoDelete = (id) => {
    dispatch(
      deletetodo({
        id,
      })
    );
  };

  const handleTodoComplete = (id) => {
    dispatch(
      toggletodo({
        id,
      })
    );
  };

  return (
    <div className="max-w-md mx-auto">
        <h1 className="text-4xl text-center mb-4">Todo App</h1>
        {todos.title}
      <form onSubmit={handleFormSubmit}>
        <div className="flex items-center border-b  border-teal-500 py-2">
          <input
            className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Add todo"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
      <ul className="list-disc">
        {todos.map((todo) => (
          <li key={todo.id} className="flex items-center">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleTodoComplete(todo.id)}
            />
            <span
              className={`ml-2 ${
                todo.completed ? "line-through text-gray-500" : ""
              }`}
            >
              {todo.title}
            </span>
            <button
              className="ml-auto bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
              onClick={() => handleTodoDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoForm;
