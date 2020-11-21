const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE_NEW_MESSAGE';

let initialState = {
    dialogsData: [
        {id: 1, name: "Andrey"},
        {id: 2, name: "Dmitry"},
        {id: 3, name: "Ivan"},
        {id: 4, name: "Denis"},
        {id: 5, name: "Vladimir"},
        {id: 5, name: "Konstantin"}
    ],
    messageData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "I am a teacher"},
        {id: 3, message: "Today the weather is sunny"},
    ],
    newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy;

    switch (action.type) {
        case ADD_MESSAGE: {
            let newM = {
                id: 4,
                message: action.newMessageText,
            };

            stateCopy = {
                ...state,
                messageData: [...state.messageData, newM],
                newMessageText: ''
            }

        }
            return stateCopy;
/*        case  UPDATE_NEW_MESSAGE: {

            stateCopy = {
                ...state,
                newMessageText: action.newM
            };
        }*/
            return stateCopy;
        default:
            return state;
    }
}

export const addMessageActionCreator = (message) => {
    return {
        type: ADD_MESSAGE,
        newMessageText: message
    }
}

/*export const updateNewMessageActionCreator = (m) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newM: m
    }
}*/
export default dialogsReducer;