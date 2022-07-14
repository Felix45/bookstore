const CHECK_STATUS = 'bookstore-app/categories/CHECK_STATUS';

const initialState = ['Fiction', 'Drama', 'Computer Science', 'Technology', 'Politics', 'Product Design'];
export const checkStatus = () => ({
  type: CHECK_STATUS,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return state;
    default:
      return state;
  }
};

export default categoriesReducer;
