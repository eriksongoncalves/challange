const INITIAL_STATE = {
    loader: true,
    refreshing: false,
    items: []
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case 'LOAD_BOOKS':
            return {
                loader: false,
                refreshing: false,
                items: [...state.items, ...action.payload.books]
            };
        case 'LOAD_BOOKS_FAILURE':
            return {
                ...state,
                loader: false,
                refreshing: false
            };
        default: 
            return state
    }
}