import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import {applyMiddleware, createStore} from 'redux';
import {reducer} from '../reducer/reducer';
import {AsyncStorage} from 'react-native';

const persistConfig = {
  storage: AsyncStorage,
  key: 'root',
};

const persistedReducer = persistReducer(persistConfig, reducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

module.exports = {store, persistor};
