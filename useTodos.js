import { useEffect, useReducer } from "react";
import { todoReducer } from "../todoReducer";

// const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  /*Segundo argumento del useReducer */
  //estado inicial
  /*Tercer argumento del useReducer */
  // una funcion que es la funcion inicializadora
  // en caso tenga un proceso pesado
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    };
    // esta funcion que voy a usar para mandar esta accion
    dispatch(action);
    console.log({ todo });
  };

  const handleDelelteTodo = (id) => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    });
  };
  const handleToggleTodo = (id) => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    });
    console.log({ id });
  };

  return {
    todos,
    todosCount: todos.length,
    pendingTodosCount: todos.filter((todo) => !todo.done).length,
    handleNewTodo,
    handleDelelteTodo,
    handleToggleTodo,
  };
};
