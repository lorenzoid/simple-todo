import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { AddTodoForm } from './components/AddTodoForm';
import { CategorySelector } from './components/CategorySelector';
import { TodoCard } from './components/TodoCard';
import classNames from 'classnames';
import styles from './App.module.css';

const App = () => {
  const { todoList } = useSelector((state) => state.todos);
  const [category, setCategory] = useState('all');

  const filteredTodos = () => {
    return category === 'all' ? todoList : todoList.filter((todo) => todo.category === category);
  };

  const mainWrapperStyles = classNames({
    'uk-animation-fade': true,
    'uk-container': true
  });

  return (
    <div className={mainWrapperStyles}>
      <div className="uk-card-default uk-card-body">
        <h1 className={styles.title}>Todo</h1>
        <CategorySelector changeHandler={setCategory} category={category} />

        <div className={styles.todos}>
          {filteredTodos().length ? (
            filteredTodos().map((todo) => <TodoCard key={todo.id} data={todo} />)
          ) : (
            <p>No tasks at the moment...</p>
          )}
        </div>
        <AddTodoForm />
      </div>
    </div>
  );
};

export default App;
