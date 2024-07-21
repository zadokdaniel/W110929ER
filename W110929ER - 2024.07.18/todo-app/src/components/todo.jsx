import TodoForm from "./todoForm";
import TodoList from "./todoList";

function Todo() {
  return (
    <div className="container-md mt-3 todo">
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default Todo;
