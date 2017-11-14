import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';

// const addLoggingToDispatch = (store) => {
//   const sevenEleven = store.dispatch;
//   return (action)=> {
//     console.log(store.getState());
//     console.log(action);
//     console.log(sevenEleven(action));
//     console.log(store.getState());
//   };
// };

// const addLoggingToDispatch = (store) => (next) => (action) => {
//   console.log(store.getState());
//   console.log(action);
//   next(action);
//   console.log(store.getState());
// };

// const applyMiddlewares = (store, middlwares)  =>  {
//   let dispatch = store.dispatch;
//   middlwares.forEach((el) => {
//     dispatch = el(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch });
// };

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  let store = configureStore(preloadedState);
  // store.dispatch = addLoggingToDispatch(store);
  // store = applyMiddlewares(store, [addLoggingToDispatch]);
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});
