import {profileAPI, usersAPI} from "../API/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'


let initialState = {
    postData: [
        {id: 1, message: 'hi how are you?', likecount: 15},
        {id: 2, message: 'it is my first post', likecount: 20}
    ],
    newPostText: 'it-kamasutra',
    profile: null,
    status: ""

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPostText,
                likecount: 0
            };
            let stateCopy = {...state};
            stateCopy.postData = [...state.postData]
            stateCopy.postData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
/*        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }*/

        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }

        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }

        default:
            return state;
    }
}

// создаем ActionCreators

export const addPostActionCreator = (newPostText) => ({type: ADD_POST, newPostText})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, status})

export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data))
        })
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(response => {
            dispatch(setUserStatus(response.data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {

        profileAPI.updateStatus(status).then(response => {
            debugger;
            if (response.data.resultCode === 0) {
                dispatch(setUserStatus(status))

            }
        })
    }
}


export default profileReducer