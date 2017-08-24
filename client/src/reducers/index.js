import { combineReducers } from 'redux';
import { reducer as FormReducer} from 'redux-form';
//
import AuthReducer from './AuthReducer';

// maps state and reducer
const reducers = combineReducers({
  auth: AuthReducer,
  form: FormReducer
});

export default reducers; 