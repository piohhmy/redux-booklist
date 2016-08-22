import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {combineReducers, createStore} from 'redux';
import BooksReducer from './reducers/reducer-books';
import ActiveBook from './reducers/reducer-activeBook';
import {Provider} from 'react-redux';


const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('.container')
);
