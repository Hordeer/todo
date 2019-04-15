import { GET_TODOS, ADD_TODO, DELETE_TODO, EDIT_TODO } from '../actions';

function todoReducer(state = {}, action) {
  switch (action.type) {
    case EDIT_TODO:
      if (state.id !== action.todo.id) {
        return state;
      }

      return action.todo;

    default:
      return state;
  }
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_TODOS:
      return action.todos;

    case ADD_TODO:
      return [...state, action.todo];

    case DELETE_TODO:
      const index = state.findIndex(todo => todo.id === action.id);

      return [
        ...state.slice(0, index),
        ...state.slice(index + 1)
      ];

    case EDIT_TODO:
      return state.map(todo => todoReducer(todo, action));

    default:
      return state;
  }
}
