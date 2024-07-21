import { useState } from "react";

import TodoForm from "./todoForm";
import TodoList from "./todoList";

function Todo() {
  const [todos, setTodos] = useState([]);

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

  const addTodo = (text) =>
    setTodos((todos) => [
      ...todos,
      {
        id: crypto.randomUUID(),
        text,
        isComplete: false,
        createdAt: new Date(),
      },
    ]);

  return (
    <div className="container-md mt-3 todo">
      <TodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        onItemDeleted={removeTodo}
        onItemSelected={changeIsComplete}
      />
    </div>
  );
}

export default Todo;
