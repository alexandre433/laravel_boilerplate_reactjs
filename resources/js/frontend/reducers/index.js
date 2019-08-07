import { combineReducers } from 'redux';
import config from './config';

const allReducers = combineReducers({
    posts: config,
});

export default allReducers;
