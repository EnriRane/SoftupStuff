import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './combinedReducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware()));

export { store };
