import { combineReducers } from 'redux';
import AppReducer from './appReducer';

const rootReducer = combineReducers({ app: AppReducer })

export default rootReducer;