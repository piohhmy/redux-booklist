import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {combineReducers, createStore} from 'redux';
import BooksReducer from './reducers/reducer-books';
import {Provider} from 'react-redux';


const rootReducer = combineReducers({
  books: BooksReducer
});

let store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.querySelector('.container')
);
