import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './App.module.css';
import { AddTodoForm } from './components/AddTodoForm';
import { CategorySelector } from './components/CategorySelector';
import { TodoCard } from './components/TodoCard';

const App = () => {
  const { todoList } = useSelector((state) => state.todos);
  const { selectedCategory } = useSelector((state) => state.categories);

  const mainWrapperStyles = classNames({
    'uk-animation-fade': true,
    'uk-container': true
  });

  const renderTodoList = () => {
    let list;

    if (selectedCategory === 'all') {
      list = todoList;
    } else {
      list = todoList.filter((todo) => todo.category === selectedCategory);
    }

    return list.map((todo) => <TodoCard key={todo.id} data={todo} />);
  };

  return (
    <div className={mainWrapperStyles}>
      <div className="uk-card-default uk-card-body">
        <h1 className={styles.title}>Todo</h1>
        <CategorySelector />
        <div className={styles.todos}>{renderTodoList()}</div>
        <AddTodoForm />
      </div>
    </div>
  );
};

export default App;
