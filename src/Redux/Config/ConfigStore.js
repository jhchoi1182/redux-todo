import { combineReducers, createStore } from 'redux';
import Todos from '../Modules/Todos';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  Todos
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
