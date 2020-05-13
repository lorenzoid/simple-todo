import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer/reducer';

export default combineReducers({
  todos: todoReducer
});
