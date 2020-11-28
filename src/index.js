import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import allReducer from './reducers'


const store = createStore(allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

/*
//ACTIONS
const inc = () => {
  return {
    type: 'inc'
  };
}

const dec = () => {
  return {
    type: 'dec'
  }
}

//REDUCER
const counter = (state = 0, action) => {
  console.log(action)
  switch(action.type) {
    case 'inc':
      return state + 1;
    case 'dec':
      return state - 1;
    default:
      return state;
    }
}  

//STORE
let store = createStore(counter)

store.subscribe(()=>console.log(store.getState()))
//DISPATCH

store.dispatch(inc())*/


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
