import React from 'react';
import { func, string } from 'prop-types';

export const CategorySelector = (props) => {
  const { changeHandler, category } = props;

  return (
    <div>
      <select className="uk-select" onChange={(e) => changeHandler(e.target.value)} value={category}>
        <option value="all">Filter by Category</option>
        <option value="home">Home</option>
        <option value="work">Work</option>
      </select>
    </div>
  );
};

CategorySelector.propTypes = {
  changeHandler: func,
  category: string
};
