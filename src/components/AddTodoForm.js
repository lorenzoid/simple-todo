import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../reducers/todoReducer/actions';
import { addCategory, selectCategory } from '../reducers/categoryReducer/actions';

export const AddTodoForm = () => {
  const dispatch = useDispatch();
  const [content, setContent] = useState('');
  const [categoryName, setCategoryName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addCategory({ categoryName })).then((category) => {
      dispatch(addTodo({ content, category }));
    });

    dispatch(selectCategory('all'));

    setContent('');
    setCategoryName('');
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
            required
            className="uk-input"
            placeholder="task"
            type="text"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          />
        </div>
        <div>
          <input
            required
            className="uk-input"
            placeholder="category"
            type="text"
            onChange={(e) => setCategoryName(e.target.value)}
            value={categoryName}
          />
        </div>
      </form>
    </Fragment>
  );
};
