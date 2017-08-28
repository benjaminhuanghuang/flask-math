import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
//
import AuthReducer from './modules/auth/AuthReducer';

const RootReducer = combineReducers({
  form: FormReducer,
  auth: AuthReducer
});

export default RootReducer;

