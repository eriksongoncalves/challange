import {combineReducers} from 'redux';
import books from './books';
import general from './general';

export default combineReducers({
    books,
    general
})