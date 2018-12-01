import { all, takeLatest } from 'redux-saga/effects';
import { booksRequest, searchBooksRequest } from './books';

export default function* rootSaga() {
    return yield all([
        takeLatest('BOOKS_REQUEST', booksRequest)
    ]);
}