import TodoForm from "./todoForm";
import TodoList from "./todoList";
import useTodo from "../hooks/useTodo";

function Todo() {
  const { todos, addTodo, removeTodo, changeIsComplete } = useTodo();

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
