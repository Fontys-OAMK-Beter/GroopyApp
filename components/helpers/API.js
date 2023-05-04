import axios from "axios";
import { BASE_URL } from '@env'
import * as SS from 'expo-secure-store'
import jwt_decode from 'jwt-decode'

export let UserObj = {}

export const DecodeJWT = async () => {
    try {
        let decoded = {}
        
        var token = await SS.getItemAsync("token")
        token = token.replace(/^Bearer\s+/, "")

        decoded = jwt_decode(token)
        UserObj = {
            userID: decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/userdata'],
            username: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'],
            email: decoded['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress']
        }
        return UserObj
    }catch (e) {
        return e
    }
}


export const Post = (path, body, cb) => {
    axios.post(BASE_URL + path, body, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        cb(res)
    }).catch(err => {
        cb(err)
    })
}

export const Get = (path, cb) => {
    axios.get(BASE_URL + path)
        .then((res) => {
            cb(res)
        }).catch(err => {
            cb(err)
        })
}

export const AuthGet = async (path, cb) => {
    let token = ''
    try {
        token = await SS.getItemAsync("token")
    } catch (e) {
        console.log(e)
    }

    axios.get(BASE_URL + path, {
        headers: {
            'Authorization': token
        }
    })
        .then((res) => {
            cb(res)
        }).catch(err => {
            cb(err)
        })
}

export const AuthPost = async (path, body, cb) => {
    let token = ''
    try {
        token = await SS.getItemAsync("token")
    } catch (e) {
        console.log(e)
    }

    axios.post(BASE_URL + path, body, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }).then(res => {
        cb(res)
    }).catch(err => {
        cb(err)
    })
}