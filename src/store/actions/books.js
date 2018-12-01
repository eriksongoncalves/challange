export const booksRequest = (refreshing,reached) => ({
    type: 'BOOKS_REQUEST',
    payload:{
        refreshing,
        reached
    }
});

export const loadBooksFailure = books => ({
    type: 'LOAD_BOOKS_FAILURE'
})

export const loadBooks = books => ({
    type: 'LOAD_BOOKS',
    payload: {
        books
    }
})