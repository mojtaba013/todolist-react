import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  const addTodoHandler = (input) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      text: input,
      icCompleted: false,
    };
    setTodos([...todos, newTodo]);
  };

  const completeFunction = (_id) => {
    console.log(_id);
    const index = todos.findIndex((item) => item.id === _id);
    const selectedTodo = { ...todos[index] };
    selectedTodo.isCompleted = !selectedTodo.isCompleted;
    const updatetTodos=[...todos];
    updatetTodos[index]=selectedTodo;
    setTodos(updatetTodos);
  };

  return (
    <div className="container">
      This is a TodoList App.
      <TodoForm sex={addTodoHandler} />
      <TodoList _onComplete={completeFunction} porn={todos} />
    </div>
  );
};

export default TodoApp;
