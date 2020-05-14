import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from './actionTypes';

const initialState = {
  todoList: []
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.newTodo]
      };

    case DELETE_TODO:
      return {
        ...state,
        todoList: state.todoList.filter((item) => item.id !== action.idToDelete)
      };

    case UPDATE_TODO:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id !== action.updatedTodo.id ? todo : { ...todo, ...action.updatedTodo }
        )
      };

    default:
      return state;
  }
};
