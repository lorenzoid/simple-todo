import { useSelector, useDispatch } from 'react-redux';
import React from 'react';
import { func, string } from 'prop-types';
import { selectCategory } from '../reducers/categoryReducer/actions';

export const CategorySelector = (props) => {
  const { entities, selectedCategory } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  const handleSelectCategory = (categoryId) => {
    dispatch(selectCategory(categoryId));
  };

  return (
    <div>
      <select className="uk-select" onChange={(e) => handleSelectCategory(e.target.value)} value={selectedCategory}>
        <option value="all">Filter By Category</option>
        {Object.values(entities).map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

CategorySelector.propTypes = {
  changeHandler: func,
  category: string
};
