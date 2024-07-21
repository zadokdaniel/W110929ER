import { useState } from "react";

import TodoForm from "./todoForm";
import TodoList from "./todoList";

function Todo() {
  const [todos, setTodos] = useState([
    {
      id: crypto.randomUUID(),
      text: "Buy Milk",
      isComplete: true,
      createdAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      text: "Sell Car",
      isComplete: false,
      createdAt: new Date(),
    },
    {
      id: crypto.randomUUID(),
      text: "Draw for 50 minutes",
      isComplete: true,
      createdAt: new Date(),
    },
  ]);

  const removeTodo = (id) =>
    setTodos((todos) => todos.filter((todo) => todo.id !== id));

  const changeIsComplete = (id, isComplete) =>
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id !== id) {
          return todo;
        }

        return {
          ...todo,
          isComplete:
            typeof isComplete === "boolean" ? isComplete : !todo.isComplete,
        };
      })
    );

  return (
    <div className="container-md mt-3 todo">
      <TodoForm />
      <TodoList
        todos={todos}
        onItemDeleted={removeTodo}
        onItemSelected={changeIsComplete}
      />
    </div>
  );
}

export default Todo;
