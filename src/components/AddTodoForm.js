import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/todoReducer/actions';

export const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('home');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ content, category }));
    setContent('');
    setCategory('home');
  };

  return (
    <Fragment>
      <p>Add a task:</p>
      <form className="uk-flex" onSubmit={handleSubmit}>
        <div>
          <button className="uk-button uk-button-default" type="submit">
            +
          </button>
        </div>
        <div>
          <input
            className="uk-input"
            placeholder="task"
            type="text"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>
        <div>
          <select className="uk-select" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="home">home</option>
            <option value="work">work</option>
          </select>
        </div>
      </form>
    </Fragment>
  );
};
