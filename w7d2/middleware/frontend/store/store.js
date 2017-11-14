import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const addLoggingToDispatch = (store) => (next) => (action) => {
  console.log(store.getState());
  console.log(action);
  next(action);
  console.log(store.getState());
};

const anotherOne = (store) => (next) => (action) => {
  console.log('ANOTHER ONE');
  console.log(store.getState());
  console.log(action);
  console.log('next is...');
  console.log(next);
  console.log('...end of next');
  next(action);
  console.log(store.getState());
};

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch, anotherOne));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
};

export default configureStore;
