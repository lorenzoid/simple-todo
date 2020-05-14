import React from 'react';
import { string, bool } from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodo } from '../reducers/todoReducer/actions';
import classNames from 'classnames';
import styles from './TodoCard.module.scss';

export const TodoCard = ({ data }) => {
  const { id, category, content, isCompleted } = data;
  const { entities } = useSelector((state) => state.categories);

  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(
      updateTodo({
        id,
        category,
        content,
        isCompleted: !isCompleted
      })
    );
  };

  const todoCardStyles = classNames({
    'uk-animation-slide-left': true,
    'uk-card-default': true,
    'uk-card-body': true,
    [styles.todoCard]: true
  });

  const categoryLabelStyles = classNames({
    'uk-label': true,
    [styles.categoryLabel]: true
  });

  const todoContentStyles = classNames({
    [styles.todoContent]: true,
    [styles.crossOut]: isCompleted
  });

  return (
    <div className={todoCardStyles}>
      <input className="uk-checkbox" type="checkbox" checked={isCompleted} onChange={handleChange} />
      <span className={todoContentStyles}>{content}</span>
      <span className={categoryLabelStyles}>{entities[category].name}</span>
    </div>
  );
};

TodoCard.propTypes = {
  id: string,
  content: string,
  category: string,
  isCompleted: bool
};
