let currentId = 4;

let todos = [];

function getTodos() {
  return [...todos];
}

function getTodo(id) {
  const found = todos.find((todo) => todo.id === id);

  if (!found) {
    throw new Error("id was not found");
  }

  return found;
}

function addTodo(text, isDone = false) {
  if (typeof text !== "string" || text.length < 2) {
    throw new Error("Task must be at least two characters");
  }

  const todo = {
    id: currentId++,
    text,
    isDone,
    createdAt: new Date(),
  };

  todos = [...todos, todo];
  return todo;
}

function removeTodo(id) {
  const removedTodo = getTodo(id);

  todos = todos.filter((todo) => todo.id !== id);

  return removedTodo;
}

function clearTodos() {
  todos = [];
}

function changeComplete(id, isDone = undefined) {
  todos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        isDone: typeof isDone === "boolean" ? isDone : !todo.isDone,
      };
    }

    return todo;
  });

  const updatedTodo = getTodo(id);
  return updatedTodo;
}
