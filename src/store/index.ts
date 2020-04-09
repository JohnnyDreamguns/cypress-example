import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import formReducer from './form/reducer';
import globalReducer from './global/reducer';

const rootReducer = combineReducers({
  form: formReducer,
  global: globalReducer
});

const store: any = createStore(rootReducer, composeWithDevTools());

export default store;
