import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer/reducer';
import { categoryReducer } from './categoryReducer/reducer';

export default combineReducers({
  todos: todoReducer,
  categories: categoryReducer
});
