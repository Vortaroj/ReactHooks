export const todoReducer = (state, action = {}) => {
  switch (action.type) {
    case 'Add todo':
      return [...state, action.payload];
      break;
    case 'Delete todo':
      return state.filter((todo) => todo.id !== action.payload);
      break;
    case 'Done todo':
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done,
          };
        }

        return todo;
      });
      break;
    default:
      return state;
      break;
  }
};
