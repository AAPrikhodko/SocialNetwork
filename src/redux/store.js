import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

let store = {
    _state: {

        profilePage: {
            postData: [
                {id: 1, message: 'hi how are you?', likecount: 15},
                {id: 2, message: 'it is my first post', likecount: 20}
            ],
            newPostText: 'it-kamasutra'
        },
        dialogsPage: {
            dialogsData: [
                {id: 1, name: "Andrey"},
                {id: 2, name: "Natalia"},
                {id: 3, name: "Milana"},
                {id: 4, name: "Lorry"},
                {id: 5, name: "Basik"},
                {id: 5, name: "Kolbasik"}
            ],
            messageData: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Meow"},
                {id: 3, message: "I want to eat"},
            ],
            newMessageText: ''
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subcriber(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;