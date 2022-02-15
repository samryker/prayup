/* eslint-disable prettier/prettier */
import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import rootReducer from './rootReducer';
import thunk from 'redux-thunk';


export const middlewares = [logger, thunk];
let composeEnhancers = compose;
if (__DEV__) {
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; comp
}
export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(...middlewares)
));
export default store;
