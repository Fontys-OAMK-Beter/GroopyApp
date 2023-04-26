import axios from "axios";
import { BASE_URL } from '@env'
import * as SS from 'expo-secure-store'
import jwt_decode from 'jwt-decode'

export const DecodeJWT = async () => {
    try {
        let decoded
        var token = await SS.getItemAsync("token")
        token = token.replace(/^Bearer\s+/, "")

        decoded = jwt_decode(token)
        return decoded
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