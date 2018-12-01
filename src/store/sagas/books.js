import {call, put} from 'redux-saga/effects';
import axios from 'axios';
import {loadBooks, loadBooksFailure} from '../actions/books';

export function* booksRequest(action){
    try{
        let url = 'https://www.googleapis.com/books/v1/volumes?q=PHP';

        if (!action.payload.reached){
            url = action.payload.refreshing 
                ? 'https://www.googleapis.com/books/v1/volumes?q=NODE'
                : 'https://www.googleapis.com/books/v1/volumes?q=REACT'
        }

        const {data} = yield call(axios.get, url);
        yield put(loadBooks(data.items));
    }
    catch(e){
        yield put(loadBooksFailure());
    }
}