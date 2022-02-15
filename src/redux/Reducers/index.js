import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import LoaderReducer from './LoaderReducer';
import TrackReducer from './TrackReducer'
// import DatabaseReducer from './DatabaseReducer';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const RootReducer = combineReducers({
  AuthReducer: persistReducer(persistConfig, AuthReducer),
  LoaderReducer,
  TrackReducer
  // DatabaseReducer,
});

export default RootReducer;
