import TodoItem from "./todoItem";

function TodoList({
  onItemDeleted = () => {},
  onItemSelected = () => {},
  todos,
}) {
  if (todos.length === 0) {
    return (
      <div className="p-4 my-3 bg-body-tertiary rounded-3">
        <div className="display-4">Good Job!</div>
        <div>You are all done go to the beach 🏖️</div>
      </div>
    );
  }

  const totalTodos = todos.length;
  const completedTodos = todos.filter((todo) => todo.isComplete).length;

  return (
    <div className="list">
      <div className="status">
        {completedTodos}/{totalTodos}
      </div>

      <div className="items mt-3">
        <ul className="list-group">
          {todos.map((todo) => (
            <TodoItem
              onClick={onItemSelected}
              onDelete={onItemDeleted}
              key={todo.id}
              todo={todo}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
