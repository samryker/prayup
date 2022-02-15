import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './Reducers';
import { persistStore, persistReducer } from 'redux-persist';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
export const middlewares = [logger, thunk];
let composeEnhancers = compose;
if (__DEV__) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}
const Store = createStore(
  RootReducer,
  // {},
  composeWithDevTools(
    applyMiddleware(...middlewares)
  ),
  // applyMiddleware(
  //   createLogger(),
  //   thunk
  // ),
);

let Persistor = persistStore(Store);

export { Store, Persistor };
