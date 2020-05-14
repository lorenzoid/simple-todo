import { CREATE_CATEGORY, SELECT_CATEGORY } from './actionTypes';

const initialState = {
  entities: {},
  selectedCategory: 'all'
};

export const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORY:
      return {
        ...state,
        entities: {
          ...state.entities,
          [action.newCategory.id]: action.newCategory
        }
      };
    case SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: action.selectedCategory
      };
    default:
      return state;
  }
};
