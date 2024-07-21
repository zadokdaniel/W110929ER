import TodoItem from "./todoItem";

function TodoList() {
  return (
    <div className="list">
      <div className="status">6/15</div>

      <div className="p-4 my-3 bg-body-tertiary rounded-3">
        <div className="display-4">Good Job!</div>
        <div>You are all done go to the beach 🏖️</div>
      </div>

      <div className="items mt-3">
        <ul className="list-group">
          <TodoItem />
          <TodoItem />
          <TodoItem />
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
