import axios from "axios";
import { BASE_URL } from '@env'

export const Post = (path,body,cb) => {
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