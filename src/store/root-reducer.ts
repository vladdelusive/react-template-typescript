import { reducer as smthReducer} from "store/smth/reducer";
import { combineReducers } from "redux";
//import { reducer as formReducer } from 'redux-form';

export const rootReducer = combineReducers({
  smth: smthReducer,
  //form: formReducer,
});
