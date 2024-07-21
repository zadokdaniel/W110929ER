import useLocalStorage from "./useLocalStorage";

export function useTodo() {
  const [todos, setTodos, { clear }] = useLocalStorage({
    key: "todo",
    initialValue: [],
    reviver: (key, value) => {
      if (key === "createdAt") {
        return new Date(value);
      }

      return value;
    },
  });

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };
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

  return {
    todos,
    addTodo,
    removeTodo,
    changeIsComplete,
  };
}

export default useTodo;
