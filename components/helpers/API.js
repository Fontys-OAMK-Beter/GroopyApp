import axios from "axios";
import { BASE_URL } from '@env'
import * as SS from 'expo-secure-store'

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
    let token = 'Bearer '

    try {
        token = token + await SS.getItemAsync("token")
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