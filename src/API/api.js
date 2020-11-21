import * as axios from "axios";

const instance = axios.create({

    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "fe60b097-b6e5-4d15-baef-c67fbfa1fe29"}

})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },

    followUser(id) {
        return instance.post(`follow/${id}`)
    },

    unfollowUser(id) {
        return instance.delete(`follow/${id}`)
    },

    getProfile(userId) {
        return instance.get(`profile/` + userId)

    }

}

export const profileAPI = {
    getStatus(userId) {
        return instance.get(`/profile/status/` + userId)
    },

    updateStatus(status) {
        return instance.put(`/profile/status/`, {status: status})
    }

}


export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe})
    },
    logout() {
        return instance.delete(`auth/login`)
    }

}