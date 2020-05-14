import { CREATE_CATEGORY, SELECT_CATEGORY } from './actionTypes';

export const addCategory = ({ categoryName }) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      const tokenizeCategory = categoryName.toLowerCase().replace(/\s/g, '');

      const newCategory = {
        id: tokenizeCategory,
        name: categoryName
      };

      dispatch({
        type: CREATE_CATEGORY,
        newCategory
      });
      resolve(newCategory);
    });
  };
};

export const selectCategory = (categoryId) => {
  return (dispatch) => {
    dispatch({
      type: SELECT_CATEGORY,
      selectedCategory: categoryId
    });
  };
};
