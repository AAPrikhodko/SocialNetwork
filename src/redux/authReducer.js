import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    users: [/*
        {
            id: 1,
            photo: 'https://get.wallhere.com/photo/men-portrait-blue-eyes-hat-photography-smoking-Gentleman-old-people-hair-moustache-beards-Person-pipes-man-beard-photograph-cowboy-male-hairstyle-facial-hair-209673.jpg',
            isFollowed: false,
            fullName: 'Andrey P.',
            status: 'I am learning React',
            country: 'Russia',
            city: 'Moscow'
        },
        {
            id: 2,
            photo: 'https://avatars.mds.yandex.net/get-pdb/1209255/aeab6fb7-b034-4896-a108-84f81d794eef/s1200?webp=false',
            isFollowed: true,
            fullName: 'Natalia P.',
            status: 'I am learning Tilda',
            country: 'Russia',
            city: 'Moscow'
        },
        {
            id: 3, photo: 'https://i.pinimg.com/736x/81/9a/f6/819af64819d18e120f2a89cb5ba259f4.jpg',
            isFollowed: false, fullName: 'Milana P.', status: 'I am learning English', country: 'Russia', city: 'Moscow'
        },*/],
    userId: null,
    email: null,
    login: null,
    isAuth: false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            }


        default:
            return state;
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    data: {userId, email, login, isAuth}
})
export const getAuthUserData = () => (dispatch) => {
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true))
            }
        })

}

export const login = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
        })
}


export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}


export default authReducer;