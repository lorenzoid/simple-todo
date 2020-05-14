# Todo App for Lumen5

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Answers to Questions 4 and 5

Question 4:
What are the different components that you would use to render this app:

Please see the `/components` directory. Essentially they are:

- `AddTodoForm` for adding a new todo
- `CategorySelector` for selecting a new category
- `TodoCard` for rendering a todo

Question 5:
Now assume you are using redux to store the data. What are the actions and reducers that you’d use?

In this case I implemented redux-thunk just for futureproofing (assuming that we'd move away from locally temporally storing data locally and transitioning over to rest based AJAX type calls).

Please see the `/reducers` directory:

There are 2 reducers I created:

- todoReducer for all things related to the todo (essentially just the todoList)
- categoriesRedcuer for all things related to categories.
