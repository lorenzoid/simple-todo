import { CREATE_TODO, UPDATE_TODO } from './actionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addTodo = ({ content, category }) => {
  return (dispatch) => {
    dispatch({
      type: CREATE_TODO,
      newTodo: {
        id: uuidv4(),
        category: category.id,
        content,
        isCompleted: false
      }
    });
  };
};

export const updateTodo = ({ id, content, category, isCompleted }) => {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TODO,
      updatedTodo: {
        id,
        content,
        category,
        isCompleted
      }
    });
  };
};
