import {useEffect, useReducer} from 'react';
import {todoReducer} from './todoReducer';

//Esta es una opción 1 en donde viene inicializado el State
// const initialState = JSON.parse(localStorage.getItem('todos')) || [];

//Esta es una opción 2 en donde se inicializa el State mediante una función
const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const useTodo = () => {
  //Esta es una opción 1 en donde viene inicializado el State
  //   const [todos, dispatch] = useReducer(todoReducer, initialState);

  //Esta es una opción 2 en donde se inicializa el State mediante la función init
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const total = todos.length;
  const pendientes = todos.filter((todo) => !todo.done).length;

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: 'Add todo',
      payload: todo,
    };

    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: 'Delete todo',
      payload: id,
    };

    dispatch(action);
  };

  const handleToggleTodo = (id) => {
    const action = {
      type: 'Done todo',
      payload: id,
    };

    dispatch(action);
  };

  return {
    todos,
    total,
    pendientes,
    handleNewTodo,
    handleDeleteTodo,
    handleToggleTodo,
  };
};
