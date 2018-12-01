const INITIAL_STATE = {
    modalVisible : false
}

export default function (state = INITIAL_STATE, action){
    switch(action.type){
        case 'UPDATE_STATE_MODAL':
            return {modalVisible: action.payload.modalVisible};
        default: 
            return state
    }
}